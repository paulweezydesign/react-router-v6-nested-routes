import React from 'react'
import { Link } from 'react-router-dom'

const Kittens = () => {
  return (
    <div>
        <h1>Kittens</h1>
       <Link to='/kittens/filaberta'>Filaberta</Link>
       <Link to='/kittens/garfield'>Garfield</Link>
       <Link to='/kittens/pancake'>Pancake</Link>
        <Link to='/kittens/rocket'>Rocket</Link>    

    </div>
  )
}

export default Kittens