import React from 'react';
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Inertia } from "@inertiajs/inertia";

const PostPageItem = (props) => {

    //const {} = usePage().props;

    function destroy(e) {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }

    return (

        // console.log(props)

        <tr key={props.post.index}>
            <td key={props.post.index} className="border px-4 py-2">{ props.post.id }</td>
            <td key={props.post.index} className="border px-4 py-2">{ props.post.title }</td>
            <td key={props.post.index} className="border px-4 py-2">{ props.post.body }</td>
        </tr>
       
    );
};
export default PostPageItem;