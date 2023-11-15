import React from 'react'

const NavCategory = () => {
  return (
  <nav className="bg-azs p-4 py-2 flex items-center justify-between border-2 border-azs text-azf">
    <div className="hidden md:flex items-center ml-16">
    <button className="text-xl font-init font-semibold ml-10 bg-azt text-azp rounded-lg px-2 py-1">
    Electrodomesticos
    </button >
    <button className="text-xl font-init font-semibold ml-12 bg-azt text-azp rounded-lg px-2 py-1">
    Celulares
    </button >
    <button className="text-xl font-init font-semibold ml-12 bg-azt text-azp rounded-lg px-2 py-1">
    Computadores
    </button >
    <button className="text-xl font-init font-semibold ml-12 bg-azt text-azp rounded-lg px-6 py-1">
    TV
    </button >
    <button className="text-xl font-init font-semibold ml-12 bg-azt text-azp rounded-lg px-2 py-1">
    Accesorios
    </button >
    <button className="text-xl font-init font-semibold ml-12 bg-azt text-azp rounded-lg px-2 py-1">
    Videojuegos
    </button >
    </div>
  </nav>
  )
}

export default NavCategory