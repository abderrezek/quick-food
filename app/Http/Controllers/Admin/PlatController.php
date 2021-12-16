<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ingredient;
use App\Models\Plat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PlatController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Plats/Index');
    }

    public function create(Request $request)
    {
        $ingredients = Ingredient::all()->map->only(['name'])->transform(function ($item, $key) {
            return [
                'value' => $item['name'],
                'label' => $item['name']
            ];
        })->all();

        return Inertia::render('Plats/Create', [
            'ingredients' => $ingredients
        ]);
    }

    public function edit(Request $request, $id)
    {
        $plat = Plat::find($id)->first();
        return Inertia::render('Plats/Edit', [
            'plat' => $id
        ]);
    }

    public function delete(Request $request, $id)
    {
        $plat = Plat::find($id);
        if ($plat) {
            $plat->delete();
            $request->session()->flash('type', 'success');
            $request->session()->flash('message', 'Supprimé avec succès');
        } else {
            $request->session()->flash('type', 'error');
            $request->session()->flash('message', 'Il n\'a pas été supprimé avec succès');
        }
        return redirect()->back();
    }

    public function store(Request $request)
    {
        // $validated = $request->validate([
        //     'name' => 'required|unique:plats',
        //     'price' => 'required',
        //     'is_enabled' => 'required|boolean',
        //     'is_discount' => 'required|boolean',
        //     'discount' => '',
        //     'description' => 'nullable',
        //     'ingredients' => '',
        //     'image' => 'nullable|image',
        // ]);

        // return Inertia::render('Plats/Create', [
        //     'inputs' => $request->all(),
        // ]);
        
        // return R
    }
}
