import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{        //passing the prop contacts
  
    const deletContactHandler = (id)=>{
        props.removeContact(id);
    }
    const renderContacts = props.contacts.map((contact)=>{
        return(
           <ContactCard contact={contact} clickHandler={deletContactHandler} key={contact.id}/>
        )
    })
    return(
        <div className="ui celled list">{renderContacts}</div>
    )

}

export default ContactList