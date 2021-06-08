import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchContacts,
  deleteName,
} from '../../redux/contacts/contacts-operations';
import {
  getLoading,
  getVisibleContacts,
} from '../../redux/contacts/contacts-selectors';
import s from './ContactsList.module.css';

class ContactsList extends Component {
  componentDidMount() {
    setTimeout(() => this.props.getContacts(), 50);
  }

  render() {
    return (
      <section className={s.section}>
        {this.props.isLoading && <h1>Loading...</h1>}
        <ul className={s.list}>
          {this.props.contacts.map(({ id, name, number }) => (
            <li className={s.item} key={id}>
              <span className={s.contact}>
                {name}: {number}
              </span>
              <button
                className={s.button}
                type="button"
                onClick={() => this.props.onDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteName(id)),
  getContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
