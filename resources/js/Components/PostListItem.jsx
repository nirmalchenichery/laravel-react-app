import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import { Link } from '@inertiajs/inertia-react';

class PostListItem extends Component {

    constructor(props){
        super(props);
    }
   
    render (){

        return (
            <tr>
            <td className="border px-4 py-2">{this.props.data.id}</td>
            <td className="border px-4 py-2">{this.props.data.title}</td>
            <td className="border px-4 py-2">{this.props.data.body}</td>
            <td className="border px-4 py-2">{this.props.data.is_display}</td>
            <td className="border px-4 py-2">{this.props.data.is_approved}</td>
            <td className="border px-4 py-2"> Action</td>

            {/* {id: 1, : 'en', : 'Title', body: 'Body', is_display: 'Y', …} */}


            {/* <td className="border px-4 py-2">
                <Link
                    tabIndex="1"
                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                    href={route("posts.edit", 1)}
                >
                    Edit
                </Link>
                <button
                    // onClick={destroy}
                    id={1}
                    tabIndex="-1"
                    type="button"
                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                >
                    Delete
                </button>
            </td> */}
        </tr>
        )
        
    }

}
export default PostListItem

