<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LocationController extends Controller
{
    public function index(Request $request)
    {
        $locations = $request->user()->locations->map->only(['address', 'number_times', 'slug']);

        return response()->json([
            'locations' => $locations,
        ], 200);
    }

    public function delete(Request $request, string $slug)
    {
        $locations = $request->user()->locations;
        $address = $locations->where('slug', $slug)->first();

        if (!$address) {
            return response()->json([
                'message' => 'Adresse introuvable'
            ], 409);
        }

        $result = $address->delete();

        if (!$result) {
            return response()->json([
                'message' => "N'a pas réussi à supprimer"
            ], 409);
        }

        return response()->json([
            'message' => "Supprimé avec succès"
        ], 200);
    }

    public function edit(Request $request, string $slug)
    {
        $validated = $request->validate([
            'address' => 'required',
        ]);
        $locations = $request->user()->locations;

        $address = $locations->where('slug', $slug)->first();
        if (!$address) {
            return response()->json([
                'address' => 'Adresse introuvable'
            ], 400);
        }
        // address if exist
        $addr = $locations->where('address', '=', $validated['address'])->first();
        if ($addr !== null) {
            return response()->json([
                'message' => 'Adresse exist',
            ], 409);
        }

        $address->address = $validated['address'];
        $address->slug = Str::slug($validated['address'], '-');
        $address->save();

        return response()->json([
            'message' => 'Modifié avec succès',
            'address' => $address
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'address' => 'required',
        ]);
        $user = $request->user();
        $locations = $user->locations;
        // count check if exist only 5
        if ($locations->count() === 5) {
            return response()->json([
                'message' => 'Seulement 5 adresses',
            ], 409);
        }
        // address if exist
        $location = $locations->where('address', $validated['address'])->first();
        if ($location !== null) {
            return response()->json([
                'message' => 'Adresse exist',
            ], 409);
        }
        $location = Location::create([
            'address' => $validated['address'],
            'user_id' => $user->id,
            'slug' => Str::slug($validated['address'], '-')
        ]);

        return response()->json([
            'message' => 'Ajouté avec succès',
            'location' => $location
        ], 200);
    }
}
