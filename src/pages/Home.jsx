import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactList } from "../components/ContactList";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  useEffect(() => {
    const createAgenda = async () => {
      try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/meilyn_agenda", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        if (response.ok) {
          console.log("Agenda created successfully");
        } else {
          console.error("Error creating agenda:", response.status);
        }
      } catch (error) {
        console.error("Error creating agenda:", error);
      }
    };

    const fetchContacts = async () => {
      try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/meilyn_agenda/contacts");
        if (!response.ok) throw new Error("Error loading contacts");
        const data = await response.json();
        dispatch({
          type: "LOAD_CONTACTS",
          payload: data.contacts
        });
      } catch (error) {
        console.error("Error loading contacts:", error);
      }
    };

    createAgenda().then(fetchContacts);
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://playground.4geeks.com/contact/agendas/meilyn_agenda/contacts/${id}`, {
        method: "DELETE"
      });
      dispatch({
        type: "LOAD_CONTACTS",
        payload: store.contacts.filter((c) => c.id !== id)
      });
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleEdit = (contact) => {
    console.log("Editing contact:", contact);
    navigate(`/edit-contact/${contact.id}`);
  };

  return (
    <div className="container py-4">

      <p className="text-muted fs-5 mb-5">
        Manage your personal and professional contacts.
      </p>
      <ContactList
        contacts={store.contacts}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};
