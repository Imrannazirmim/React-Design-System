interface MoviesProps {
  movies: {
    title: string;
    genre: string[];
    director: string;
    releaseYear: number;
    rating: number;
  };
}

const Movies = ({ movies }: MoviesProps) => {
  const {title, genre, director, releaseYear, rating} = movies;
  return <section className="flex flex-col ">
      <div className="shadow flex flex-col gap-2 m-4 p-2 rounded bg-gray-200">
        <h2>Movies Name: {title}</h2>
        <span className='flex items-center gap-2'> Genre: {genre}</span>
        <p className="flex items-center gap-2"> Director Name: {director}</p>
         <p>Release: {releaseYear}</p>
         <span>Games Rating:{rating}</span>
      </div>
    </section>
};
export default Movies;
