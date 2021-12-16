<?php

use App\Http\Controllers\Api\PlatController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin/plats')->middleware(['auth', 'admin'])->name('api.admin.plats.')->group(function () {

    Route::get('/', [PlatController::class, 'get'])->name('index');
    Route::get('/{id}', [PlatController::class, 'getPlat'])->name('get');

});