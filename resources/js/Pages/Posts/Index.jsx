import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import PostListItem from '@/Components/PostListItem';
  
export default function Index(props) {
    const { posts } = usePage().props
  
    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }
   
    
    const post_list = posts.map( (post, index) => {
        return <PostListItem key={index} post={post}/>
    })

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
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

                                    {posts.lengdiv === 0 && (
                                        <div>
                                            <div
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No record found.
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}