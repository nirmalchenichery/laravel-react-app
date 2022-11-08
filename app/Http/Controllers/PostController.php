<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
/**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        $posts = Post::all();
        // return Inertia::render('Posts/Index', ['posts' => $posts]);
        return Inertia::render('Posts/Index')
            ->with('posts' , $posts);
    }

    public function getComment($id)
    {
        // var_dump();
        // $posts = Post::all();
        return Post::find($id);
    }


    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Posts/Create');
    }
    
    public function show(Post $post)
    {
        return Inertia::render('Posts/Show')
            ->with('post' , $post);
        // return Inertia::render('Posts/show');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {

        // var_dump($request->input()); exit;

        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
            'is_display' => ['required'],
            'is_approved'=> ['required'],
            'language'=> ['required'],
            'posted_date'=> ['required'],
            'posted_time'=> ['required'],

        ])->validate();

        $posted_at=  $request->input('posted_date') . " ". $request->input('posted_time');
        $date = strtotime($posted_at);

        Post::create([
            'language'      => $request->input('language'),
            'title'         => $request->input('title'),
            'body'          => $request->input('body'),
            'is_display'    => $request->input('is_display'),
            'is_approved'   => $request->input('is_approved'),
            'posted_at'     => date('Y-m-d H:i:s', $date),
        ]);

        return redirect()->route('posts.index');
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Post $post)
    {
        return Inertia::render('Posts/Edit')
            ->with('post' , $post);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
            'is_display' => ['required'],
            'is_approved'=> ['required'],
            'language'=> ['required'],
            'posted_date'=> ['required'],
            'posted_time'=> ['required'],

        ])->validate();

        $posted_at=  $request->input('posted_date') . " ". $request->input('posted_time');
    
        Post::find($id)->update([
            'language'      => $request->input('language'),
            'title'         => $request->input('title'),
            'body'          => $request->input('body'),
            'is_display'    => $request->input('is_display'),
            'is_approved'   => $request->input('is_approved'),
            'posted_at'     => date('Y-m-d H:i:s', strtotime($posted_at)),
        ]);

        return redirect()->route('posts.index');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Post::find($id)->delete();
        return redirect()->route('posts.index');
    }
}
