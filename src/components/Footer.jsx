import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div className="bg-gray-800 text-white py-8 mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About</h3>
                        <p className="text-sm">
                            GameZone is the ultimate destination for all your gaming needs. Find the latest reviews, updates, and trends in the gaming world.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Trending</a></li>
                            <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Genres</a></li>
                            <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-xl hover:text-gray-400">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-xl hover:text-gray-400">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-xl hover:text-gray-400">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-xl hover:text-gray-400">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <ul>
                            <li className="mb-2"><span className="text-sm">Email: support@gamezone.com</span></li>
                            <li className="mb-2"><span className="text-sm">Phone: +1 234 567 890</span></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">
                        &copy; 2025 GameZone. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
