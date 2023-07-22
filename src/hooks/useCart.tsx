import { ReactNode, createContext, useEffect, useState } from "react"
import { ProductType } from "../services/products"

type CartContextType ={
   cart: ProductType
   addProduct:(product:ProductType) =>void
   removeProduct:(productId:number) =>void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartContextProvider = (props:{
children:ReactNode  
})=>{
  const [cart, setCart] = useState<ProductType[]>([]) 
  
  useEffect(()=>{
  const storedCart = localStorage.getItem('shopping cart')
  
  if(storedCart){
    setCart(JSON.parse(storedCart))
  }
  },[])

  const addProduct = (product:ProductType)=>{
  const updatedCart = [...cart, product] 
  localStorage.setItem('shopping-item',JSON.stringify(updatedCart))
  setCart(updatedCart) 
  }

  const removeProduct
}