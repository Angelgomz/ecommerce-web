<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commune extends Model
{
    use HasFactory;
    protected $hidden = ["created_at", "updated_at","deleted_at"];
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
