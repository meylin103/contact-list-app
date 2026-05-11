import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const { store, dispatch } = useGlobalReducer();

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const formChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const FormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/meilyn_agenda/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data
            agenda_slug: "meilyn"
                })

            })

            if (response.ok) {
                throw new Error ("Error al crear el contacto")
            }

            const newContact = await response.json();
                dispatch({
                    type: "ADD_CONTACT",
                    payload: newContact 
                });
                setData({
                    name: "",
                    phone: "",
                    email: "",
                    address: "",
                });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Add a new contact</h1>
            <form className="row g-3" onSubmit={FormSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name" name="name" value={data.name} onChange={formChange} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Email" name="email" value={data.email} onChange={formChange} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="inputPhone" placeholder="Enter Phone" name="phone" value={data.phone} onChange={formChange} />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" name="address" value={data.address} onChange={formChange} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>

            <Link to="/">
                <button className="btn btn-secondary mt-3">Back Home</button>
            </Link>
        </div>
    );
};
