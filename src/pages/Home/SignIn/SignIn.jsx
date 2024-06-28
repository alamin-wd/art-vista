import { useContext, useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogins from "../../SocialLogins/SocialLogins";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";


const SignIn = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'You have successfully Sign In!',
                    confirmButtonColor: '#3085d6'
                });

                form.reset();
                navigate(location?.state ? location.state : "/");
            })

            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    confirmButtonColor: '#d33'
                });
            });
    };

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div>
            <Helmet>
                <title>Sign In | Art Vista</title>
            </Helmet>

            <div className="mt-6 py-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ...">
                <div className="text-center">
                    <h3 className="text-5xl font-bold mb-4">Sign In</h3>
                    <p>Don't have any account?
                        <span className="px-1 text-blue-600 hover:text-blue-400 hover:underline">
                            <Link to={"/signUp"}>Sign Up</Link>
                        </span>
                    </p>
                </div>

                <div className="w-2/3 mx-auto grid md:grid-cols-7 md:justify-center md:items-center my-6">
                    <div className="col-span-3">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <form onSubmit={handleSignIn}
                                className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="input input-bordered" required />
                                </div>

                                <div className="form-control relative">

                                    <label className="label">
                                        <span className="label-text text-[#403F3F] font-medium">Password</span>
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="input input-bordered" />

                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-3 mt-8"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowPassword(!showPassword);
                                        }}>

                                        {showPassword ? <IoMdEye /> : <IoMdEyeOff />}

                                    </button>

                                </div>

                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className="bg-blue-700 hover:bg-blue-500 py-3 rounded-lg text-white font-medium" />
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="italic font-medium">Or</p>
                    </div>

                    <div className="col-span-3">
                        {
                            <SocialLogins></SocialLogins>
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignIn;

