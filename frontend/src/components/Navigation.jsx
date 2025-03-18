import Login from "./Login.jsx";
import UserTab from "./UserTab.jsx";
import { useUser } from "../context/UserContext.jsx";
function Navigation() {
    // console.log("user", user);
    const { user, setUser } = useUser();

    return (
        <nav className="">
            <div className="z-40 w-full max-w-[1400px] mx-auto sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:justify-end sm:gap-10 p-5 items-center">
                <div className="mx-auto ml-0 def">
                    <a href="/">Logo</a>
                </div>
                <div>
                    <a href="#">Contests</a>
                </div>
                <div>
                    <a href="#">Information</a>
                </div>
                <div>
                    <a href="/about">About</a>
                </div>

                {user === null ? <Login /> : <UserTab user={user} />}
            </div>
        </nav>
    );
}

export default Navigation;
