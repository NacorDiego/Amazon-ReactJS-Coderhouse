import Logo from "./Logo";
import ButtonBars from "./ButtonBars";
import FormSearch from "./FormSearch";


function NavBar() {
    return (
        <nav className="h-20 w-full bg-blue-900 flex flex-row items-center gap-x-10 px-5">
            <Logo ruta="./assets/imgs/logo.svg" />
            <ButtonBars />
            <FormSearch />
        </nav>
    );
}

export default NavBar;