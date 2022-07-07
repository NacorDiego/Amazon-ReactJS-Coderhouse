import { Link } from "react-router-dom";

function Categorys() {
    return (
        <ul className="grow flex items-center justify-between gap-4">
            <li><Link to="/" className="text-lg text-white font-medium hover:text-yellow-100 ease-linear duration-150">Todos</Link></li>
            <li><Link to="/category/A" className="text-lg text-white font-medium hover:text-yellow-100 ease-linear duration-150">Electrónica</Link></li>
            <li><Link to="/category/B" className="text-lg text-white font-medium hover:text-yellow-100 ease-linear duration-150">Indumentaria</Link></li>
        </ul>
    );
}

export default Categorys;