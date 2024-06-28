import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import SocialLogins from "../SocialLogins/SocialLogins";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
       
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        const isPasswordValid = validatePassword(password);

        if (!isPasswordValid) {
            Swal.fire({
                html: 'Password must contain:<br>- At least one uppercase letter<br>- At least one lowercase letter<br>- Minimum 6 characters',
                confirmButtonText: 'OK'
            });
            return;
        }

        createUser(email, password, userName, photoURL)
            .then(result => {
                console.log(result);

                const user = { userName, email, password, photoURL };

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Congratulation!',
                                text: 'You have Successfully Sign Up',
                                icon: 'success',
                                confirmButtonText: 'Next'
                            })
                                .then(() => {
                                    navigate('/signIn');
                                    form.reset();
                                });
                        }
                    })
            })
            .catch(error => {
                console.error(error);
            })

    };

    //To validate password
    const validatePassword = (password) => {

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRequirement = password.length >= 6;

        return uppercaseRegex.test(password) && lowercaseRegex.test(password) && lengthRequirement;
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
                <title>Sign Up || Art Vista</title>
            </Helmet>

            <div className="mt-6 py-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ...">
                <div className="text-center">
                    <h3 className="text-5xl font-bold mb-4">Sign Up</h3>
                    <p>Already have an account?
                        <span className="px-1 text-blue-600 hover:text-blue-400 hover:underline">
                            <Link to={"/signIn"}>Sign In</Link>
                        </span>
                    </p>
                </div>

                <div className="w-2/3 mx-auto grid md:grid-cols-7 md:justify-center md:items-center my-6">
                    <div className="col-span-3">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            <form onSubmit={handleSignUp}
                                className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered" required />
                                </div>

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
                                    {/* <p>
                                        <small>Must contain at least 6 characters, 1 Uppercase and 1 lowercase. </small>
                                    </p> */}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Photo URL</span>
                                    </label>
                                    <input
                                        type="url"
                                        name="photoURL"
                                        placeholder="Photo URL"
                                        className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input
                                        type="submit"
                                        value="Sign Up"
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

export default SignUp;

