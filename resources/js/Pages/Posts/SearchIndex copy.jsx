import React, { useState ,useEffect} from "react";
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link, useForm } from '@inertiajs/inertia-react';
import PostListItem from '@/Components/PostListItem';
import { data } from "autoprefixer";
import { toLower } from "lodash";
  
export default function SearchIndex(props) {
    const { posts } = usePage().props
  
    const [searchinput,SetInput] = useState("");
    const [postFromDb, setPostFromDb] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPost = async () =>{
        fetch('http://127.0.0.1:8000/api/posts')
              .then((response) => {
                if (!response.ok) 
                {
                  throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                  );
                }
                return response.json();
              })
              .then((actualData) => {
                setPostFromDb(actualData.post);
                setError(null);
              })
              .catch((err) => {
                setError(err.message);
                setPostFromDb(null);
              })
              .finally(() => {
                setLoading(false);
              });
    }

    useEffect(() => {
        fetchPost();
    }, []);

    // useEffect(() => {
    //     const url = "http://127.0.0.1:8000/api/posts";
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         console.log(json.post);
    
    //         setPostFromDb(json.post);
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

    var post_list = [];
    if(postFromDb){
        post_list = postFromDb.filter((val)=>{
            if(searchinput ==""){
                return val
            }
            else if (val.title.toLowerCase().includes(searchinput.toLowerCase())|| 
                     val.body.toLowerCase().includes(searchinput.toLowerCase())){
                return val
            }
        }).map( (post, index) => { 
            return <PostListItem key={index} post={post}/>
        });
    }
    
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }
      
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Search Posts</h2>}
        >
            <Head title="Posts" />
  
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("posts.create") }
                                >
                                    Create Post
                                </Link>
                            </div>
  
                            <div className="flex items-center justify-between mb-6">
                                {/* Title */}
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    placeholder="Search String ..."
                                    name="search"
                                    onChange={(e) =>
                                        SetInput(e.target.value)
                                    }
                                />
                            </div>


                            <div className="w-full">
                                    <div className="grid grid-cols-8">
                                        <div className="px-4 py-2 w-20">No.</div>
                                        <div className="px-4 py-2">Language</div>
                                        <div className="px-4 py-2">Title</div>
                                        <div className="px-4 py-2">Body</div>
                                        <div className="px-4 py-2">Display Option</div>
                                        <div className="px-4 py-2">Approved</div>
                                        <div className="px-4 py-2">Posted at</div>
                                        <div className="px-4 py-2">Action</div>
                                    </div>
                                       {post_list}
                                       <Pagination class="mt-6" links={post_list.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}