import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex gap-8 bg-black text-white flex-wrap p-8"></div>
      <div className="flex gap-10  flex-wrap justify-center bg-black text-white">
        <div>
               <div ><img width={70} height={70} src="/assets/kinaulogo.png"/></div>
          <p>
            Welcome to Ecom, a place for all <br />
            your shopping Needs. @one place. <br />
            Explore our Store for the best products.
          </p>
        </div>
        <div>
          <h1 className="text-lg bold mb-4 ">PRODUCTS</h1>
          <p className="mb-4">FootWear</p>
          <p className="mb-4">Clothing</p>
          <p className="mb-4">Accessories</p>
          <p className="mb-4">Flat 20% off</p>
          <p className="mb-4">New Arrivals</p>
          <p className="mb-4">Trending</p>
        </div>
        <div>
          <h1 className="text-lg bold mb-4">SPORTS</h1>
          <p className="mb-4">Cricket</p>
          <p className="mb-4">Marathon</p>
          <p className="mb-4">Soccer</p>
          <p className="mb-4">Rugby</p>
          <p className="mb-4">Football</p>
          <p className="mb-4">Golf</p>
          <p className="mb-4">Polo</p>
        </div>
        <div>
          <h1 className="text-lg bold mb-4">COLLECTIONS</h1>
          <p className="mb-4">Ultraboost</p>
          <p className="mb-4">Super Nova</p>
          <p className="mb-4">Rust</p>
          <p className="mb-4">Hawk</p>
          <p className="mb-4">Falcon</p>
          <p className="mb-4">Reebok</p>
        </div>
        <div>
          <h1 className="text-lg bold mb-4">SUPPORT</h1>
          <p className="mb-4">About</p>
          <p className="mb-4">Contact</p>
          <p className="mb-4">mail</p>
          <p className="mb-4">Order Tracking</p>
          <p className="mb-4">club</p>
          <p className="mb-4">Trending</p>
        </div>
         <div>
          <h1 className="text-lg bold mb-4">Reach us at</h1>
          <p className="mb-4">Call: +567 987 5678</p>
          <p className="mb-4">Visit Us at: New Road, Kathmandu</p>
          <p className="mb-4">Mail us at: kinaushop@email.com</p>
         
        </div>
        <div>
          <h1 className="text-lg bold mb-4">FOLLOW US</h1>
          <div className="flex gap-4">
            {" "}
            <p className="mb-4">
              <FaFacebook className="text-2xl hover:text-blue-400 cursor-pointer" />
            </p>
            <p className="mb-4">
              <FaInstagram className="text-2xl hover:text-red-600 cursor-pointer" />
            </p>
            <p className="mb-4">
              <FaLinkedin className="text-2xl hover:text-blue-500 cursor-pointer"  />
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">Copyright © 2025. All Rights Reserved.</div>
    </>
  );
};

export default Footer;
