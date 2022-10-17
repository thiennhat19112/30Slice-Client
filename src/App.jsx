import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
// import page
import Booking from './pages/Booking';
// import component
import Header from './components/Header';
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
                </Routes>
              </article>
            </main>
          </div>
        </BrowserRouter>
      );
}

export default App;