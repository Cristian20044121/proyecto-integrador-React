import React from 'react'
import { Cards } from './Cards/Cards'
import { CarritoDeCompras } from './Cards/CarritoDeCompras/CarritoDeCompras'

export const Main = () => {
  return (
    <div>
        <h1 className='text-primary mt-5'>Listado De Productos</h1>
        <CarritoDeCompras nombre="locion" marca="evon"/>
        <Cards/>
    </div>
  )
}
