import React from "react";

export const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img
                    src={`https://ui-avatars.com/api/?name=${contact.name}&background=random`}
                    alt="profile"
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div>
                    <h5 className="mb-1">{contact.name}</h5>
                    <p className="mb-0">
                        <i className="fas fa-map-marker-alt text-secondary me-2"></i>{contact.address}
                    </p>

                    <p className="mb-0">
                        <i className="fas fa-phone text-secondary me-2"></i>{contact.phone}
                    </p>
                    <p className="mb-0">
                        <i className="fas fa-envelope text-secondary me-2"></i>{contact.email}
                    </p>
                </div>
            </div>
            <div>
                <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => onEdit(contact)}
                >
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(contact.id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
};
