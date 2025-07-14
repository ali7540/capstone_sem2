// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001F4A] text-white py-20 px-6 relative overflow-hidden">
      <div className="inset-0 flex justify-center items-center text-[10rem] font-bold text-white/5 select-none">
        BudgetWise
      </div>

      <div className="relative mt-20 z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Subscribe Our Newsletter</h2>
          <form className="flex items-center bg-white rounded-full overflow-hidden max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-6 py-3 text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-white font-semibold rounded-full hover:opacity-90 transition"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-12">
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ’s</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Utility Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">404</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Social Media</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2"> Facebook</li>
              <li className="flex items-center gap-2"> LinkedIn</li>
              <li className="flex items-center gap-2"> Twitter</li>
              <li className="flex items-center gap-2"> Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
