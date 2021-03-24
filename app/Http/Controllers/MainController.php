<?php

namespace App\Http\Controllers;

use App\Models\Project;

class MainController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function home()
    {
        $projects = Project::all();
        return view('index', [
        'view'  => 'home',
        'projects' => $projects]);
    }
    public function project($id)
    {
        $project = Project::find($id);
        return view('index', [
        'view'  => $project->view,
        'project' => $project,
        ]);
    }

    //
}
