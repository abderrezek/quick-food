<?php

namespace App\Models;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plat extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'price',
        'discount',
        'ingredients',
        'is_enabled',
        'image',
        'number_times_selected',
        'description',
        'categorie_id'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'price' => 'decimal:2',
        'discount' => 'decimal:2',
        'ingredients' => 'integer',
        'is_enabled' => 'boolean',
        'number_times_selected' => 'integer',
    ];

    /**
     * Get the categorie associated with the plat.
     */
    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }
}
