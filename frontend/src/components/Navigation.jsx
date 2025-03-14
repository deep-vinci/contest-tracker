function Navigation() {
    return (
        <nav className="bg-gray-100">
            <div className="w-full max-w-[1400px] mx-auto sm:px-6 lg:px-8 flex justify-end gap-10 p-5">
                <div className="mx-auto ml-0">Logo</div>
                <div>
                    <a href="#">Contests</a>
                </div>
                <div>
                    <a href="#">Information</a>
                </div>
                <div>
                    <a href="/about">About</a>
                </div>
                <div>
                    <a href="#">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
