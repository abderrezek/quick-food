<?php

use App\Http\Controllers\LocationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::name('profile-')->prefix('profil')->middleware('auth')->group(function () {
    Route::name('update-')->group(function () {
        Route::put('/info', [ProfileController::class, 'updateInfo'])->name('info');
        Route::put('/password', [ProfileController::class, 'updatePassword'])->name('pswd');
    });

    Route::prefix('address')->group(function () {
        Route::get('/', [LocationController::class, 'index'])->name('get-address');
        Route::post('/', [LocationController::class, 'store'])->name('add-address');
        Route::put('/{slug}', [LocationController::class, 'edit'])->name('edit-address');
        Route::delete('/{slug}', [LocationController::class, 'delete'])->name('delete-address');
    });
});