<?php

namespace Database\Seeders;

use App\Models\Categorie;
use Illuminate\Database\Seeder;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pizza = new Categorie;
        $pizza->name = 'pizza';
        $pizza->save();

        $salads = new Categorie;
        $salads->name = 'salades';
        $salads->save();

        $desserts = new Categorie;
        $desserts->name = 'desserts';
        $desserts->save();

        $beverages = new Categorie;
        $beverages->name = 'breuvages';
        $beverages->save();
    }
}
