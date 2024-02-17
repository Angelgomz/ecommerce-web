<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionTableSeeder extends Seeder
{
    public function run()
    {
        // Define permissions and their corresponding roles
        $permissions = [
            'admin' => [
                ['name' => 'add recipe', 'route_name' => 'recipes.store'],
                ['name' => 'edit recipe' , 'route_name' => 'recipes.edit'],
                ['name' => 'update recipe' , 'route_name' => 'recipes.update'],
                ['name' => 'delete recipe' , 'route_name' => 'recipes.destroy'],
                ['name' => 'index producs' , 'route_name' => 'products.index'],
                ['name' => 'add product' , 'route_name' => 'products.store'],
                ['name' => 'edit product' , 'route_name' => 'products.edit'],
                ['name' => 'update product' , 'route_name' => 'products.update'],
                ['name' => 'delete product' , 'route_name' => 'products.destroy'],
                ['name' => 'index orders' , 'route_name' => 'orders.index'],
                ['name' => 'edit order' , 'route_name' => 'orders.edit'],
                ['name' => 'update order' , 'route_name' => 'orders.update'],
                ['name' => 'delete order' , 'route_name' => 'orders.destroy'],
                ['name' => 'index rating' , 'route_name' => 'rating.index'],
            ],
            'all' => [
                ['name' => 'edit users', 'route_name' => 'users.edit'],
                ['name' => 'update users' , 'route_name' => 'users.update'],
                ['name' => 'delete users' , 'route_name' => 'users.destroy'],
                ['name' => 'add rating' , 'route_name' => 'rating.store'],
                ['name' => 'delete rating' , 'route_name' => 'rating.destroy'],
                ['name' => 'add comment' , 'route_name' => 'comments.store'],
                ['name' => 'delete comment' , 'route_name' => 'comments.destroy'],
                ['name' => 'update comment' , 'route_name' => 'comments.update'],
                ['name' => 'edit comment' , 'route_name' => 'comments.edit']
              /*  ['name' => 'add order' , 'route_name' => 'orders.store'], */
            ]
        ];

        // Get all roles
        $roles = Role::get();

        // Iterate through rol
        // Iterate through permissions for each role
        foreach ($permissions as $keyAlt => $permissionGroup) {
            foreach ($permissionGroup as $permission) {
                $newPermission = Permission::create($permission);
                foreach ($roles as $role) {
                    // Assign permission to the role based on its name
                    if ($keyAlt == 'all'){
                        $role->givePermissionTo($newPermission);
                    }
                    else if($keyAlt == 'admin' && $role->name == 'admin'){
                    $role->givePermissionTo($newPermission);
                    }
                }
            }

        }
    }
}
