@extends('layouts.app')

@section('title', 'Quick Food - Nous Contacter')

@push('stylesheets')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
@endpush

@section('content')

    <div class="bg-dark" style="height: 300px;"></div>
    <div class="row">
        {{-- Maps --}}
        <div class="col-12">
            <div class="d-flex align-items-center justify-content-center bg-secondary fs-3 text-light" style="height: 400px">maps</div>
        </div>
        {{-- Contact us --}}
        <div class="col">
            <div>
                <contact-form
                    action="{{ route('site.contact-store') }}"
                />
            </div>
        </div>
        {{-- Info --}}
        <div class="col">
            <div class="my-2 ms-md-5">
                <div class="row">
                    <div class="col-1">
                        <span><i class="fas fa-map-marker-alt"></i></span>
                    </div>
                    <div class="col-6">
                        <p class="m-0">WALL ST 57,</p>
                        <p class="m-0">10005 NEW YORK</p>
                    </div>
                </div>
            </div>
            <div class="my-2 ms-md-5">
                <div class="row">
                    <div class="col-1">
                        <span><i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div class="col-6">
                        <p class="m-0">+1 202-555-0191</p>
                        <p class="m-0">+1 202-555-0191</p>
                        <p class="m-0">+1 202-555-0191</p>
                    </div>
                </div>
            </div>
            <div class="my-2 ms-md-5">
                <div class="row">
                    <div class="col-1">
                        <span><i class="far fa-clock"></i></span>
                    </div>
                    <div class="col-6">
                        <p class="m-0">MON - SUN</p>
                        <p class="m-0">00:00 - 23:59</p>
                    </div>
                </div>
            </div>
            <div class="my-2 ms-md-5">
                <div class="row">
                    <div class="col-1">
                        <span><i class="far fa-envelope"></i></span>
                    </div>
                    <div class="col-6">
                        <a class="text-decoration-none" href="">TEST@MAIL.COM</a>
                    </div>
                </div>
            </div>
            <div class="my-4 ms-md-5">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-6">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          Subscribe to newsletter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <abonnez-moi
                            action="{{ route('abonnez-store') }}"
                        />
                    </div>
                    <div class="col">
                        <h1>VOUS RECEVREZ DES INFORMATIONS SUR:</h1>
                        <p>Actualités et changements
                        Promotions
                        Offres spéciales</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

@endsection

@push('scripts')
    <script type="text/javascript" src="{{ asset('/js/contact.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/abonnez.js') }}"></script>
@endpush