import ButtonAddToCart from "./ButtonAddToCart";
import ItemCount from "./ItemCount";

function ProductCardAddCart({ stock }) {
    return (
        <div className="w-full flex justify-center items-center gap-7 mt-5">
            <ItemCount stock={stock} />
            <ButtonAddToCart />
        </div>
    );
}

export default ProductCardAddCart;