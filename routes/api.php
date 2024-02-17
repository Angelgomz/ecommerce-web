<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommuneController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;

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
/*Public routes */
Route::post('/auth/login', [LoginController::class, 'login'])->name('login');
Route::post('register', [RegisterController::class, 'create'])->name('register');
Route::apiResource('/communes', CommuneController::class)->only('index');
Route::apiResource('/categories', CategoryController::class)->only('index');
/* Protected routes */
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/auth/logout', [LoginController::class, 'logout'])->name('logout');
    Route::group(['middleware' => 'access'], function () {
        Route::apiResource('/admin/products', AdminProductController::class);
        Route::apiResource('/users', UserController::class)->only('update', 'destroy');
    });
});


