// import Authenticated from '@/Layouts/Authenticated';
// import { Head, useForm, Link } from '@inertiajs/inertia-react';
// import React, { useState } from "react";

export default function ModalWithButtons(props) {
    const { open, onClose, title, children, onConfirm, buttons } = props;
    if (!open) {
        return <></>;
    }

    return (
        <Modal open={open} onClose={onClose}>
            <h2 className="text-xl">{title}</h2>
            <div className="py-4">{children}</div>
            <div className="flex justify-end">
                <div className="p-1">
                    <button
                        onClick={() => onClose()}
                        className="btn-indigo hover:bg-secondary-light">
                        Cancel
                    </button>
                </div>

                {buttons}

            </div>
        </Modal>
    );
}