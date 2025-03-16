import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login({ updateUser }) {
    const veirfyJWT = async (data) => {
        const decodedData = jwtDecode(data.credential);
        updateUser(decodedData);
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
                    useOneTap="true"
                    onSuccess={veirfyJWT}
                    onError={errorMessage}
                />
            </div>
        </>
    );
}
export default Login;
