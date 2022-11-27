import React from 'react'
import { Link } from 'react-router-dom'

const Garfield = () => {
  return (
    <div>
        <main>       
             <h1>Garfield</h1>
        <Link to='/kittens'>Back</Link>
        <Link to='/contact'>Contact us</Link>
        </main>

    </div>
  )
}

export default Garfield