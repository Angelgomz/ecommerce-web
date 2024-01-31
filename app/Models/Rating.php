<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Rating extends Pivot
{
    use HasFactory;
    public $incrementig = true;
    protected $table = "ratings";

    public function rateable(){
        return $this->morphTo();
    }
   

}
