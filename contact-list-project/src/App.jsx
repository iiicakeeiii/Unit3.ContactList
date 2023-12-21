import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './componets/ContactList.jsx'
import ContactList from "./componets/ContactList.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <ContactList/>
      </div>
    < />
  )
}

export default App
