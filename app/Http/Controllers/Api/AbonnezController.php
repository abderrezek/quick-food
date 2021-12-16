<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Abonnez\AbonnezCollection;
use App\Http\Resources\Abonnez\AbonnezResource;
use App\Mail\Abonnez as AbonnezMail;
use App\Models\Abonnez;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AbonnezController extends Controller
{
    public function index()
    {
        return new AbonnezCollection(Abonnez::all());
    }

    public function show($id)
    {
        return new AbonnezResource(Abonnez::findOrFail($id));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'prenom' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|digits:10',
            'accepte_recevoir_email' => 'boolean',
            'accepte_recevoir_phone' => 'boolean'
        ]);

        $contact = Abonnez::create($validatedData);

        Mail::to($contact->email)
            ->queue(new AbonnezMail($contact->email));

        return response()
            ->json([
                'message' => 'Merci de vous être abonné à notre newsletter'
            ], 201);
    }
}
