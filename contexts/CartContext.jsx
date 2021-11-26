import React, {useState, useEffect } from "react"

export const CartContext = React.createContext();



export function CartProvider(props) {

  const [currentCart, setCurrentCart] = useState([]);
 



  return (
    <CartContext.Provider value={[currentCart,setCurrentCart]}>
      {props.children}
    </CartContext.Provider>
  )
}
