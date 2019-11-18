<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mortgage Caltulator</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">
    <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> -->
    <link href="{{ asset('css/materialdesignicons.min.css') }}" rel="stylesheet">


    <!-- Styles -->
    <link href="{{ asset('css/vuetify.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" />
</head>
<body>
<div id="app">

</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
