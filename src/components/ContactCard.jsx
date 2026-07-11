import React from "react";

export const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm rounded-4 border-0 p-4 mb-3">
            <div className="d-flex align-items-center">
                <img
                    src={`https://ui-avatars.com/api/?name=${contact.name}&background=0D6EFD&color=ffffff&bold=true&size=128`}
                    alt="profile"
                    className="rounded-circle me-3"
                    style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover"
                    }}
                />
                <div>
                    <h4 className="fw-bold mb-3">
                        {contact.name}
                    </h4>
                    <p className="text-secondary mb-2">
                        <i className="fas fa-map-marker-alt text-secondary me-2"></i>{contact.address}
                    </p>

                    <p className="text-secondary mb-2">
                        <i className="fas fa-phone text-secondary me-2"></i>{contact.phone}
                    </p>
                    <p className="text-secondary mb-2">
                        <i className="fas fa-envelope text-secondary me-2"></i>{contact.email}
                    </p>
                </div>
            </div>
            <div>
                <button
                    className="btn btn-light rounded-circle me-2"
                    onClick={() => onEdit(contact)}
                >
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                    className="btn btn-danger rounded-circle"
                    onClick={() => onDelete(contact.id)}
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    );
};
