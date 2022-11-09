import React from 'react';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const Dialog = (props) => {

    // const {} = usePage().props;
    // const { post } = usePage().props;
    // function destroy(e) {
    //     if (confirm("Are you sure you want to delete this user?")) {
    //         Inertia.delete(route("posts.destroy", e.currentTarget.id));
    //     }
    // }

    // const { open, onClose } = props;

    const [ openOrClose, setOpenReminder] = useState(false);

    return (

            <dialog open={props.open}>
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                        {/* {comment_list} */}
                        </p>
                    </div>

                    <button
                        id="ok-btn"
                        className="mx-1 px-4 py-2 text-sm text-white bg-green-500 rounded"
                    >
                        OK
                    </button>

                    <button
                        id="ok-btn"
                        className="mx-1 px-4 py-2 text-sm text-white bg-orange-500 rounded"
                        onClick={() => setOpenReminder(false)}
                        // onClick={onClose()}
                    >
                        Close
                    </button>
                </div>
            </dialog>
    
    );
};
export default Dialog;