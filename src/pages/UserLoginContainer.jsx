import LoginFormContainer from "../components/LoginFormContainer";
import LoginImgContainer from "../components/LoginImgContainer";

function UserLoginContainer() {
    return (
        <main className="bg-blue-900">
            <div className="container mx-auto h-screen flex justify-center items-center">
                <div className="w-full h-4/6 border-2 border-yellow flex rounded-3xl shadow-lg shadow-blue-900/30">
                    <LoginImgContainer />
                    <LoginFormContainer />
                </div>
            </div>
        </main>
    );
}

export default UserLoginContainer;