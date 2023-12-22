import { useState } from 'react'
import './index.css'
import './componets/ContactList.jsx'
import ContactList from "./componets/ContactList.jsx";
import ContactDetails from "./componets/ContactDetails.jsx";


function App() {

    const [selectedContactId, setSelectedContactId] = useState(null);

    return (
        <  >
            <div className="h-screen w-screen flex justify-center text-xl" >
                {selectedContactId ?
                    <ContactDetails selectedContactId={selectedContactId}
                                    setSelectedContactId={setSelectedContactId}/> :
                    <ContactList setSelectedContactId={setSelectedContactId} />}
            </div>
        < />
    )
}

export default App
