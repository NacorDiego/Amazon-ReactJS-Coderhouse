function CartContainer() {
    return (
        <div className="container mx-auto h-screen w-full">
            <div className="h-4/6 w-full grid grid-rows-4 grid-flow-col gap-8 mt-20">
                <div className="bg-sky col-span-4"></div>
                <div className="bg-sky col-span-3 row-span-3"></div>
                <div className="bg-sky col-span-1 row-span-1"></div>
                <div className="bg-sky col-span-1 row-span-2"></div>
            </div>
        </div>
    );
}

export default CartContainer;