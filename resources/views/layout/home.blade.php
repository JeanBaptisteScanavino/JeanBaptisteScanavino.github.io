<h1>Hello, world!</h1>

<div class="">
    @foreach($projects as $project)
        <div class="card" style="width: 18rem;">
            @if ($project->image)
            <img src="{{$project->image}}" class="card-img-top" alt="{{$project->name}}">
            @endif
            <div class="card-body">
                <h5 class="card-title">{{$project->name}}</h5>
                <p class="card-text">{{$project->resume}}</p>
                <a href="{{route('project', ['id' => $project->id])}}" class="btn btn-primary">Voir le projet</a>
            </div>
        </div>
    @endforeach
</div>
