export default function Footer() {
    return (
        <footer className="flex flex-col space-y-5 justify-center bg-offwhite pt-5 pb-5">

        <nav className="flex justify-center flex-wrap gap-10 text-darkgreen font-sm">
            <a className="hover:text-lightgreen" href="../pages/home">Home</a>
            <a className="pr-5 pl-5 hover:text-lightgreen" href="../pages/products">Products</a>
            <a className="pr-5 pl-5 hover:text-lightgreen" href="../pages/services">Services</a>
            <a className="hover:text-lightgreen" href="../pages/contact">Contact Us</a>
        </nav>
    
        <div className="flex justify-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
        </div>
        <p className="text-center text-darkgreen font-sm">&copy; 2022 Company Ltd. All rights reservered.</p>
    </footer>
    ) 
}
