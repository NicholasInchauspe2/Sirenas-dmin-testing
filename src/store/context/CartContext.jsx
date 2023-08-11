import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const APIURL = 'http://localhost:8081'

  const [session, setSession] = useState(true)


  // useEffect(() => {

  // }, []);

  const data = { session, setSession, APIURL };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
