import { useGoogleLogin } from "@react-oauth/google";

import Navigation from "./components/Navigation";

function App() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse),
    });

    return (
        <>
            <div className="flex flex-col h-[100vh]">
                <Navigation />
                <div className="w-full h-[100vh] grow flex justify-center items-center">
                    <button
                        className="bg-black text-white px-3 py-1.5 rounded-md text-sm"
                        onClick={() => login()}
                    >
                        Sign with Google
                    </button>
                </div>
            </div>
        </>
    );
}
export default App;
