import type React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setTheme, type Theme } from "../../store/themeSlice"
import type { RootState } from "../../store/index"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as Theme));
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 shadow-lg transition-colors duration-300 ease-in-out bg-background text-foreground border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/icon/favicon-32x32.png" className="w-auto h-8" alt="Project-One" />
          <span className="text-xl font-bold tracking-wider font-playful">Project-One</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <select
            title="Theme Switcher"
            id="theme-select"
            name="theme"
            value={currentTheme}
            onChange={handleThemeChange}
            className="block w-full max-w-xs rounded-md border border-input bg-background py-2 pl-3 pr-10 text-base text-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm hidden md:flex"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={closeMobileMenu} aria-hidden="true"></div>
      )}

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="p-2 rounded-md text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
          <Link
            to="/"
            className="block py-2 hover:text-primary transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-primary transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-primary transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-4">
          <select
            title="Theme Switcher"
            id="theme-select"
            name="theme"
            value={currentTheme}
            onChange={handleThemeChange}
            className="block w-full max-w-xs rounded-md border border-input bg-background py-2 pl-3 pr-10 text-base text-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
