<?php

use App\Http\Controllers\Api\IngredientController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin/')->middleware(['auth', 'admin'])->name('api.admin.')->group(function () {

    Route::resource('ingredients', IngredientController::class)->except([
        'create', 'edit'
    ]);

    Route::get('ingredients?page={page?}', [IngredientController::class, 'getIngredient'])
        ->where('page', '[0-9]+')
        ->name('ingredients.get');

});