import React, { useContext } from 'react'
import './CSS/ShopCategory.css'

export const ShopCategory = () => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      ShopCategory
      </div>
  )
}
