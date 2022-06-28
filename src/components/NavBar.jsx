import Logo from "./Logo";
import ButtonBars from "./ButtonBars";
import FormSearch from "./FormSearch";
import User from "./User";
import CartWidget from "./CartWidget";


function NavBar() {
    return (
        <nav className="h-20 w-full bg-blue-900 flex flex-row items-center justify-between px-5 shadow-lg shadow-blue-900/50">
            <div className="flex gap-x-5 items-center">
                <Logo ruta="./assets/imgs/logo.svg" />
                <ButtonBars />
            </div>
            <FormSearch />
            <div className="flex gap-x-14 items-center">
                <User nombre="Bob" />
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;