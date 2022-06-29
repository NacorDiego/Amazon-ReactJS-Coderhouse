import ProductCardImg from "./ProductCardImg";
import ProductCardText from "./ProductCardText";

function ProductCard() {
    return (
        <div className="bg-light-100 ease-linear duration-300 hover:bg-blue-900/80 hover:text-light-100 hover:shadow-lg hover:shadow-blue-900/40 hover:ease-linear hover:duration-300 hover:scale-125 w-72 h-auto rounded-xl pb-10">
            <ProductCardImg />
            <ProductCardText />
        </div>
    );
}

export default ProductCard;