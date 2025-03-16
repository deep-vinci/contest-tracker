import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Navigation from "./Navigation";

function App() {
    const veirfyJWT = async (data) => {
        // try {
        //     const response = await axios.post(
        //         "/api/decode-jwt",
        //         { credentials: data } // Request body
        //     );
        //     console.log("Response:", response.data);
        // } catch (error) {
        //     console.error("Error:", error.response?.data || error.message);
        // }

        const decodedData = jwtDecode(data.credential);
        return decodedData;
    };

    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <>
            <div className="w-fit">
                <GoogleLogin
                    theme="outline"
                    type="standard"
                    size="medium"
                    onSuccess={veirfyJWT}
                    onError={errorMessage}
                />
            </div>
        </>
    );
}
export default App;
