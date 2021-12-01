import React from 'react';

import "./App.css";
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalSyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalSyle />
    </>
  );
}
