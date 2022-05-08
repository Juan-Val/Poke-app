import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ContenedorPokemon } from './components/ContenedorPokemon';
import { Navbar } from './components/Navbar';
import { Element } from './components/Element';
import { Tipos } from './components/Tipos';

function App() {
  return (
    <div className="bg-gris min-h-[100vh] flex ">
       <Navbar />
      <Routes>
        <Route path="/" element={ <ContenedorPokemon />} />
        <Route path="/:name" element={ <Element />}  />
        <Route path="/tipo/:tipo" element={ <Tipos />} />
      </Routes>
    
   
    </div>
  );
}

export default App;
