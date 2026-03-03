import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import HospitalChatbot from './commoncomponents/HospitalChatbot' // ✅ MUST
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
      }, 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />

      {/* ✅ GLOBAL CHATBOT */}
      <HospitalChatbot />

    </BrowserRouter>
  ) 
}

export default App