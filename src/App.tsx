import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import TopNav from './components/common/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <main className="container my-4">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
