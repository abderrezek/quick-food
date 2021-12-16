<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\IngredientController;
use App\Http\Controllers\Admin\PlatController;
use Illuminate\Support\Facades\Route;

Route::name('admin.')->prefix('/admin')->middleware(['auth', 'admin'])->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('index');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // plats routes
    Route::prefix('/plats')->name('plats.')->group(function () {
        Route::get('/', [PlatController::class, 'index'])->name('index');
        Route::get('/create', [PlatController::class, 'create'])->name('create');
        Route::get('/edit/{id}', [PlatController::class, 'edit'])->name('edit');
        Route::delete('/delete/{id}', [PlatController::class, 'delete'])->name('delete');
        Route::post('/', [PlatController::class, 'store'])->name('store');
    });

    Route::resource('ingredients', IngredientController::class)->except([
        'create', 'store'
    ]);
});