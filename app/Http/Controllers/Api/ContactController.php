<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Contact\ContactCollection;
use App\Http\Resources\Contact\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        return new ContactCollection(Contact::all());
    }

    public function show($id)
    {
        return new ContactResource(Contact::findOrFail($id));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
            'subject' => 'required',
            'message' => 'required'
        ]);

        $contact = Contact::create($validatedData);

        return response()
            ->json([
                'message' => 'Thanks! We will contact you as soon as possible.'
            ], 201);
    }
}
