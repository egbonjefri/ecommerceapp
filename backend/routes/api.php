<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\CartController;
use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Password;
use App\Models\User;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('reset-password', [EmailController::class, 'reset']);

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::put('users/{email}/update-password', [UserController::class, 'updatePassword']);

Route::post('/cart-items', [CartController::class, 'store']);

/*
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [UserController::class, 'login']);
    Route::get('users', [UserController::class, 'login'])->middleware('auth:sanctum');
});
*/