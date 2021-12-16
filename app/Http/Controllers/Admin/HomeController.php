<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->user()->name;

        return Inertia::render('Home', [
            'name' => $name
        ]);
    }


}
