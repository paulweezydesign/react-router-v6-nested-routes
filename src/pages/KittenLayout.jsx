import React from 'react'
import { Outlet } from 'react-router-dom'

const KittenLayout = () => {
  return (
    <div>
     
       <Outlet /> 
    </div>
  )
}

export default KittenLayout