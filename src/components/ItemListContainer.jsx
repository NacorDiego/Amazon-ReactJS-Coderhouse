import ProductCard from "./ProductCard";

function ItemListContainer() {
    return (
        <section className="bg-light-100 pt-32 min-h-screen pb-32">
            <div className="container mx-auto bg-light-100 flex flex-col items-start gap-16">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-3xl text-blue-900 font-medium">Catálogo de productos</h1>
                    <a className="text-xl text-sky-100 font-normal" href="/">Ver más</a>
                </div>
                <div className="w-full flex justify-start flex-wrap items-start gap-16">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
}

export default ItemListContainer;