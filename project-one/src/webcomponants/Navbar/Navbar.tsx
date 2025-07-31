import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setTheme, type Theme } from "../../store/themeSlice"
import type { RootState } from "../../store/index"

const Navbar = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme)
  const dispatch = useDispatch()
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as Theme))
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 shadow-lg transition-colors duration-300 ease-in-out bg-background text-foreground border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/icon/favicon-32x32.png" className="w-auto h-8" alt="" />
          <span className="text-xl font-bold tracking-wider font-playful">Project-One</span>
        </Link>
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
        <div className="flex space-x-2">
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
      </div>
    </header>
  )
}

export default Navbar
