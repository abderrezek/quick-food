<?php

use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;

// Nous Concter
Route::prefix('nous-contacter')->group(function () {
    Route::post('/', [ContactController::class, 'store'])->name('site.contact-store');
    Route::get('/{id}', [ContactController::class, 'show']);
    Route::get('/', [ContactController::class, 'index']);
});