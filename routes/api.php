<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommuneController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthenticatedUserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. Th ese
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
/** 
 *Route::get | Consultar
 *Route::post | Guardar 
 *Route::delete | Eliminar
 *Route::put | Actualizar
 */
Route::apiResource('/communes', CommuneController::class)->only('index');
Route::apiResource('/users', UserController::class)->middleware('auth:sanctum')->only('update','delete');
Route::group(['controller' => LoginController::class, 'prefix'=>'auth'], function () {
    Route::post('login', 'login')->name('login');
    Route::post('logout', 'logout')->name('logout')->middleware('auth:sanctum');
});
Route::controller(RegisterController::class)->prefix('register')->group(function () {
    Route::post('/', 'create')->name('register');
});
Route::group(['controller' => AuthenticatedUserController::class, 'prefix' => 'authentication'], function () {

    Route::get('/', 'show');
    /*  Route::put('/auth/update/info', 'updateInfo')->name('auth.update.info');
     Route::put('/auth/update/password', 'updatePassword')->name('auth.update.password'); */
});