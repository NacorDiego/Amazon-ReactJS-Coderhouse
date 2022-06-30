import ButtonAddToCart from "./ButtonAddToCart";
import ItemCount from "./ItemCount";

function ItemAddCart({ stock }) {
    return (
        <div className="w-full flex justify-center items-end gap-7 mt-5">
            <ItemCount stock={stock} />
            <ButtonAddToCart />
        </div>
    );
}

export default ItemAddCart;