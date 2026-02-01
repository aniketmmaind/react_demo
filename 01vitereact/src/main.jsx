import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


function MyApp() {
  return (
    <>
      <h1>Custom App </h1>
    </>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
);

const anotherUser = "chai or React"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  anotherUser
);

createRoot(document.getElementById('root')).render(
  reactElement
)
