import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogins = () => {

    return (
        <div className="space-y-8">
            {/* onClick={handleGoogleLogin} */}
            <button
                className="btn btn-outline w-full hover:bg-[#0F9D58] text-[#0F9D58] text-lg">
                <FaGoogle />
                Continue With Google
            </button>
            <button
                className="btn btn-outline w-full hover:bg-[#4267B2] text-[#4267B2] text-lg">
                <FaFacebookF />
                Continue With Facebook
            </button>
            {/* onClick={handleGithubLogin} */}
            <button
                className="btn btn-outline w-full text-lg">
                <FaGithub />
                Continue With Github
            </button>

        </div>
    );
};

export default SocialLogins;