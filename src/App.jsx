
import './App.css';
import { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(contacts); // Перевірте, що контакти коректно імплементовані

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <SearchBox value={searchQuery} onChange={handleSearchChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
