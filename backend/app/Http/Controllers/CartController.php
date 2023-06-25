<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartItem;

class CartController extends Controller
{
    public function store(Request $request)
    {
        if (auth('sanctum')->check()) {
        $user = auth('sanctum')->user();
        $cartItem = new CartItem([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'image' => $request->input('image'),
            'description' => $request->input('description'),
            'quantity' => $request->input('quantity'),
        ]);
        $user->cartItems()->save($cartItem);
        return response()->json(['message' => 'Cart item saved successfully'], 201);
        
    }
}

    public function index()
    {
        if (auth('sanctum')->check()) {
        $user = auth('sanctum')->user();
        $cartItems = $user->cartItems()->get();

        return response()->json($cartItems);
    }
    else {
        return response()->json(['message' => 'Sorry, not found'], 404);
    }
}
}

