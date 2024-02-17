import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-5 justify-center bg-offwhite pt-5 pb-5">
      <nav className="flex justify-center flex-wrap gap-10 text-darkgreen font-sm">
        <a className="text-lg hover:text-lightgreen" href="/home">Home</a>
        <a className="pr-5 pl-5 text-lg hover:text-lightgreen" href="/products">Products</a>
        <a className="pr-5 pl-5 text-lg hover:text-lightgreen" href="/services">Services</a>
        <a className="text-lg hover:text-lightgreen" href="/contact">Contact Us</a>
      </nav>

      <div className="flex justify-center space-x-5">
        <a href="https://m.facebook.com/p/Revitalize-Massage-Wellness-100086483143748/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
        </a>

        <a href="https://www.instagram.com/revitalizemassagewellness/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
        </a>

        <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Frevitalizemassagewellness%2Freels%2F&source=direct" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Facebook Messenger" />
        </a>
      </div>

      <p className="text-center text-darkgreen font-sm">&copy; 2022 Company Ltd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
