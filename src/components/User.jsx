import UserImg from "./UserImg";
import UserText from "./UserText";

function User({nombre}) {
    return (
        <div className="flex flex-row justify-start items-center gap-4">
            <UserImg ruta="./assets/imgs/userImg.jpg" />
            <UserText nombre={nombre} />
        </div>
    );
}

export default User;