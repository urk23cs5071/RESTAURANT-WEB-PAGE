import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-black">
          <Navbar />
          <Hero />
          <Menu />
          <Reservation />
          <About />
          <Contact />
          <Footer />
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
