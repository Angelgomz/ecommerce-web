<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Models\Role as SpatieRole;
class Role extends SpatieRole
{
    use HasPermissions,HasFactory;
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
