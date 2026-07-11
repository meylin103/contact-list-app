import React from "react";
import { ContactCard } from "./ContactCard";

export const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <ul className="list-group">
      {contacts.length === 0 ? (
        <li className="list-group-item text-center p-5">

          <h2>📭</h2>

          <h4>No contacts found</h4>

          <p className="text-muted">
            Add your first contact to get started.
          </p>

        </li>
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
