<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'address',
        'user_id',
        'slug',
    ];

    /**
     * Get address
     *
     * @param  string  $value
     * @return string
     */
    public function getAddressAttribute($value)
    {
        return (strlen($value) > 30) ? substr($value, 0, 30).'...' : $value;
    }

    /**
     * get the user that owns the location
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
