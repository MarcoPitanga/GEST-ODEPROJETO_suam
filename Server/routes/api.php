<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/cadastrar', [UsuarioController::class, 'cadastrar']);
Route::post('/logar', [UsuarioController::class, 'logar']);
Route::post('/buscarUsuario', [UsuarioController::class, 'buscar']);

Route::post('/registrar', [ClienteController::class, 'registrar']);
Route::post('/buscarCliente', [ClienteController::class, 'buscar']);
Route::post('/atualizar', [ClienteController::class, 'atualizar']);
Route::get('/deletarAgendamento/{id}', [ClienteController::class, 'deletar']);
Route::get('/agendamentos', [ClienteController::class, 'listar']);
