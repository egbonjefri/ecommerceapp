<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Password;
use App\Models\User;



class EmailController extends Controller

{
    public function reset(Request $request)
{

    $email = $request->input('email');

    $user = User::where('email', $email)->first();

    if ($user) {
    $details = [
        'title' => 'Please Reset Your Password',
        'body' => 'http://localhost:3000/users?='.$email,
    ];
   
    \Mail::to($email)->send(new \App\Mail\ResetEmail($details));

    return response()->json('Password Reset Email sent successfully');
   
}
else{
    return response()->json(['message' => 'User not authenticated'], 401);
}
}
}