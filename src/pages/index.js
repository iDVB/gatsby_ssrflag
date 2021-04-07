import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <GatsbyLink to="/test">Test Page Link</GatsbyLink>
    </div>
  )
}

export default Home
