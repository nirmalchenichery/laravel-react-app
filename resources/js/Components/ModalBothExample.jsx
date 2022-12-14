import React from "react";

// export default function Modal({ OpenOrShowModal,title,content }) {
//     return (
//         <>
//             <div className="fixed inset-0 z-10 overflow-y-auto">
//                 <div
//                     className="fixed inset-0 w-full h-full bg-black opacity-40"
//                     onClick={() => OpenOrShowModal(false)}
//                 ></div>
//                 <div className="flex items-center min-h-screen px-4 py-8">
//                     <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
//                         <div className="mt-3 sm:flex">
//                             <div className="mt-2 text-center sm:ml-4 sm:text-left">
//                                 <h4 className="text-lg font-medium text-gray-800">
//                                    {title}
//                                 </h4>
//                                 <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
//                                    {content}
//                                 </p>
//                                 <div className="items-center gap-2 mt-3 sm:flex">
//                                     <button
//                                         className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
//                                         onClick={() => OpenOrShowModal(false)}
//                                     >
//                                         Delete
//                                     </button>
//                                     <button
//                                         className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
//                                         onClick={() => OpenOrShowModal(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// }


const Modal = (props) => {


    return (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => props.OpenOrShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="mt-3 sm:flex">
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                        <h4 className="text-lg font-medium text-gray-800">
                                           {props.title}
                                        </h4>
                                        <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                           {props.content}
                                        </p>
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                                onClick={() => props.OpenOrShowModal(false)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                                onClick={() => props.OpenOrShowModal(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </>
            );

};
export default Modal;
