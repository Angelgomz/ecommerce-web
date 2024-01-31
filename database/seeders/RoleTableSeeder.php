<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
/*use App\Models\Role; */ 
use Spatie\Permission\Models\Role;
class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'admin']);
        Role::create(['name'=> 'client']);
    }
}
