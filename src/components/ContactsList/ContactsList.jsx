import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteName,
} from '../../redux/contacts/contacts-operations';
import {
  getLoading,
  getVisibleContacts,
} from '../../redux/contacts/contacts-selectors';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteName(id));

  useEffect(() => {
    setTimeout(() => dispatch(fetchContacts()));
  }, [dispatch]); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <section className={s.section}>
      {isLoading && <h1>Loading...</h1>}
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <span className={s.contact}>
              {name}: {number}
            </span>
            <button
              className={s.button}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
