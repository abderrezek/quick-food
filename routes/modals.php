<?php

use Illuminate\Support\Facades\Route;

Route::prefix('modals')->group(function () {

    Route::get('/order', fn () => view('modals.order'));

    Route::get('/login', fn () => view('modals.login'));
    Route::get('/register', fn () => view('modals.register'));

});