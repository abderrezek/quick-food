@extends('layouts.app')

@section('title', 'Quick Food - Accueil')

@push('stylesheets')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
@endpush

@section('content')
    <div class="bg-secondary" style="height: 300px;"></div>

    <div id="cat"></div>

    {{-- checkout modal --}}
    {{-- <div class="modal" id="checkout-modal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header flex-row-reverse">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div id="checkout"></div>
                </div>
            </div>
        </div>
    </div> --}}
@endsection

@push('scripts')
    <script type="text/javascript">
        window.onload = () => {
            loadContent('cat', 'order', 'accueil.js');
        };
    </script>
@endpush