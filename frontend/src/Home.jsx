import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import axios from "axios";

function Home() {
    const [loggedIn, setLoggedIn] = useState("true");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const autoLogin = async () => {
            try {
                const response = await axios.get("/api/auth/session", {
                    withCredentials: true,
                });
                console.log("test", response.data.user[0]);
                setUser(response.data.user[0]);
                setLoggedIn("true");
            } catch (error) {
                console.error("err", error);
            }
        };

        autoLogin();
    }, []);

    return (
        <>
            <Navigation user={user} updateUser={setUser} />
        </>
    );
}

export default Home;
