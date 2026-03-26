import React from 'react';
import ReactDOM from 'react-dom/client';
import SeoPage from './SeoPage';
import './styles.css';

const pageKey = document.body.dataset.pageKey;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SeoPage pageKey={pageKey} />
  </React.StrictMode>,
);
