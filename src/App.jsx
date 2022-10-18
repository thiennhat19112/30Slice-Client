import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
// import page
import Booking from './pages/Booking';
import Products from './pages/Products';
import Detail from './pages/Detail';
// import component
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
    return (
        <BrowserRouter>
          <div className='inner-page'>
            <Header />
            <main>
              <article>
                <Routes>
                  <Route path="/" exact element={<Booking />} />
                  <Route path="/booking" exact element={<Booking />} />
                  <Route path="/products" exact element={<Products />} />
                  <Route path="/products/id" exact element={<Detail />} />
                </Routes>
              </article>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      );
}

export default App;