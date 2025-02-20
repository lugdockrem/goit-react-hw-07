import PropTypes from 'prop-types';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.field}>
          <FaUser className={styles.icon} />
          <p className={styles.text}>{name}</p>
        </div>
        <div className={styles.field}>
          <FaPhone className={styles.icon} />
          <p className={styles.text}>{number}</p>
        </div>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;