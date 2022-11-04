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
        // var_dump("index");
        $posts = Post::all();

        // var_dump(count($posts));

        return Inertia::render('Posts/Index', ['posts' => $posts]);
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
    
    public function show()
    {
        return Inertia::render('Posts/show');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
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
        $date = strtotime($posted_at);

        Post::create([
            'language'      => $request->input('language'),
            'title'         => $request->input('title'),
            'body'          => $request->input('body'),
            'is_display'    => $request->input('is_display'),
            'is_approved'   => $request->input('is_approved'),
            // 'posted_at'     => date('Y-m-d H:i:s', $date),
            'posted_at'     => date('Y-m-d H:i:s'),

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
        return Inertia::render('Posts/Edit', [
            'post' => $post
        ]);
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
        ])->validate();
    
        Post::find($id)->update($request->all());
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
