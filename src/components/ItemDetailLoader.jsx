import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ItemDetailLoader() {
    return (
        <div className="w-full h-full flex justify-center items-center gap-4">
            <FontAwesomeIcon className="animate-spin text-5xl text-sky-100" icon={faSpinner} />
            <span className="text-5xl text-blue-900 font-medium">Cargando...</span>
        </div>
    );
}