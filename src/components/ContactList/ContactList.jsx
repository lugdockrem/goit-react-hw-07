import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (isLoading && !contacts.length) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!contacts.length) {
    return <div>No contacts found</div>;
  }

  return (
    <div className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => handleDelete(id)}
        />
      ))}
    </div>
  );
};

export default ContactList;