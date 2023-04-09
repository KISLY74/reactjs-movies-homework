import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import { SkeletonTheme } from 'react-loading-skeleton';
import AppRouter from 'components/AppRouter/AppRouter';
import { ErrorBoundary } from "react-error-boundary";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <AppRouter />
        </ErrorBoundary>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode >
);
