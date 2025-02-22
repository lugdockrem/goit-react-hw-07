import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { selectContacts } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be less than 50 characters')
    .required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Enter name"
            />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="number" className={styles.label}>Number</label>
            <Field
              type="text"
              name="number"
              className={styles.input}
              placeholder="Enter phone number"
            />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;