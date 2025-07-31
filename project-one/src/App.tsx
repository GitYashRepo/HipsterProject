import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./webcomponants/Navbar/Navbar"
import Footer from "./webcomponants/Footer/Footer"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store/index.ts"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <main className="pt-20 min-h-screen bg-background text-foreground">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </PersistGate>
    </Provider>
  )
}

export default App
