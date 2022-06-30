function ItemImg({ img }) {
    return (
        <div className="w-72 h-80 flex items-center justify-center">
            <div className="w-64 h-64 flex justify-center items-center p-5 bg-light-100 rounded-full">
                <img className="w-full h-full" src={img} alt="Imagen de producto" />
            </div>
        </div>
    );
}

export default ItemImg;