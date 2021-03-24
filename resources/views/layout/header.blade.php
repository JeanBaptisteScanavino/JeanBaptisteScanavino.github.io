<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Hello, world!</title>
    </head>
    <body>
        <header><ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Les projets perso</a>
                <ul class="dropdown-menu">
                @foreach($projects as $project)
                <li><a class="dropdown-item" href="{{route('project', ['id' => $project->id])}}">{{$project->name}}</a></li>
                @endforeach
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">CV</a>
            </li>

            </ul>
        </header>

