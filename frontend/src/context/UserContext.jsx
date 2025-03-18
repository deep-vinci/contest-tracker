import {
    createContext,
    useState,
    useContext,
    useEffect,
    children,
} from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const autoLogin = async () => {
            try {
                const response = await axios.get("/api/auth/session", {
                    withCredentials: true,
                });
                console.log("test", response.data.user[0]);
                setUser(response.data.user[0]);
                setLoading(false);
            } catch (error) {
                console.error("err", error);
                setLoading(false);
            }
        };

        autoLogin();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
