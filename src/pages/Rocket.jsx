import React from 'react'
import { Link } from 'react-router-dom'

const Rocket = () => {
  return (
    <div>
        <main>       
             <h1>Rocket</h1>
        <Link to='/kittens'>Back</Link>
        <Link to='/contact'>Contact us</Link>
        </main>

    </div>
  )
}

export default Rocket