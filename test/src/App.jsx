import { BrowserRouter } from "react-router-dom"
import Product1 from "./parts/products/Product1"
import Product2 from "./parts/products/Product2"
import Product3 from "./parts/products/Product3"
import Footer from "./parts/products/footer/Footer.jsx/Footer"

function App() {
  
  

  return (
    <>
    <div className="App">
    <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>

            <Footer />
          </Router>

    </div>
    

    </>
  )
}

export default App
