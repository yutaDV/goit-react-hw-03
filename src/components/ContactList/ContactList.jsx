import Contact from "../Contact/Contact";
import css from './ContactList.module.css';


const ContactList = ({ contacts }) => {
    return (
        <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact  name={name} number={number} />
        </li>
      ))}
    </ul>
    )

}
export default ContactList;