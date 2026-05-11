import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams(); 

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const contact = store.contacts.find(c => c.id === parseInt(id));
    if (contact) {
      setData({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
      });
    }
  }, [id, store.contacts]);

  const formChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const FormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/meilyn_agenda/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          agenda_slug: "meilyn_agenda"
        })
      });

      if (!response.ok) throw new Error("Error updating contact");

      const updatedContact = await response.json();

      dispatch({
        type: "LOAD_CONTACTS",
        payload: store.contacts.map(c => c.id === updatedContact.id ? updatedContact : c)
      });

      navigate("/");
    } catch (error) {
      console.error("Error editing contact:", error);
      alert("There was an error editing the contact");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Edit Contact</h1>
      <form className="row g-3" onSubmit={FormSubmit}>
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" value={data.name} onChange={formChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={data.email} onChange={formChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" name="phone" value={data.phone} onChange={formChange} />
        </div>
        <div className="col-12">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" value={data.address} onChange={formChange} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
};
