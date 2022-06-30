import ProductCardImg from "./ProductCardImg";
import ProductCardText from "./ProductCardText";
import ProductCardAddCart from "./ProductCardAddCart";

function Item({ categoria, marca, modelo, stock, precio, img }) {
    return (
        <div className="bg-light-100 ease-linear duration-300 hover:bg-blue-700 hover:text-light-100 hover:shadow-lg hover:shadow-blue-900/40 hover:ease-linear hover:duration-300 hover:scale-110 w-72 h-auto rounded-xl pb-10">
            <ProductCardImg img={img} />
            <ProductCardText categoria={categoria} marca={marca} modelo={modelo} stock={stock} precio={precio} />
            <ProductCardAddCart stock={stock} />
        </div>
    );
}

export default Item;