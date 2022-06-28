function UserImg( {ruta} ) {
    return (
        <div className="rounded-full border-2 border-yellow hover:shadow-lg hover:shadow-yellow/60 ease-linear duration-500 hover:ease-linear hover:duration-500">
            <img className="rounded-full w-14" src={ruta} alt="Imagen de usuario" />
        </div>
    );
}

export default UserImg;