import ComponentA from './ComponentA';
import Header from './Header';
import { createContext, useState } from 'react';

export const DataContext = createContext();

function App() {

  const [user, setUser] = useState("Kalpesh");
  const [cart, setCart] = useState(29);

  return (
    <DataContext.Provider value={{ user, setUser, cart, setCart }}>
      <Header />
      <ComponentA />
    </DataContext.Provider>
  );
}

export default App;
