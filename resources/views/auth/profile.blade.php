@extends('layouts.app')

@section('title', 'Quick Food - profil')

@push('stylesheets')

@endpush

@section('content')

<div class="mx-auto mt-5" style="width: 80%;height: 400px">
    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#info-person" type="button" role="tab" aria-controls="info-person" aria-selected="true">Informations personnels</button>
        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#adresse" type="button" role="tab" aria-controls="adresse" aria-selected="false">Adresses</button>
      </div>
      <div class="tab-content w-100" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="info-person" role="tabpanel" aria-labelledby="info-person-tab">
            <profile-form
                data='@json($userData)'
                actionUI="{{ route('profile-update-info') }}"
                actionUP="{{ route('profile-update-pswd') }}"
            />
        </div>
        <div class="tab-pane fade" id="adresse" role="tabpanel" aria-labelledby="adresse-tab">
            <address-form
                data='@json($userLocations)'
                actionGA="{{ route('profile-get-address') }}"
                actionAA="{{ route('profile-add-address') }}"
            />
        </div>
      </div>
    </div>
</div>

@endsection

@push('scripts')
    <script type="text/javascript" src="{{ asset('/js/profile.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/js/address.js') }}"></script>
@endpush