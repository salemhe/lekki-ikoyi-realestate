import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 import this
import { PropertyProvider } from './context/PropertyContext';
import './styles/index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <PropertyProvider>
          <App />
      </PropertyProvider>
    </BrowserRouter>
  </StrictMode>
);
