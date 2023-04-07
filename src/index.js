import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'store';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <App />
      </SkeletonTheme>
    </Provider>
  </React.StrictMode >
);
