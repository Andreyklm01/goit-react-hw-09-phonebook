import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/FETCH_CONTACTS_REQUEST',
);
export const fetchContactsSuccess = createAction(
  'contacts/FETCH_CONTACTS_SUCCESS',
);
export const fetchContactsError = createAction('contacts/FETCH_CONTACTS_ERROR');

export const addContactRequest = createAction('contacts/ADD_CONTACT_REQUEST');
export const addContactSuccess = createAction('contacts/ADD_CONTACT_SUCCESS');
export const addContactError = createAction('contacts/ADD_CONTACT_ERROR');

export const deleteContactRequest = createAction(
  'contacts/DELETE_CONTACT_REQUEST',
);
export const deleteContactSuccess = createAction(
  'contacts/DELETE_CONTACT_SUCCESS',
);
export const deleteContactError = createAction('contacts/DELETE_CONTACT_ERROR');

export const filterByName = createAction('contacts/FILTER_CONTACTS');
