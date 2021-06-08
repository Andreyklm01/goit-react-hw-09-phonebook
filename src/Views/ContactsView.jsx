import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import s from './ContactsView.module.css';

const ContactsView = () => (
  <section className={s.section}>
    <ContactForm />
    <div className={s.content}>
      <h2 className={s.subtitle}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  </section>
);

export default ContactsView;
