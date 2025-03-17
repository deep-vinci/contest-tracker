import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Login({ updateUser }) {
    const postUserData = async (data, jwt) => {
        try {
            const response = await axios.post(
                "/api/auth/signup-or-login",
                {
                    data,
                    jwt,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("User data posted successfully:", response.data);
            return response.data; // Return the response if needed
        } catch (error) {
            console.error("Error posting user data:", error);
            throw error; // Handle error properly
        }
    };

    const updateUserState = (data) => {
        const jwt = data;
        const decodedData = jwtDecode(data.credential);
        updateUser(decodedData);
        postUserData(decodedData, jwt);
    };

    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <>
            <GoogleLogin
                theme="outline"
                type="standard"
                size="medium"
                useOneTap="true"
                onSuccess={updateUserState}
                onError={errorMessage}
            />
        </>
    );
}
export default Login;
