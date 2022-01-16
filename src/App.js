import React from 'react';
import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h2>
        Deployed with{' '}
        <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
          Vercel
        </a>
        !
      </h2>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </nav>
    </main>
  );
}

export default App;
