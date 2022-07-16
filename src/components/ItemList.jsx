import Item from "./Item";

function ItemList({ productos }) {
    return (
        <div className="flex justify-center flex-wrap items-start gap-24">
            {productos.map(
                i => <Item producto={i} key={i.id} />
            )}
        </div>
    );
}

export default ItemList;