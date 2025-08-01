import { Link } from "react-router-dom"
import { Briefcase, Sparkles } from "lucide-react"

const FooterLinks = [
    { title: "Home", href: "/" },
    { title: "My Portfolio", href: "https://yash-portfolio-dev.vercel.app/" },
    { title: "About Me", href: "/about" },
    { title: "My Github", href: "https://github.com/GitYashRepo" },
    { title: "Contact Me", href: "/contact" },
    { title: "Linked In", href: "https://www.linkedin.com/in/yash-singh-fullstackdev/" },
]


const Footer = () => {
    return (
        <footer className="relative bg-background py-20 md:py-24 lg:py-32 overflow-hidden border-t">
            <div className="absolute inset-0 z-0 opacity-5">
                <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <div className="mb-16 md:mb-20 lg:mb-24 max-w-3xl">
                    <Link to="/" className="inline-flex items-center justify-center mb-6">
                        <Sparkles className="h-10 w-10 text-blue-500 animate-pulse-slow" />
                        {" "}
                        <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-600 tracking-tighter ml-3">
                            Project <span className="text-red-600">- </span><span className="text-blue-600">One</span>
                        </span>
                    </Link>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-600 font-light">
                        Elevate your style with premium, comfortable fashion designed for modern living — where quality meets everyday confidence.
                    </p>
                </div>
                <h1 className="pb-8 text-2xl text-center font-medium text-gray-700">Quick Links</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 w-full max-w-5xl mb-16 md:mb-20">
                    {FooterLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>


                <div className="pt-8 border-t border-gray-200 w-full max-w-5xl text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Project-One. All rights reserved.
                </div>
                <div className="flex justify-center pt-8 border-gray-200 w-full max-w-5xl text-center text-sm text-gray-500">
                    <a
                        href="https://yash-portfolio-dev.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-foreground transition-colors duration-300"
                    >
                        <span className="hidden sm:inline">Created by</span>
                        <span className="sm:hidden">By</span>
                        <Briefcase className="w-4 h-4 text-gray-800 animate-pulse" />
                        <span className="hidden sm:inline">Yash Singh</span>
                        <span className="sm:hidden">YS</span>
                    </a>
                </div>

            </div>
        </footer>
    )
}



export default Footer;
