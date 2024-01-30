import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MoviesApiService } from '../services/movies-api.service';
import { MovieDTO } from '../models/movies';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-movie-list-simple',
  standalone: true,
  templateUrl: './movie-list-simple.component.html',
  styleUrl: './movie-list-simple.component.scss',
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class MovieListSimpleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'image', 'year', 'actions'];
  // dataSource: MovieDTO[] = [];
  dataSource!: MatTableDataSource<MovieDTO>;

  constructor(private moviesSevice: MoviesApiService) {
    this.moviesSevice.getMovies({}).subscribe((movies) => {
      console.log(movies.movies);
      this.dataSource = new MatTableDataSource(movies.movies);
    });
  }
  ngOnInit(): void {
    // this.moviesSevice.getMovies({}).subscribe((movies) => {
    //   this.dataSource = movies.movies;
    // });
  }
  clearTable(): void {
    // this.dataSource = new MatTableDataSource([] as MovieDTO[]);
    this.dataSource.data = [];
  }
}