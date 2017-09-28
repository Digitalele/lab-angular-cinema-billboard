import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
   providers: [MoviesService]
})
export class MyMovieComponent implements OnInit {

	movie: Object

  	movieId: number

  	newMoviesService: MoviesService;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.newMoviesService = new MoviesService
  	console.log(this.newMoviesService)
    this.route.params.subscribe((params) => {

    this.movieId = params['id'];

    this.movie = this.newMoviesService.getMovie(this.movieId);
    console.log(this.movie);

    // not works, getMovie in service return false
  });

}




}

