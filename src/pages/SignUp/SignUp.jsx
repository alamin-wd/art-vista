import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import SocialLogins from "../SocialLogins/SocialLogins";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        // console.log(form.email.value, form.password.value);
        createUser(email, password, name, photoURL)
            .then(result => {
                console.log(result.user);

                const user = {email};

                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your account has been created successfully!',
                        confirmButtonColor: '#3085d6'
                    });

                form.reset();
                navigate("/signIn");
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

    return (

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

                                <button className="absolute inset-y-0 right-3 mt-8"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <IoMdEyeOff />
                                            :
                                            <IoMdEye />
                                    }
                                </button>

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
    );
};

export default SignUp;