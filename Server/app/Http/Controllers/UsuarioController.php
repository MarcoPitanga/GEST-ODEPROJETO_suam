<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    protected function cadastrar(Request $req)
    {
        Usuario::create([
            'login' => $req['login'],
            'senha' => $req['senha'],
        ]);
    }

    protected function logar(Request $req)
    {
        $usuario = Usuario::where('login', $req['login'])->where('senha', $req['senha'])->get();
        if ($usuario) {
            return $usuario;
        } else {
            return false;
        }
    }

    protected function buscar(Request $req)
    {
        $usuario = Usuario::where('login', $req['login'])->get();

        return $usuario;
    }
}
