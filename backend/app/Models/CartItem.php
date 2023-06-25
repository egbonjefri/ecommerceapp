<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;


class CartItem extends Model
{
    protected $fillable = ['name', 'description','image','price','quantity'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
