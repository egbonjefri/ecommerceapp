<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\User as UserResource;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\CartItem;


class UserController extends Controller
{
 
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token =  $user->createToken($user->id)->plainTextToken;

        return response()->json([
            
            'email' => $user->email,
            'token' => $token
        ],200);
    }
    public function register(Request $request)
    {
 
      
      $firstName = $request->input('firstName');
      $lastName = $request->input('lastName');
      $email = $request->input('email');
      $password = $request->input('password');
      try {

        $validatedData = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'firstName' => $validatedData['firstName'],
            'lastName' => $validatedData['lastName'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            
        ]);

        $token = $user->createToken('api_token')->plainTextToken;

              // Prepare response
             
              $response = [
                'status' => 'success',
                'message' => 'User registered successfully.',
                'id' => $email,
                'token' => $token
            ];
    
            // Return the response as JSON with the appropriate header
            return response()->json($response);
  } 
  catch (ValidationException $e) {
    return response()->json(['errors' => $e->errors()], 422);
}
}
public function users (Request $request) {


  if (auth('sanctum')->check()) {
    $user = auth('sanctum')->user();
    $cartItems = $user->cartItems()->get();
    return response()->json(['user'=>$user, 'items'=>$cartItems]);
} else {
    return response()->json(['message' => 'User not authenticated'], 401);
}
}


public function updatePassword(Request $request, $email)
{
    $user = User::where('email', $request->email)->first();
    $user->password = Hash::make($request->password);
    $user->save();
    if ($email) {
        return response()->json(['message' => 'Password updated successfully']);
    } else {
        return response()->json(['message' => 'User not found'], 401);
    }
}
}