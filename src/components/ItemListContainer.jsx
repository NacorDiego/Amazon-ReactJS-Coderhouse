import ProductCard from "./ProductCard";

function ItemListContainer() {
    return (
        <section className="bg-light-100 pt-10 h-screen">
            <div className="container mx-auto bg-light-100">
                <ProductCard />
            </div>
        </section>
    );
}

export default ItemListContainer;