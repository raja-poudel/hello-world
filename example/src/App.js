import React from 'react'

import { ExampleComponent, Greeting } from 'hello-world'
import 'hello-world/dist/index.css'

const App = () => {
  return <>
  
  <ExampleComponent text="Create React Library Example 😄" />
  <Greeting name="John"/>
  </>
}

export default App
