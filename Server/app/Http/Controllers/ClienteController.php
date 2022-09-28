<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    protected function registrar(Request $req)
    {
        Cliente::create([
            'cpf' => $req['cpf'],
            'nome' => $req['nome'],
            'data' => $req['data'],
        ]);
    }

    protected function buscar(Request $req)
    {
        $usuario = Cliente::where('cpf', $req['cpf'])->get();
        return $usuario;
    }

    protected function atualizar(Request $req)
    {
        $cliente = Cliente::find($req['id']);
        $cliente['data'] = $req['data'];
        $cliente->save();
    }

    protected function deletar($id)
    {
        $cliente = Cliente::find($id);
        return $cliente->delete();
    }

    public function listar()
    {
        $lista = Cliente::all();
        return $lista;
    }
}
