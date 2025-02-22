import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { fetchContacts } from './redux/contactsOps';
import { selectError } from './redux/contactsSlice';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      {error && <div className={styles.error}>Error: {error}</div>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;