import Item from "./Item";

function ItemList({ productos }) {
    return (
        <div className="w-full flex justify-start flex-wrap items-start gap-16">
            {productos.map(
                i => <Item producto={i} key={i.id} />
            )}
        </div>
    );
}

export default ItemList;