import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
import { getAllContacts } from '../redux/contacts/contacts-selectors';
import Filter from '../components/Filter/Filter';
import s from './ContactsView.module.css';

const ContactsView = () => {
  const contacts = useSelector(getAllContacts);

  return (
    <section className={s.section}>
      <ContactForm />
      <div className={s.content}>
        <h2 className={s.subtitle}>Contacts</h2>
        {contacts.length ? <Filter /> : ''}
        <ContactsList />
      </div>
    </section>
  );
};

export default ContactsView;
