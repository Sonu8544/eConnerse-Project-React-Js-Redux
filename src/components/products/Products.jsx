import React from 'react'
import { useState, useEffect } from 'react'
import fakeStoreApi from '../../services/fake-store-api'
import { Item } from '../item'
import { useSearchParams } from 'react-router-dom'

const Products = () => {
   const [loading, setLoading] =useState(true)
   const [product, setProduct] = useState([])
  const [query, setQuery] = useSearchParams()

  const searchQuery = query.get("q")
  
  useEffect(() =>{
     const fetchProducts = async () =>{
      setLoading(true)
      const products = searchQuery ? await fakeStoreApi.fetchProductByQuery(searchQuery) : await fakeStoreApi.fetchAllProducts()
      
      setProduct(products)
      setLoading(false)
     }
      
  }, [searchQuery])
  return ( 
    <div>Products</div>
  )
}

export { Products}