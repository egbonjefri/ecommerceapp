<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Database\Factories\ProductFactory;

class Products extends Model
{
  //  use HasFactory;
    protected $table = 'productList';
    protected $fillable = ['name', 'description', 'image', 'price', 'oldPrice','rating','reviews','quantity','additionalInfo','details'];
/*
    protected static function newFactory()
    {
        return ProductFactory::new();
    }
    */
}
