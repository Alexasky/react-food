import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Recipe } from './pages/Recipe';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
    return (
        <>
            <BrowserRouter basename='/react-food'>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/meal/:id' element={<Recipe />} />
                        {/* Not found routes work as you'd expect */}
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
