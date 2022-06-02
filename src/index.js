import React from 'react'
import styles from './styles.module.css'

export const Greeting = ({ name }) => {
  return (
    <div style={{
      height: 100,
      textAlign: 'center',
      border: '1px solid grey',
      margin: 100,
      lineHeight: 5,
      backgroundColor: "green",
      color: 'yellow'
    }}>
      Hello {name}
    </div>
  )
}

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
