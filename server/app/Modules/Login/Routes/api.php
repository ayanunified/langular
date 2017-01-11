<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your module. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/login', function (Request $request) {
    // return $request->login();
})->middleware('auth:api');

Route::post('/text', 'Api\LoginwebserviceController@hello');

#------- Admin Login ---------#
Route::post('/admin-login', 'Api\LoginwebserviceController@userLogin');
