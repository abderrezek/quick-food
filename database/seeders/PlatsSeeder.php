<?php

namespace Database\Seeders;

use App\Models\Plat;
use Illuminate\Database\Seeder;

class PlatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plat::factory()
            ->count(20)
            ->create();
    }
}
