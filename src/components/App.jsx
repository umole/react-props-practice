import React from "react";
import ReactDom from "react-dom";
import Card from "./card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function contactCard(contact) {
  return(
    <Card 
      name= {contact.name}
      imgURL= {contact.imgURL}
      phone= {contact.phone}
      email= {contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL={contacts[0].imgURL} />
       

       {contacts.map(contactCard)}

      {/* <Card 
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}

      />
      <Card 
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}

      />
      <Card 
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}

      /> */}
    </div>
  );
}

<App />



export default App;
