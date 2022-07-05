import Item from "./Item";

function ItemList({ productos }) {
    return (
        <div className="w-full flex justify-start flex-wrap items-start gap-16">
            {productos.map(
                i => <Item key={i.id} id={i.id} categoria={i.categoria} marca={i.marca} modelo={i.modelo} stock={i.stock} precio={i.precio} img={i.img} />
            )}
        </div>
    );
}

export default ItemList;