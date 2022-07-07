import { Link } from 'react-router-dom'

function Logo( {ruta} ) {
    return (
        <Link to="/">
            <img className="w-28" src={ruta} alt="Logo" />
        </Link>
    );
}

export default Logo;