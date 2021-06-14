import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { filterByName } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

export default function Filter() {
  const filteredName = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChange = ({ target }) => {
    dispatch(filterByName(target.value));
  };

  const filterId = uuidv4();

  return (
    <div className={s.container}>
      <p className={s.text}>Find Contacts by name:</p>
      <label htmlFor={filterId}>
        <input
          className={s.input}
          id={filterId}
          type="text"
          value={filteredName}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
