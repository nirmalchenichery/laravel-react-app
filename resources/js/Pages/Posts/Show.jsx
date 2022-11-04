import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';
import { useState } from "react";
import Moment from 'moment';

export default function Show(props) {
  
    const { post } = usePage().props;
    const { data, setData, put, errors } = useForm({
        title: post.title || "",
        body: post.body || "",
        language: post.language || "",
        is_display: post.is_display || "",
        is_approved: post.is_approved || "",
        posted_at: post.posted_at || "",
        posted_date: Moment(post.posted_at).format('YYYY-MM-DD') || "",
        posted_time: Moment(post.posted_at).format('hh:mm') || "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        put(route("posts.update", post.id));
    }

    function showComments(e) {
        e.preventDefault();
        alert("Comments display here");
        // put(route("posts.update", post.id));
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
  
                            <form name="showForm">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>No : </th>
                                            <td>{post.id}</td>
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
                                                    onClick={showComments}
                                                    id={data.id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-orange-500 rounded"
                                                >
                                                    Show Comments
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}