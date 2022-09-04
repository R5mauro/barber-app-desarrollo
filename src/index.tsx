import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
const Carrito = lazy(() => import("./components/Carrito/Carrito"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
