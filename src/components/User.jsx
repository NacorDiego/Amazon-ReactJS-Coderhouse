import UserImg from "./UserImg";
import UserText from "./UserText";
import { Link } from "react-router-dom";

function User({nombre}) {
    return (
        <Link to='/user/login'>
            <div className="flex flex-row justify-start items-center gap-4">
                <UserImg ruta="/assets/imgs/userImg.jpg" />
                <UserText nombre={nombre} />
            </div>
        </Link>
    );
}

export default User;