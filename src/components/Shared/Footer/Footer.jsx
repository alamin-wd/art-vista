import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <Link to={"/"}>
                        <button className="text-4xl font-bold mb-4">Art Vista</button>
                    </Link>
                    <p>
                        Your premier destination for unique, handcrafted <br />arts and crafts. Discover, create, and inspire <br />with our curated collections.
                    </p>

                    <div className="flex items-center gap-4 text-2xl mt-4">
                        <a className="hover:text-[#1877F2]" href=""><FaFacebookF /></a>

                        <a className="hover:text-[#E87642]" href=""><FaInstagram /></a>

                        <a className="hover:text-[#14171A]" href=""><FaTwitter /></a>

                        <a className="hover:text-[#0077B5]" href=""><FaLinkedin /></a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Category</h6>
                    <a className="link link-hover">Landscape Painting</a>
                    <a className="link link-hover">Portrait Drawing</a>
                    <a className="link link-hover">Watercolor Painting</a>
                    <a className="link link-hover">Oil Painting</a>
                    <a className="link link-hover">Charcoal Sketching</a>
                    <a className="link link-hover">Cartoon Drawing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Menus</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Art & Craft Items</a>
                    <a className="link link-hover">Add Craft Items</a>
                    <a className="link link-hover">Update Craft Items</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <div className="font-medium text-center py-3 bg-base-300">
                <p>
                    <small>Copyright © ${new Date().getFullYear()} - All right reserved by Art Vista</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;