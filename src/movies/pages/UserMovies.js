import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
const UserMovies = props => {
    const MOVIES = [{
        id : "m1",
        image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
        name : "Avatar 2",
        review: "Best Movie I have watched in the visual aspect. I was totally stunned with all the effects believing it was real",
        stars: "5",
        creator: 'u1'
    },
    {
        id : "m2",
        image: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        name : "Sopranos",
        review: "One of the best tv shows I watched",
        stars: "5",
        creator: 'u2'
    }

]
    const userId = useParams().userId;
    const filteredUsers = MOVIES.filter(movies => movies.creator === userId);
    return <MovieList items = {filteredUsers}/>
}

export default UserMovies;