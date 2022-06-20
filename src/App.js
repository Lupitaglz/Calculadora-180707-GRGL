import { useState } from 'react'; 
import * as math from 'mathjs';
import './App.css';
import Boton from "./componentes/Boton";
import Input from './componentes/Input';

const App = () => {
  const [texto, setTexto] = useState ("");
  const [resultado, setResultado] = useState("");

  const addToTexto = (val) =>{
    setTexto((texto) => [...texto, val + " "]);
  };
  const calculadoraResult = () => {
    const input = texto.join("");
    setResultado(math.evaluate(input));
  };
  const resetInput =() => {
    setTexto("");
    setResultado("");
  };

  const botonColor = "#9A91AC";
  return (
    <div className="App">
      <div className='calculadora'>
        <Input texto={texto} resultado={resultado}/>
        <div className='fila'>
          <Boton symbol="7" hacerClick={addToTexto}/>
          <Boton symbol="8" hacerClick={addToTexto}/>
          <Boton symbol="9" hacerClick={addToTexto}/>
          <Boton symbol="*" color={botonColor} hacerClick={addToTexto}/>
        </div>
        <div className='fila'>
          <Boton symbol="4" hacerClick={addToTexto}/>
          <Boton symbol="5" hacerClick={addToTexto}/>
          <Boton symbol="6" hacerClick={addToTexto}/>
          <Boton symbol="-" color={botonColor} hacerClick={addToTexto}/>
        </div>
        <div className='fila'>
          <Boton symbol="1" hacerClick={addToTexto}/>
          <Boton symbol="2" hacerClick={addToTexto}/>
          <Boton symbol="3" hacerClick={addToTexto}/>
          <Boton symbol="+" color={botonColor} hacerClick={addToTexto}/>
        </div>
        <div className='fila'>
          <Boton symbol="0" hacerClick={addToTexto}/>
          <Boton symbol="." hacerClick={addToTexto}/>
          <Boton symbol="=" hacerClick={calculadoraResult}/>
          <Boton symbol="/" color={botonColor} hacerClick={addToTexto}/>
        </div>
          <Boton symbol="Limpiar" color="#957DAD" hacerClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
