
function Button({ name }) {
    return (
        <button className="bg-primario rounded text-blanco font-medium px-10 py-3 shadow-lg shadow-primario/40 hover:bg-primario-dark hover:shadow-primario-dark/40 transition-all text-base">
            {name}
        </button>
    );
}

export default Button;