
import './App.css'
import ContactList from './components/ContactList/ContactList'
import contacts from './contacts.json';

function App() {


  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* 
  <ContactForm />
        <SearchBox />
  */}
  <ContactList contacts={contacts} />
</div>

    </>
  )
}

export default App
