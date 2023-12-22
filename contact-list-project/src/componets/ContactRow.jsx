const ContactRow = ({contact, setSelectedContactId}) => {
    return(
        <  >
            <tr onClick={ ()=> {setSelectedContactId(contact.id)}}>
                <td className="p-2">{contact.name}</td>
                <td className="p-2">{contact.email}</td>
                <td className="p-2">{contact.phone}</td>
            </tr>
        < />
    )
}

export default ContactRow;