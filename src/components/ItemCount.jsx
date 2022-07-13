// import { useState } from "react";

function ItemCount({ num, sumar, restar, stock }) {
    // const [num, setNum] = useState(1);

    // const sumar = () => {
    //     setNum(num + 1)
    // }

    // const restar = () => {
    //     if (num > 1) {
    //         setNum(num - 1)
    //     }
    // }

    let stockActual = stock - num;

    return (
        <div className="flex flex-col items-start gap-1">
            <div>{(stockActual === 0) ? <span className="text-sky-100 font-light">Sin stock</span> : <span className="text-yellow font-light">{stockActual} disponibles</span>}</div>
            <div className="flex items-center">
                <button className={ (stock <= num) ? "h-7 px-4 py-2 flex items-center justify-center rounded-l-full bg-light-300 text-blue-700" : "h-7 px-4 py-2 flex items-center justify-center rounded-l-full bg-sky-100 text-white" } onClick={sumar} disabled={ (stock <= num) ? true : false } >+</button>
                <div className="h-7 w-16 flex justify-center items-center bg-light-100 text-blue-900">
                    <span className="text-lg font-normal">{num}</span>
                </div>
                <button className={(num <= 1) ? "h-7 px-4 py-2 flex items-center justify-center rounded-r-full bg-light-300 text-blue-700" :"h-7 px-4 py-2 flex items-center justify-center rounded-r-full bg-sky-100 text-white"} onClick={restar} disabled={ (num <= 1) ? true : false } >-</button>
            </div>
        </div>
    );
}

export default ItemCount;