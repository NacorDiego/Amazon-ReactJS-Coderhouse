import { Link } from "react-router-dom";
function ItemText({ id, detail, setDetail, categoria, marca, stock, precio, modelo }) {

    return (
        <div className="w-full flex flex-col justify-center items-center gap-3">
            <span className="text-xl font-medium">{categoria} {marca} {modelo}</span>
            <span className="text-xl font-medium text-yellow">$ {precio}</span>
            <Link className="text-sky-100 hover:text-sky text-md font-medium" to={`/item/${id}`}>VER DETALLES</Link>
        </div>
    );
}

export default ItemText;