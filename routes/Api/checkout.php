<?php

use App\Http\Controllers\Api\CheckoutController;
use Illuminate\Support\Facades\Route;

// Nous Checkout
Route::prefix('checkout')->name('api.checkout.')->group(function () {

    Route::post('/', [CheckoutController::class, 'index'])->name('index');
    Route::post('/create-order', [CheckoutController::class, 'createOrder'])->name('create-order');

});