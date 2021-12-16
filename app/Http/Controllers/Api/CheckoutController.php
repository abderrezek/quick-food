<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        $validated = $request->validate([
            'orders' => 'required|array',
            'type' => [
                'required',
                Rule::in(['delivery', 'pickup']),
            ],
            'sommeOrders' => 'required|numeric',
        ]);

        return response()->json([
            'message' => 'success'
        ], 201);
    }

    public function createOrder(Request $request)
    {
        $validated = $request->validate([
            'orders' => 'required|array',
            'sommeOrders' => 'required|numeric',
            'type' => [
                'required',
                Rule::in(['delivery', 'pickup']),
            ],
            'payment' => [
                'required',
                Rule::in(['card', 'cash']),
            ],
            'when' => [
                'required',
                Rule::in(['as_soon_as_possible', 'specific_time']),
            ],
            'commune' => 'required',
            'city' => 'required',
            'address' => 'required',
            'apt' => '',
            'floor_number' => 'numeric|min:1|max:100',
            'prenom' => 'required',
            'nom' => 'required',
            'telephone' => [
                'required',
                'regex:/^0(5|6|7)[0-9]{8}$/'
            ],
            'email' => 'required|email',
            'comment' => '',
        ]);

        $session = $request->session();

        // store session orders
        $session->put('orders', $validated['orders']);
        // store session sommeOrders
        $session->put('sommeOrders', $validated['sommeOrders']);
        // store session type
        $session->put('type', $validated['type']);
        // store session payment
        $session->put('payment', $validated['payment']);
        // store session when
        $session->put('when', $validated['when']);

        $session->forget(['info', 'address']);

        // store session commune
        $session->push('address.commune', $validated['commune']);
        // store session city
        $session->push('address.city', $validated['city']);
        // store session address
        $session->push('address.address', $validated['address']);
        // store session apt
        $session->push('address.apt', $validated['apt']);
        // store session floor_number
        $session->push('address.floor_number', $validated['floor_number']);

        // store session prenom
        $session->push('info.prenom', $validated['prenom']);
        // store session nom
        $session->push('info.nom', $validated['nom']);
        // store session telephone
        $session->push('info.telephone', $validated['telephone']);
        // store session email
        $session->push('info.email', $validated['email']);
        // store session comment
        $session->push('info.comment', $validated['comment']);

        return response()->json([
            'message' => 'Saved successfully',
        ], 201);
    }
}
