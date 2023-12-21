import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './componets/ContactList.jsx'
import ContactList from "./componets/ContactList.jsx";


function App() {

    const [selectedContactId, setSelectedContactId] = useState(null);

    return (
        <>
            <div className="h-screen w-screen flex justify-center text-xl">
                {selectedContactId ? <div>hello</div> : <ContactList/>}
            </div>
        </>
    )
}

export default App
