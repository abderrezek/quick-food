<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function index(Request $request)
    {
        $session = $request->session();
        if (is_null($session->get('orders')) || is_null($session->get('sommeOrders')) ||
            is_null($session->get('type')) || is_null($session->get('payment')) ||
            is_null($session->get('when')) || is_null($session->get('address')) ||
            is_null($session->get('info'))) {

            return redirect()->route('site.index');
        }
        $data = [
            'orders' => $session->get('orders'),
            'sommeOrders' => $session->get('sommeOrders'),
            'type' => $session->get('type'),
            'payment' => $session->get('payment'),
            'when' => $session->get('when'),
            'address' => $session->get('address'),
            'info' => $session->get('info'),
        ];

        return view('checkout/index', [
            'data' => $data,
        ]);
    }
}
