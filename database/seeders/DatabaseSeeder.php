<?php

namespace Database\Seeders;

use Database\Seeders\CategorieSeeder;
use Database\Seeders\IngredientSeeder;
use Database\Seeders\LocationsSeeder;
use Database\Seeders\PlatsSeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            // UserSeeder::class,
            // LocationsSeeder::class,
            // CategorieSeeder::class
            // PlatsSeeder::class,
            IngredientSeeder::class,
        ]);
    }
}
