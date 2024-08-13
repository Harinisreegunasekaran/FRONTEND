import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Notice the correct usage here
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './Context/ShopContext.jsx';
// import LoginSignup from './Pages/LoginSignup.jsx';

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
);
 