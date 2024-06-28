import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogins = () => {

    const { googleLogin, githubLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate("/"); 
            })
            .catch(error => {
                console.error(error);
                setLoading(false); 
            });
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                navigate("/"); 
            })
            .catch(error => {
                console.error(error);
                setLoading(false); 
            });
    }
    
    return (
        <div className="space-y-8">

            <button onClick={handleGoogleLogin}
                className="btn btn-outline w-full hover:bg-[#0F9D58] text-[#0F9D58] text-lg">
                <FaGoogle />
                Continue With Google
            </button>
            <button
                className="btn btn-outline w-full hover:bg-[#4267B2] text-[#4267B2] text-lg">
                <FaFacebookF />
                Continue With Facebook
            </button>
            
            <button onClick={handleGithubLogin}
                className="btn btn-outline w-full text-lg">
                <FaGithub />
                Continue With Github
            </button>

        </div>
    );
};

export default SocialLogins;