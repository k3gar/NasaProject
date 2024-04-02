import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Main from './components/Main';

import './styles/main.css';

const queryClient = new QueryClient();

function App() {
  //añadí un proveedor envolviendo la app para que funcione react/query en el componente NasaCard
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
