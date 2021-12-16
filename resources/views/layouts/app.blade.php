<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>@yield('title', config('app.name'))</title>

        {{-- Styles --}}
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        @stack('stylesheets')
        @if (Route::is('site.index') || Route::is('profile'))
          {{-- Modal CSS --}}
          <style type="text/css">
              .modall {
                  position: fixed;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  top: 0;
                  background-color: rgba(0, 0, 0, .5);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 1000000000;

                  /* opacity: 0;
                  transition: all .3s ease-in-out;
                  pointer-events: none; */
              }
              .modall.show {
                  opacity: 1;
                  pointer-events: visible;
              }
              .modal__content {
                  width: 500px;
                  background-color: #fff;

                  /* transform: translateY(-200px);
                  transition: all .3s ease-in-out; */
              }
              .modal__content.modal__full__width {
                  width: 100% !important;
                  min-height: 100%;
              }
              .modall.show .modal__content {
                  transform: translateY(0);
              }
              .modal__header, .modal__footer {
                  padding: 10px;
              }
              .modal__header {
                  display: flex;
                  justify-content: space-between;
              }
              .modal__title {
                  margin: 0;
              }
              .modal__body {
                  padding: 10px;
                  border-top: 1px solid #eee;
                  border-bottom: 1px solid #eee;
              }
              .modal__footer {
                  display: flex;
                  justify-content: flex-end;
              }
          </style>
        @endif
    </head>
    <body>
        {{-- Navbar --}}
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container">
            <a class="navbar-brand" href="{{ route('site.index') }}">{{ config('app.name') }}</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link{{ Route::is('site.index') ? ' active' : '' }}" aria-current="page" href="{{ route('site.index') }}">Accueil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link{{ Route::is('site.about') ? ' active' : '' }}" href="{{ route('site.about') }}">À propos de</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link{{ Route::is('site.contact') ? ' active' : '' }}" href="{{ route('site.contact') }}">Nous contacter</a>
                </li>
              </ul>

              <ul class="navbar-nav">
                @auth
                  @if (auth()->user()->isAdmin())
                    <li class="nav-item">
                      <a class="nav-link" href="{{ route('admin.index') }}">Administrateur</a>
                    </li>
                  @endif

                  <li class="nav-item">
                    <div class="dropdown">
                      <button class="nav-link btn btn-link dropdown-toggle" type="button" id="user" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ auth()->user()->name }}
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="user">
                        <li><a class="dropdown-item" href="{{ route('profile') }}">Profil</a></li>
                        <li><link-logout csrf="{{ csrf_token() }}" text="Se déconnecter" /></li>
                      </ul>
                    </div>
                  </li>
                @else
                  <li class="nav-item">
                    <button type="button" id="login-modal" class="nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#modalGeneral">
                      S'identifier
                    </button>
                  </li>
                  <li class="nav-item">
                    <button type="button" id="register-modal" class="nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#modalGeneral">
                      S'inscrire
                    </button>
                  </li>
                @endauth
              </ul>
            </div>
          </div>
        </nav>
        {{-- Start Mail Notification bar --}}
        @auth
          @if (!auth()->user()->hasVerifiedEmail())
            <div class="alert alert-warning mb-0" role="alert">
              E-mail non vérifié <a id="email-sender" class="alert-link" href="{{ route('verification.send') }}">cliquez ici pour renvoyer</a>
            </div>
            <form id="email-form" action="{{ route('verification.send') }}" method="post" style="display: none;">
              @csrf
            </form>
          @endif
        @endauth
        {{-- End Mail Notification bar --}}
        {{-- Start Mail Notification Send succefull --}}
        @if (session('status') == 'verification-link-sent')
          <div class="alert alert-primary alert-dismissible fade show" role="alert">
            A new email verification link has been emailed to you!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        @endif
        {{-- End Mail Notification Send succefull --}}

        <div class="container">
            @yield('content')
        </div>

        {{-- Start Modal  || Route::is('profile') --}}
        @if (!auth()->user())
          <div id="modalGeneral" class="modal fade" id="modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="load-modal"></div>
              </div>
            </div>
          </div>
        @endif
        {{-- End Modal --}}

        {{-- Scripts --}}
        {{-- Bootstrap JS --}}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

        <script type="text/javascript" src="{{ asset('/js/main.js') }}"></script>
        {{-- @routes --}}
        @stack("scripts")
    </body>
</html>
