import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';
import { useState } from "react";
import Moment from 'moment';
import axios, { Axios } from 'axios';
import PostListItem from '@/Components/PostListItem';
import PostShowItem from '@/Components/PostShowItem';

import Dialog from '@/Components/Dialog';
import Modal from "@/Components/Modal";

export default function Show(props) {
  
    //hook useState
   

    const { post } = usePage().props;
    const { data, setData, put, errors } = useForm({
        id: post.id || "",
        title: post.title || "",
        body: post.body || "",
        language: post.language || "",
        is_display: post.is_display || "",
        is_approved: post.is_approved || "",
        posted_at: post.posted_at || "",
        posted_date: Moment(post.posted_at).format('YYYY-MM-DD') || "",
        posted_time: Moment(post.posted_at).format('hh:mm') || "",
    });
  
    const [comments, setComments] = useState([]);

    async function comment(id){
        const response = await axios.get('/comment/' + id);
      
        if (response.data.status === 200){
            // console.log(response.data.comments);
            setComments(response.data.comments);
        }
        // const response = await axios.get('/comment',{
        //     params: {
        //         id: 1
        //     }
        // });
    }

    var comments_list = [];
    if(comments.length > 0){
        
        // console.log(comments[0])
        comments_list = comments.map( (comment, index) => { 
            return <div key={index}  className="border rounded w-full flex flex-col">
                <div className='text-gray-500 text-xs'>{comment.email}</div>
                <div className=''>{comment.comment}</div>
            </div>
        })
    }


    const [ openReminder, setOpenReminder] = useState(false);

    function showComments(id) { ////
        // setOpenReminder(true);
        setShowModal(true);
        comment(id);
    }

    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }

    const handleChangeSelect = event => {
        setSelected(event.target.value);
        setData("language", event.target.value)
    };

    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'en', text: 'English'},
        {value: 'jp', text: 'Japanese'},
    ];

    const [radioType, setRadioType] = useState("Y");
    const [selected, setSelected] = useState(options[0].value);

    const [showModal, setShowModal] = useState(false); ///////

    
   
    return (

        

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Show Post</h2>}
        >
            <Head title="Posts" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("posts.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            <PostShowItem post={data}/>

                            {/* <form name="showForm">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>No : </th>
                                            <td>{data.id}</td>
                                        </tr>
                                        <tr>
                                            <th>Language : </th>
                                            <td>{(data.language=="en")?"English":"Japanese"}</td>
                                        </tr>
                                        <tr>
                                            <th>Title : </th>
                                            <td>{data.title}</td>
                                        </tr>
                                        <tr>
                                            <th>Body : </th>
                                            <td>{data.body}</td>
                                        </tr>
                                        <tr>
                                            <th>Display Option : </th>
                                            <td>{ (data.is_display =="Y")?"Yes":"No" }</td>
                                        </tr>
                                        <tr>
                                            <th>Approved : </th>
                                            <td>{(data.is_approved =="Y")?"Yes":"No"}</td>
                                        </tr>
                                        <tr>
                                            <th>Posted : </th>
                                            <td>{ data.posted_at }</td>
                                        </tr>
                                        <tr>
                                            <th>Comments : </th>
                                            <td>

                                                <button
                                                    className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
                                                    type="button"
                                                    onClick={() => {
                                                        showComments(post.id);
                                                        // setShowModal(true);
                                                    }}
                                                >
                                                    Show Comments
                                                </button>

                                                {comments.length > 0 && <div>
                                                    {comments_list}
                                                </div> }

                                                {showModal && 
                                                    <Modal 
                                                        OpenOrShowModal={setShowModal} 
                                                        title="Popup Example" 
                                                        content={comments_list}
                                                    />
                                                }

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form> */}

                        </div>
                    </div>
                </div>
            </div>

            {/* <Dialog open={openReminder} /> */}

            {/* <dialog open={openReminder}>
                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                           Content here
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
                    >
                        Close
                    </button>
                </div>
            </dialog> */}

        {/* <div className="flex flex-col items-center justify-center h-60">
            
            <button
                className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
                type="button"
                onClick={() => {
                    showComments(post.id);
                    // setShowModal(true);
                }}
            >
                Open Modal
            </button>

            {showModal && <Modal OpenOrShowModal={setShowModal} 
                                 title="Popup Example" 
                                 content={comments_list}/>
            }
        </div> */}


            
        </Authenticated>
    );


    
}