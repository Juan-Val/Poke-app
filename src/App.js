import './App.css';
import { Routes, Route } from "react-router-dom";
import { ContenedorPokemon } from './components/ContenedorPokemon';
import { Navbar } from './components/Navbar';
import { Element } from './components/Element';
import { Tipos } from './components/Tipos';
import { NoEncontrado } from './components/NoEncontrado';


function App() {

  return (
    <div className="bg-gris min-h-[100vh] flex">
       <Navbar />
      <Routes>
        <Route path="/" element={<ContenedorPokemon />} />
        <Route path="/" element={ <ContenedorPokemon />} />
        <Route path="/:name" element={ <Element />}  />
        <Route path="/tipo/:tipo" element={ <Tipos />} />
        <Route path="/error" element={ <NoEncontrado/>} />
      </Routes>
    </div>
  );
}

export default App;
