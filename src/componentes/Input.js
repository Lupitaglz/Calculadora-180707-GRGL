import "./Input.css"; 

const Input = ({texto, resultado}) => {
    return (
        <div className="input">
            <div className="resultado">
                <h1>{resultado}</h1>
            </div>
            <div className="texto">
                <h3>{texto}</h3>
            </div>
        </div>
    );
};

export default Input;