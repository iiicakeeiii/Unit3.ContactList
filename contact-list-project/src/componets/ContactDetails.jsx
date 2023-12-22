import {useState} from "react";
import {useEffect} from "react";
const ContactDetails = ({selectedContactId, setSelectedContactId}) => {
    const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;

    const [contact, setContact] = useState([]);

    useEffect(() => {
        try {
            const  getContact = async() => {
                console.log(API_URL)
                const response = await fetch(API_URL);
                const result = await response.json();
                setContact(result)
                console.log(result)
            }
            getContact();
        } catch (error) {
            console.error(error)
        }
    }, [])

    try {
        return (
            < >
                <div className="border flex-wrap " onClick={()=> {setSelectedContactId(null)}}>
                    <div>Name: {contact.name}</div>
                    <div>Username: {contact.username}</div>
                    <div>Email: {contact.email}</div>
                    <div>Phone: {contact.phone}</div>
                </div>

            </>
        )
    } catch (error) {
        console.error(error)
    }
}

export default ContactDetails;