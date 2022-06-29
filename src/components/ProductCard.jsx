import ProductCardImg from "./ProductCardImg";
import ProductCardText from "./ProductCardText";

function ProductCard() {
    return (
        <div className="bg-light-100 ease-linear duration-300 hover:bg-blue-900 hover:text-light-100 hover:shadow-lg hover:ease-linear hover:duration-300 hover:scale-125 hover:border-2 hover:border-blue-900 w-72 h-auto rounded-xl p-5">
            <ProductCardImg />
            <ProductCardText />
        </div>
    );
}

export default ProductCard;