<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productList', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->text('description');
            $table->string('image');
            $table->decimal('price', 8, 2);
            $table->decimal('oldPrice', 8, 2);
            $table->decimal('rating', 8, 2);
            $table->json('reviews');
            $table->integer('quantity');
            $table->text('additionalInfo');
            $table->json('details');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productList');
    }
};
