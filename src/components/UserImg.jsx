function UserImg( {ruta} ) {
    return (
        <div className="rounded-full border-2 border-yellow">
            <img className="rounded-full w-14" src={ruta} alt="Imagen de usuario" />
        </div>
    );
}

export default UserImg;