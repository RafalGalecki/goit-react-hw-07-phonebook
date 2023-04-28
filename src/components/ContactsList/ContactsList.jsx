import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors.js';
import ContactsListElement from '../ContactslistElement/ContactsListElement';
import css from './ContactsList.module.css';

// const filterContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

const ContactsList = () => {
  const items = useSelector(selectContacts);
  //const filter = useSelector(selectFilter);
  //const filteredContacts = filterContacts(contacts, filter);
  return (
    <div className={css.contactsListBox}>
      <h4>
        You have {items.length} contact{items.length === 1 ? null : 's'}
      </h4>
      <ul className={css.contactsList}>
        {items &&
          items.map(contact => (
            <li key={contact.id}>
              <ContactsListElement contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsList;
