import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/contacts.selectors.js";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    (<p>ContactList </p>),(
      <ul className={css.contactList}>
        {contacts.map((item) => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    )
  );
}
export default ContactList;
