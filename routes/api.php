<?php

use App\Http\Controllers\Api\AbonnezController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

require_once __DIR__ . '/Api/contact.php';

require_once __DIR__ . '/Api/abonnez.php';

require_once __DIR__ . '/Api/profile.php';

require_once __DIR__ . '/Api/plats.php';

require_once __DIR__ . '/Api/Checkout.php';

require_once __DIR__ . '/Api/Admin/admin.php';