import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Logement from './pages/Logement';
import Err404 from './pages/Err404';
import Propos from './pages/Propos';

function App() {
  return (
    <>
      <main>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Logement" element={<Logement />} />
              <Route path="/Propos" element={<Propos />} />
              <Route path="*" element={<Err404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
