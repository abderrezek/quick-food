@extends('layouts.app')

@section('title', 'Quick Food - Connexion')

@section('content')

<div class="mx-auto mt-5" style="width: 60%;height: 400px">
    <auth-form
        type="login"
        intended="{{ session()->get('url.intended') }}"
    />
</div>

@endsection

@push('scripts')
    <script type="text/javascript" src="{{ asset('/js/auth.js') }}"></script>
@endpush