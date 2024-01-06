import React from 'react'

function Card({username = " SD ", post = "not assigned yet"}) {
  return (
    <div>
        <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt=""/>
        <h1 className="text-2xl bg-green-500 p-3 rounded"></h1>    
    </div>
  )
}

export default Card