<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\PasswordValidationRules;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    use PasswordValidationRules;

    public function index(Request $request)
    {
        $user = $request->user();

        $userData = $user->only(['name', 'phone', 'email']);
        $locations = $user->locations->map->only(['address', 'number_times', 'slug']);

        return view('auth.profile', [
            'userData' => $userData,
            'userLocations' => $locations,
        ]);
    }

    public function updateInfo(Request $request)
    {
        $user = $request->user();
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|digits:10'
        ]);
        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];
        $user->save();

        return response()->json([
            'message' => 'Modifié avec succès'
        ], 200);
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();
        $validated = $request->validate([
            'password' => $this->passwordRules(),
        ]);
        $user->password = Hash::make($validated['password']);
        $user->save();

        return response()->json([
            'message' => 'Mot de passe mis à jour'
        ], 200);
    }
}
