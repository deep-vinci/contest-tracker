import Login from "./Login.jsx";

function Navigation({ user, loggedIn, updateUser }) {
    console.log(user);
    return (
        <nav className="">
            <div className="z-40 w-full max-w-[1400px] mx-auto sm:px-6 lg:px-8 flex justify-end gap-10 p-5 items-center">
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

                {user === null ? (
                    <Login updateUser={updateUser} />
                ) : (
                    <img
                        className="w-10 h-10 rounded-full"
                        src={user.picture}
                    />
                )}
            </div>
        </nav>
    );
}

export default Navigation;
