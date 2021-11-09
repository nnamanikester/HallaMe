export const SET_CONTACTS = 'SET_CONTACTS';

export interface contactType {
  id: string;
  phone: string;
  name: string;
  isHallaMeUser: boolean;
  image?: string;
}

export type setContacts = {
  type: typeof SET_CONTACTS;
  payload: contactType[];
};

export type contactsActionsType = setContacts;
