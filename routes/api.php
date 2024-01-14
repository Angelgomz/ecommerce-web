<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\User\UserController;
use App\Http\Controllers\Auth\AuthenticatedUserController;
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
Route::controller(LoginController::class)->prefix('auth')->name('auth.')->group(function () {
    Route::post('/login', 'login')->name('login');
    Route::post('/logout', 'logout')->name('logout');
});   
Route::controller(RegisterController::class)->middleware('guest:sanctum')->prefix('register')->group(function () {
    Route::post('/', 'create')->name('register');
});
Route::group(['controller' => AuthenticatedUserController::class,'prefix'=>'authentication'], function () {

    Route::get('/', 'show');
   /*  Route::put('/auth/update/info', 'updateInfo')->name('auth.update.info');
    Route::put('/auth/update/password', 'updatePassword')->name('auth.update.password'); */ 
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
