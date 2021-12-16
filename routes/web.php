<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::name('site.')->group(function () {
    Route::get('/', [SiteController::class, 'index'])->name('index');

    Route::get('/nous-contacter', [SiteController::class, 'contact'])->name('contact');

    Route::get('/a-propos-de', [SiteController::class, 'about'])->name('about');
});

Route::get('/checkout', [CheckoutController::class, 'index'])->middleware('auth')->name('checkout.index');

Route::get('/profil', [ProfileController::class, 'index'])->middleware('auth')->name('profile');

require_once __DIR__ . '/modals.php';

require_once __DIR__ . '/admin.php';

Route::fallback(fn () => view('errors.404'));
