<?php

namespace Database\Factories;

use App\Models\Plat;
use Illuminate\Database\Eloquent\Factories\Factory;

class PlatFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Plat::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'price' => 123,
            'discount' => 0,
            'is_enabled' => 1,
            'categorie_id' => $this->faker->numberBetween(1, 4)
        ];
    }
}
