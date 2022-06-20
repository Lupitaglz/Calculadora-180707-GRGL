import "./Boton.css";

const Boton = ({ symbol, color, hacerClick }) => {
    return (
        <div 
            onClick={() => hacerClick(symbol)}
            className="boton" style={{backgroundColor: color}}>
            {symbol}
        </div>
    );
};

export default Boton;
 