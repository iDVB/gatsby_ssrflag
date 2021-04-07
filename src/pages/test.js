import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Test = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <ol>
        <li>Ensure the browser has NO trailing slash</li>
        <li>Ensure you have done a full page refresh 1 more time that first load.</li>
        <li>You should now be able to see an error in the console about...</li>
      </ol>
      <pre>
        Warning: Prop `aria-current` did not match. Server: "null" Client: "page"
      </pre>
      <GatsbyLink to="/test">Test Page Link</GatsbyLink>
    </div>
  )
}

export default Test
