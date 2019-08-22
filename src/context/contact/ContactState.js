import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Harry Porter',
                email: 'harry@email.com',
                phone: '123-456-7890',
                type: 'personal',
                birthday: '12/12/1938'
            },
            {
                id: 2,
                name: 'Sally l\'Example',
                email: 'sally@email.com',
                phone: '987-654-3210',
                type: 'professional',
                birthday: '1/1/1982'
            },
            {
                id: 3,
                name: 'Tim de Nom',
                email: 'tim@email.com',
                phone: '555-555-5555',
                type: 'personal',
                birthday: '5/5/1955'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }
    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact,
            deleteContact
        }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState