<?php

namespace App\Http\Resources\Plats;

use Illuminate\Http\Resources\Json\JsonResource;

class PlatsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'discount' => $this->discount,
            'ingredients' => $this->ingredients,
            'is_enabled' => $this->is_enabled,
            'image' => $this->image,
            'number_times_selected' => $this->number_times_selected,
            'rating' => $this->rating,
            'description' => $this->description
        ];
    }
}
