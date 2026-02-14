import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 800); // fade out after 0.8s idle
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  ) 
}

export default App