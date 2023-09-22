export const ContactList = ({contacts, handleDelete}) => {
    return <ul>
        {contacts.map(contact => <li key={contact.id}><span>{contact.name}</span>: <span>{contact.number}</span> <button type="button" onClick={() => handleDelete(contact.id)}>Delete</button></li>)}
    </ul>
}