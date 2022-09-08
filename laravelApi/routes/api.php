<?php

use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Auth\RegisterController;
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


Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::post('logout', [RegisterController::class, 'logout']);
});


Route::get('/get-student',[StudentController::class,'index']);
Route::post('/add-student',[StudentController::class,'store']);
Route::get('/get-student/{id}',[StudentController::class,'getStudent']);
Route::post('/update-student/{id}',[StudentController::class,'update']);
Route::delete('/delete-student/{id}',[StudentController::class,'delete']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
