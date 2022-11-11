<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostApiController extends Controller
{
    public function index()
    {
        $post = Post::all();

        return response()->json([
            'status' => true,
            'post' => $post
        ]);
    }

    public function show($search)
    {
        if($search){ 
            $post = Post::where('title', 'LIKE', '%'.$search.'%')
                    // ->orWhere('email', 'LIKE', '%'.$search.'%')
                    ->get();
        }else{
            $post = Post::all();
        }

        return response()->json([
            'status' => true,
            'post' => $post
        ]);
    }
}
