import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/productSlice"
import type { RootState, AppDispatch } from "../../store"
import ProductCard from "../../webcomponants/ProductCard/ProductCard"

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { items: products, loading, error } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col mb-10 px-4 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-4xl  text-left text-foreground">Objective of assignment:</h1>
        <p className="text-xl text-justify text-foreground">
          Build a React-based web application with a theme switcher. The switcher should allow users to select from
          three distinct themes (Theme 1, Theme 2, Theme 3) using a dropdown in the header. Each theme should not only
          change colors, but also alter structure, fonts, spacing, and layout.
        </p>
        <div className="flex flex-col mb-10 py-10 bg-white text-gray-900 px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="text-4xl  text-left mb-8">Requirements:</h1>
          <ol className="list-decimal list-inside space-y-6">
            <li className="text-xl  mb-2">
              <span className="ml-2">Header</span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li className="text-base">
                  <span className="ml-2">Fixed top header with:</span>
                  <ul className="list-none ml-6 mt-1 space-y-1">
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">App name/logo (dummy)</span>
                    </li>
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">Dropdown to switch between themes (Theme 1 as default)</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-xl  mb-2">
              <span className="ml-2">Themes</span>
              <p className="text-xl text-justify mt-2 mb-4">
                Implement <span className="">three complete themes</span> with noticeable differences:
              </p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li className="text-base">
                  <span>Theme 1 (Default):</span> Minimalist layout with light background, simple
                  sans-serif font
                </li>
                <li className="text-base">
                  <span className="">Theme 2:</span> Dark mode with sidebar layout, bold serif font
                </li>
                <li className="text-base">
                  <span className="">Theme 3:</span> Colorful theme with card-based grid layout, playful Google
                  Font (e.g., "Pacifico")
                </li>
              </ul>
              <p className="text-xl text-justify mt-4">
                Layout, font size, margins, components&apos; structure and overall look should be clearly different
                across themes.
              </p>
            </li>
            <li className="text-xl  mb-2">
              <span className="ml-2">Main Content</span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li className="text-base">
                  <span className="ml-2">Sample content area with:</span>
                  <ul className="list-none ml-6 mt-1 space-y-1">
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">Title</span>
                    </li>
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">Dummy paragraph</span>
                    </li>
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">Button</span>
                    </li>
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">List or Card component</span>
                    </li>
                    <li className="text-base before:content-['•'] before:mr-2 before:text-gray-500">
                      <span className="ml-2">Responsive layout for desktop and mobile</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-xl  mb-2">
              <span className="ml-2">Functionality</span>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li className="text-base">
                  <span className="ml-2">Theme should persist across page reload (use localStorage)</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Use Context API or Redux for theme management</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Try using an api to call the data (https://fakestoreapi.com/products)</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Responsive design using CSS Modules, Tailwind, or Styled-components</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Avoid using large UI libraries like Material UI or Ant Design</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Add subtle animation while switching themes</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">
                    Use React Router and demonstrate the theme across multiple pages (Home, About, Contact)
                  </span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Use TypeScript</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Make sure app is secured</span>
                </li>
                <li className="text-base">
                  <span className="ml-2">Compatible with all devices</span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Our Products</h1>
      {loading === "pending" && (
        <div className="w-full flex justify-center min-h-[calc(100vh-320px)] items-center">
          <p className="text-center">Loading...</p>
        </div>
      )}
      {loading === "failed" && products.length === 0 && (
        <div className="flex justify-center items-center min-h-[calc(100vh-120px)] text-destructive">
          <p className="text-lg">Error: {error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
