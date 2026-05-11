import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <ul className="list-group">
      {contacts.length === 0 ? (
        <li className="list-group-item">No contacts yet</li>
      ) : (
        contacts.map((c) => (
          <ContactCard
            key={c.id}
            contact={c}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </ul>
  );
};
