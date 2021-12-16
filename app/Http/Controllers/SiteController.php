<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Plat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SiteController extends Controller
{
    public function index()
    {
        $categories = Categorie::where('is_enabled', '=', true)->get();
        // $categories = DB::table('categories')->where('is_enabled', '=', true)->get();

        return view('index', [
            'categories' => $categories,
        ]);
    }

    public function contact()
    {
        return view('contact');
    }

    public function about()
    {
        return view('about');
    }
}
