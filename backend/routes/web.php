<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/hello', function () {
    return "Hello World!";
});
Route::get('/products/all',[ ProductController::class, 'all']);

Route::get('/products/{id}',[ProductController::class, 'single']);




Route::get('/users', [UserController::class, 'users'])->name('users');
Route::get('/cart', [CartController::class, 'index'])->name('cart');


