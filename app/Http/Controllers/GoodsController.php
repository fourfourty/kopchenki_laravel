<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GoodsController extends Controller
{
    //
    static function getGoods() {
        return DB::table('goods')->get();
    }
}
