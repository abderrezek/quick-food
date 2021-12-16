@extends('layouts.app')

@section('title', 'Quick Food - Réinitialiser le mot de passe')

@section('content')

    <div class="mx-auto mt-5" style="width: 60%;height: 400px">
        <div class="card">
            <div class="card-header">
                Réinitialiser le mot de passe
            </div>
            <div class="card-body">
                <reset-password-form
                    csrf="{{ request()->route('token') }}"
                    email="{{ request()->email }}"
                    action="{{ route('password.update') }}"
                    csrfLogin="{{ csrf_token() }}"
                    actionLogin="{{ route('login') }}"
                />
            </div>
        </div>
    </div>

@endsection

@push('scripts')
    <script type="text/javascript" src="{{ asset('/js/ResetPassword.js') }}"></script>
@endpush