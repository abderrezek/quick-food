<?php

namespace App\Http\Resources\Abonnez;

use Illuminate\Http\Resources\Json\JsonResource;

class AbonnezResource extends JsonResource
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
            'prenom' => $this->prenom,
            'email' => $this->email,
            'phone' => $this->phone,
            'accepte_recevoir_email' => $this->accepte_recevoir_email,
            'accepte_recevoir_phone' => $this->accepte_recevoir_phone
        ];
    }
}
