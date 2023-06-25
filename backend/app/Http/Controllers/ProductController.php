<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function all(Request $request)
    {
          $allItems = Products::all();
        return response()->json($allItems);
    }
    public function single (Request $request, $id) {
      // Retrieve the product based on the ID
      $product = Products::find(intval($id));
  
      if (!$product) {
          // If the product doesn't exist, return a response or redirect
          return response()->json(['error' => 'Error fetching products'], 404);
      }
  
      // Display the product details
      return response()->json($product);
  }
}
