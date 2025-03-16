import Login from "./Login.jsx";

function Navigation() {
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
                <div className="flex items-center justify-center mb-2">
                    <a href="/login">
                        <Login />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
