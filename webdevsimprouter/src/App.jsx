import { Link, Route , Routes } from 'react-router-dom';
import { Home } from "./pages/Home.jsx";
import { Book } from "./pages/Book.jsx";

function App() {
   return(
    <>
     <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book">Books</Link></li>
      </ul>
     </nav>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Book" element={<Book />} />
    </Routes>
    </>
   );
};

export default App
