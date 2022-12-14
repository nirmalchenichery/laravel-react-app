<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class PostApiController extends Controller
{
    public function index()
    {
        $post = Post::all();

        // var_dump($post);exit();

        return response()->json([
            'status' => true,
            'post' => $post
        ]);
    }

    // public function index()
    // {
    //     $post = Post::paginate(3);
    //     return response()->json([
    //         'status' => true,
    //         'post' => $post
    //     ]);
    // }
    // public function show($search, $order = "id", $direction = "desc")

    public function show($search)
    {

        // var_dump($search); exit;

        $post = DB::table('posts')
                ->when($search, function ($query, $search) {
                    $query->where('title', 'LIKE', '%'.$search.'%');
                })
                ->get();

        // var_dump($post);      exit;   

        // if($search){ 
        //     $post = Post::where('title', 'LIKE', '%'.$search.'%')
        //             ->orWhere('body', 'LIKE', '%'.$search.'%')
        //             ->get();
        // }else{
        //     $post = Post::all(); 
        // }

        return response()->json([
            'status' => true,
            'post' => $post
        ]);
    }
    // public function show($search)
    // {
    //     if($search){ 
    //         $post = Post::where('title', 'LIKE', '%'.$search.'%')->paginate(3);
    //                 // ->orWhere('email', 'LIKE', '%'.$search.'%')
    //                 // ->get();
    //     }else{
    //         $post = Post::paginate(3); 
    //     }

    //     return response()->json([
    //         'status' => true,
    //         'post' => $post
    //     ]);
    // }
}
