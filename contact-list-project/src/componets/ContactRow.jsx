const ContactRow = ({contacts, setContacts}) => {
    return(
        <>
            <tr>
                <td className="p-2">{contacts.name}</td>
                <td className="p-2">{contacts.email}</td>
                <td className="p-2">{contacts.phone}</td>
            </tr>
        </>
    )
}

export default ContactRow;