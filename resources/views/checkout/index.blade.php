@extends('layouts.app')

@section('title', 'Quick Food - Checkout')

@push('stylesheets')
@endpush

@section('content')

    <div class="row my-3">
        {{-- Left Side --}}
        <div class="col-8 bg-light">
            <div>
                <h5>Types</h5>
                <p class="m-0 mb-2">PAIEMENT: {{ $data['type'] === 'delivery' ? 'livraison' : 'Récupérer' }}</p>
                <p class="m-0 mb-2">TYPE DE COMMANDE: {{ $data['payment'] === 'card' ? 'Carte' : 'Payer en espèces' }}</p>
                <p class="m-0 mb-2">LORSQUE: {{ $data['when'] === 'as_soon_as_possible' ? 'Dés que possible' : 'Temps spécifique' }}</p>
            </div>

            {{-- Info --}}
            <div class="my-3">
                <h5>Info</h5>
                <p class="m-0 mb-2">
                    Nom: <strong>{{ $data['info']['nom'][0] }}</strong>
                    & Prenom: <strong>{{ $data['info']['prenom'][0] }}</strong>
                </p>
                <p class="m-0 mb-2">
                    Téléphone: <strong>{{ $data['info']['telephone'][0] }}</strong>
                    & E-mail: <strong>{{ $data['info']['email'][0] }}</strong>
                </p>
                <p class="m-0 mb-2">
                @if (is_null($data['info']['comment'][0]))
                    sans commentaire
                @else
                    Commentaire: {{ $data['info']['comment'][0] }}
                @endif
                </p>
            </div>

            {{-- Address --}}
            <div>
                <h5>Adresse</h5>
                <p class="m-0 mb-2">
                    Ville: <strong>{{ $data['address']['city'][0] }}</strong>
                    & Commune: <strong>{{ $data['address']['commune'][0] }}</strong>
                </p>
                <p class="m-0 mb-2">
                    Adresse: <strong>{{ $data['address']['address'][0] }}</strong>
                </p>
                <p class="m-0 mb-2">

                @if (is_null($data['address']['apt'][0]) && is_null($data['address']['floor_number'][0]))
                    sans commentaire
                @else
                    Imeuble: <strong>{{ $data['address']['apt'][0] }}</strong>
                    & numéro d'étage: <strong>{{ $data['address']['floor_number'][0] }}</strong>
                @endif
                </p>
            </div>
        </div>

        {{-- Right Side --}}
        <div class="col-4" style="background: #eee">
            <div class="bg-white p-2 my-2">
                @foreach ($data['orders'] as $order)
                    <div class="d-flex justify-content-between align-items-center px-2 mb-1" style="background: #ececec;">
                        <h6>{{ $order['name'] }}</h6>
                        <div class="d-flex flex-column ">
                            <span>{{ $order['numero'] }}</span>
                            <span>{{ $order['price'] }}</span>
                        </div>
                    </div>
                @endforeach
            </div>

            <div class="d-grid gap-2">
                <a class="btn btn-primary" href="#">Order Now</a>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

@endpush