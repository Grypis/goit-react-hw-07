import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import Loader from "./Loader/Loader";

import {
  selectError,
  selectLoading,
} from "../redux/contacts/contacts.selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <SearchBox />
      <div>
        {loading && !error && <Loader />}
        {error !== null && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}
      </div>
      <ContactList />
    </div>
  );
}

export default App;
