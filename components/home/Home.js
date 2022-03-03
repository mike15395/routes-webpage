import React from 'react'
import Card from '../card/Card'
import './Home.css'
function Home() {
  return (
      <div >
          <h2>Hello you have been routed to home page</h2>
          <div className='home-body'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
          </div>
    </div>
  )
}

export default Home