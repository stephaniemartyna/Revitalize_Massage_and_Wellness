export default function Footer() {
    return (
        <footer className="flex flex-col space-y-5 justify-center bg-offwhite pt-5 pb-5">

        <nav className="flex justify-center flex-wrap gap-10 text-gray-500 font-medium">
            <a className="hover:text-gray-900" href="#">Home</a>
            <a className="hover:text-gray-900 pl-10 pr-10" href="../pages/products">Products</a>
            <a className="hover:text-gray-900" href="../pages/contact">Contact</a>
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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
        </div>
        <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
    </footer>
    ) 
}
