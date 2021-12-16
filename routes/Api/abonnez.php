<?php

use App\Http\Controllers\Api\AbonnezController;
use Illuminate\Support\Facades\Route;

Route::prefix('abonnez-moi')->group(function () {
    Route::post('/', [AbonnezController::class, 'store'])->name('abonnez-store');
    Route::get('/{id}', [AbonnezController::class, 'show']);
    Route::get('/', [AbonnezController::class, 'index']);
});