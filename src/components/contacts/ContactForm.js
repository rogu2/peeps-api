import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)

    const [contact, setContact] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        type: 'personal', 
        birthday: '' })

    const { name, email, phone, type, birthday } = contact

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        contactContext.addContact(contact)
        setContact({
            name: '', 
            email: '', 
            phone: '', 
            type: 'personal', 
            birthday: '' })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>Add Contact</h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange} 
            />
             <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange} 
            />
             <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange} 
            />
             <h4>Birthday</h4>
             <input
                type='date'
                placeholder='Birthday'
                name='birthday'
                value={birthday}
                onChange={onChange} 
            />
            <h4>Contact Type</h4>
             <input type='radio' name='type' value='personal' checked={type === 'personal'} 
                onChange={onChange}
            /> Personal{' '}
            <input type='radio' name='type' value='professional' checked={type === 'professional'} 
                onChange={onChange}
            /> Professional
            <div>
                <input type='submit' className='btn btn-primary btn-block' />
            </div>
        </form>
    )
}

export default ContactForm
