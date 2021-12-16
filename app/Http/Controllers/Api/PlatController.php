<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Plats\PlatsCollection;
use App\Http\Resources\Plats\PlatsResource;
use App\Models\Categorie;
use App\Models\Plat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlatController extends Controller
{
    public function index()
    {
        $items = Categorie::where('is_enabled', '=', true)->get()->map;
        $categories = $items->only(['name']);
        $plats = $items->plats;

        return response()->json([
            'categories' => $categories,
            'plats' => $plats,
            'message' => 'données récupérées avec succès'
        ], 200);
    }

    public function get()
    {
        return new PlatsCollection(Plat::all());
    }

    public function getPlat($id)
    {
        return new PlatsResource(Plat::findOrFail($id));
    }
}
