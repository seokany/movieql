let movies = [
    {
        id : 0,
        name : "intern",
        score : 4
    },
    {
        id : 1,
        name : "NottingHill",
        score : 4
    },
    {
        id : 2,
        name : "Cinema Paradiso",
        score : 5
    },
    {
        id : 3,
        name : "God father",
        score : 5
    }
];

export const getMovies = () => movies; 

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0]; 
}
//movie 필터 => 같은 id를 가지지 않은 클린한 배열을 원한다.
export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    console.log(movies);
    return newMovie;
}

