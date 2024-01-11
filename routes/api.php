<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
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
Route::controller(LoginController::class)->middleware('auth:sanctum')->prefix('auth')->name('auth.')->group(function () {
    Route::get('/user', 'user')->name('user');
    Route::get('/login', 'login')->name('login');
    Route::post('/login', 'callback')->name('login');
    Route::post('/logout', 'logout')->name('logout');
});
// Authentication routes
/*Route::group(['controller' => LoginController::class], function () {
    Route::post('login', 'login')->name('login')->middleware('guest:sanctum');
    Route::post('logout', 'logout')->name('logout')->middleware('auth:sanctum');
}); */ 
Route::controller(RegisterController::class)->prefix('register')->group(function () {
    Route::post('/', 'create')->name('register')->middleware('guest:sanctum');
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
