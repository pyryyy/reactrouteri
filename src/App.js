import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Form
  } from "react-router-dom";
import './App.css';
import { Home, About, Contact, NotFound} from "./functions";

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor : "coral"}}>
        <h1>REACT ROUTER</h1>
        <h3>Tää on muuten tosi kätevä komponentti!</h3>
      </div>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
