import Login from "./Login.jsx";
import UserTab from "./UserTab.jsx";
import { useUser } from "../context/UserContext.jsx";
function Navigation() {
    // console.log("user", user);
    const { user, setUser, loading } = useUser();

    return (
        <nav className="sticky top-0">
            <div className="z-40 w-full max-w-[1400px] mx-auto sm:px-6 lg:px-8 rounded-full p-5 ">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-end sm:gap-10 items-center">
                    <div className="mx-auto ml-0 logo">
                        <a href="/">hackHunt</a>
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
                    {loading ? (
                        "loading"
                    ) : user === null ? (
                        <Login />
                    ) : (
                        <UserTab user={user} />
                    )}
                    {/* {user === null ? <Login /> : <UserTab user={user} />} */}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
