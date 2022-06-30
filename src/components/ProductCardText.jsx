function ProductCardText({ categoria, marca, stock, precio, modelo }) {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-3">
            <span className="text-xl font-medium">{categoria} {marca} {modelo}</span>
            <span className="text-xl font-medium text-yellow">$ {precio}</span>
            <a className="text-sky-100 hover:text-sky text-md font-medium" href="/">VER DETALLES</a>
        </div>
    );
}

export default ProductCardText;