import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='m-16 items-center flex flex-col gap-8'>
        <h2>What you would like to do now???</h2>
        <Link to='create_question'>Create Question</Link>
        <Link to='test'>German-Rus Test</Link>
        <Link to='test'>Rus-German Test</Link>
    </div>
  )
}

export default HomePage