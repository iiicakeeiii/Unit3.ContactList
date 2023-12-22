import React, {useState, useEffect} from "react";
import ContactRow from "./ContactRow.jsx";

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = ({setSelectedContactId}) => {

    const [contacts, setContacts] = useState (dummyContacts);

    useEffect (() => {
        async function fetchContacts() {
            try {
                const request = await fetch(API_URL);
                const response = await request.json();
                setContacts(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, []);

    return (
        <table className="flex flex-col border text-center p">
            <thead>
            <tr>
                <th className="border" colSpan="3">Contact List</th>
            </tr>
            </thead>
            <tbody >
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {contacts.map((contact) => <ContactRow setSelectedContactId={setSelectedContactId} key={contact.id} contact={contact}/>)}
            </tbody>
        </table>
    );
}

export default ContactList;