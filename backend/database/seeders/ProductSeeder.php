<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     //   Products::newFactory()->count(20)->create();
     Products::create([
        'name' => 'Product 1',
        'description' => 'Qui nisi architecto',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344476/cld-sample-5.jpg',
        'price'=> 15.00,
        'oldPrice'=> 25.00,
        'rating'=> 3.00,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 2',
        'description' => 'Sed aliquam inventore',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344461/samples/ecommerce/leather-bag-gray.jpg',
        'price'=> 15.00,
        'oldPrice'=> 50.00,
        'rating'=> 3.50,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 3',
        'description' => 'Est porro doloribus',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344452/samples/ecommerce/analog-classic.jpg',
        'price'=> 25.00,
        'oldPrice'=> 35.00,
        'rating'=> 3.50,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 4',
        'description' => 'Ut quis',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344462/samples/food/spices.jpg',
        'price'=> 5.00,
        'oldPrice'=> 10.00,
        'rating'=> 5.00,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 5',
        'description' => 'Et debitis dolor',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344474/cld-sample-3.jpg',
        'price'=> 33.00,
        'oldPrice'=> 50.00,
        'rating'=> 5.00,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 6',
        'description' => 'Qui inventore consectetur',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344457/samples/bike.jpg',
        'price'=> 25.00,
        'oldPrice'=> 30.00,
        'rating'=> 4.00,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 7',
        'description' => 'Quo temporibus totam',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344458/samples/animals/three-dogs.jpg',
        'price'=> 35.00,
        'oldPrice'=> 50.00,
        'rating'=> 3.50,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 8',
        'description' => 'Aut iste galisum',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344456/samples/ecommerce/shoes.png',
        'price'=> 45.00,
        'oldPrice'=> 70.00,
        'rating'=> 3.00,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 9',
        'description' => 'Sit unde autem',
        'image'=>'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344456/samples/landscapes/girl-urban-view.jpg',
        'price'=> 5.00,
        'oldPrice'=> 25.00,
        'rating'=> 5.00,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 10',
        'description' => 'Sed natus magnam',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344454/samples/food/fish-vegetables.jpg',
        'price'=> 15.00,
        'oldPrice'=> 25.00,
        'rating'=> 4.50,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 11',
        'description' => 'Et atque minus',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344453/samples/food/dessert.jpg',
        'price'=> 10.00,
        'oldPrice'=> 45.00,
        'rating'=> 3.50,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    Products::create([
        'name' => 'Product 12',
        'description' => 'At dolorem reiciendis',
        'image'=> 'https://res.cloudinary.com/dqrfxrllw/image/upload/v1685344461/samples/ecommerce/accessories-bag.jpg',
        'price'=> 10.00,
        'oldPrice'=> 20.00,
        'rating'=> 4.50,
        'reviews'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "At animi dolorem consequatur numquam quo.", "rating"=> 2],
        ["body"=> "Dignissimos corrupti maxime non facere aut. Ut totam voluptatem qui earum quidem commodi est. Non debitis repudiandae quasi qui voluptatem molestias. Tempora illum blanditiis ad minima.", "title"=> "Enim culpa minima deleniti sit.", "rating"=> 4]]),
        'quantity'=> 1,
        'additionalInfo'=> "Additional Info",
        'details'=> json_encode([["body"=> "Corrupti voluptas quam alias qui commodi asperiores nihil. Corrupti ab pariatur iste tempora. Blanditiis repudiandae eveniet ipsam esse fuga. Molestiae modi saepe molestias quidem.", "title"=> "Varius tempor",
        "title2" => "More details", "listItem1" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem2" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver.",
        "listItem3" => "Aliquam dis vulputate integer sagitis. Faucibus ds diam arcu, nulla lobortis justa metus dis. Eu in fringilla vulputatr nunc nec. Dui, massa vivver."
        
    ]])]);
    $this->command->info('Items seeded successfully.');
    }
}
