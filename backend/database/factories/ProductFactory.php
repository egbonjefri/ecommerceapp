<?php

namespace Database\Factories;

use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Products::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
            'image' => $this->faker->imageUrl(300, 200, 'shopping'),
            'price' => $this->faker->randomFloat(2, 10, 50),
            'oldPrice' => $this->faker->randomFloat(2, 10, 150),
            'rating' => $this->faker->randomFloat(2, 1, 5),
            'reviews' => json_encode([
                [
                    'title' => $this->faker->sentence,
                    'body' => $this->faker->paragraph,
                    'rating' => $this->faker->numberBetween(1, 5),
                ],
                [
                    'title' => $this->faker->sentence,
                    'body' => $this->faker->paragraph,
                    'rating' => $this->faker->numberBetween(1, 5),
                ],
                // Add more review entries as needed
            ]),
            'additionalInfo' => $this->faker->sentence,
            'details' => $this->faker->paragraph,




                  ];
    }
}