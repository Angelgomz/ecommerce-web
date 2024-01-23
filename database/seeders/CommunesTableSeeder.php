<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Commune;

class CommunesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Communes data for the Metropolitan Region
        $communes = [
            ['name' => 'Santiago', 'description' => 'Capital of Chile'],
            ['name' => 'Providencia', 'description' => 'A commune in Santiago'],
            ['name' => 'Las Condes'],
            ['name' => 'La Reina'],
            ['name' => 'Ñuñoa'],
            ['name' => 'Vitacura'],
            ['name' => 'Maipú'],
            ['name' => 'La Florida'],
            ['name' => 'Puente Alto'],
            ['name' => 'Peñalolén'],
            ['name' => 'Macul'],
            ['name' => 'Recoleta'],
            ['name' => 'Independencia'],
            ['name' => 'Huechuraba'],
            ['name' => 'Renca'],
            ['name' => 'Quilicura'],
            ['name' => 'Conchalí'],
            ['name' => 'Lo Prado'],
            ['name' => 'Pudahuel'],
            ['name' => 'Cerro Navia'],
            ['name' => 'Lo Barnechea'],
            ['name' => 'La Cisterna'],
            ['name' => 'San Ramón'],
            ['name' => 'La Pintana'],
            ['name' => 'El Bosque'],
            ['name' => 'Pedro Aguirre Cerda'],
            ['name' => 'San Miguel'],
            ['name' => 'Lo Espejo'],
            ['name' => 'Cerrillos'],
            ['name' => 'Estación Central'],
            ['name' => 'Quinta Normal'],
            ['name' => 'Peñaflor'],
            ['name' => 'Lampa'],
            ['name' => 'Colina'],
            ['name' => 'Melipilla'],
            ['name' => 'Talagante'],
            ['name' => 'Isla de Maipo'],
            ['name' => 'Buin'],
            ['name' => 'Paine'],
            ['name' => 'Pirque'],
            ['name' => 'San Bernardo'],
            ['name' => 'La Granja'],
            ['name' => 'San Joaquín'],
            ['name' => 'La Florida'],
            ['name' => 'Lo Cañas'],
            ['name' => 'La Cisterna'],
            ['name' => 'La Pintana'],
            ['name' => 'San Ramón'],
            ['name' => 'El Monte']

            // Add more communes as needed
        ];

        // Seed the communes table
        foreach ($communes as $communeData) {
            Commune::create($communeData);
        }
    }
}
