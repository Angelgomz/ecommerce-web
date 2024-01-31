<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\Category;
class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'Frutas']);
        Category::create(['name' => 'Verduras']);
        Category::create(['name' => 'Proteínas magras']);
        Category::create(['name' => 'Granos enteros']);
        Category::create(['name' => 'Lácteos bajos en grasa']);
    }
}
