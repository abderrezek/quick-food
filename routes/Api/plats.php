<?php

use App\Http\Controllers\Api\PlatController;
use Illuminate\Support\Facades\Route;

// Nous Concter
Route::prefix('plats')->name('api.')->group(function () {

    Route::get('/', [PlatController::class, 'index'])->name('plats.index');

});