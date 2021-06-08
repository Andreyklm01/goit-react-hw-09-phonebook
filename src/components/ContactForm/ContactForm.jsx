import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

function ContactForm() {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };
  const handleChangeNumber = ({ target }) => {
    setNumber(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const findMatches = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    findMatches
      ? alert(`${name.toUpperCase()} is allready in contacts`)
      : dispatch(addName({ name, number }));

    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  const inputNameId = uuidv4();
  const inputNumberId = uuidv4();

  return (
    <div className={s.formContainer}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h3 className={s.title}>Name</h3>
        <label htmlFor={inputNameId}>
          <input
            className={s.input}
            id={inputNameId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChangeName}
          />
        </label>
        <h3 className={s.title}>Number</h3>
        <label htmlFor={inputNumberId}>
          <input
            className={s.input}
            id={inputNumberId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChangeNumber}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
