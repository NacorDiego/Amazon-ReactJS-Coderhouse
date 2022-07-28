import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import BuyerForm from "../components/BuyerForm";

function BuyerFormContainer() {
    return (
        <main className="bg-blue-900">
            <div className="container min-h-screen w-full flex pb-20">
                <div className="h-4/6 w-full">
                    <div className="bg-blue-900 border-b-2 border-b-yellow h-20 w-full grid grid-cols-12 items-center pb-5 mt-36">
                        <div className="col-span-4 flex justify-start">
                            <h1 className="text-5xl text-white font-bold">Comprador</h1>
                        </div>
                        <div className="col-span-4 flex justify-center">
                            <h2 className="text-2xl text-white font-normal">Datos del comprador</h2>
                        </div>
                        <div className="col-span-4 flex justify-end">
                            <span className="text-3xl text-white"><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                    </div>
                    <BuyerForm />
                </div>
            </div>
        </main>
    );
}

export default BuyerFormContainer;