<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mortgage extends Model
{
//    use Uuids;
    protected $fillable = ['session_id','principal' , 'term', 'apr'];
}
