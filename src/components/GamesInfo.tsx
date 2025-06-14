interface GamesInfoProps {
  games: {
    title: string;
    genre: string[];
    platforms: string[];
    developer: string;
    releaseYear: number;
    rating: number;
  };
}

const GamesInfo = ({ games }: GamesInfoProps) => {
  const { title, genre, platforms, developer, releaseYear, rating } = games;

  const genreData = genre.map((gen) => (
    <ul>
      <li>{gen}</li>
    </ul>
  ));
  const platFormsData = platforms.map((plat) => (
    <ul>
      <li>{plat}</li>
    </ul>
  ));

  return (
    <section className="flex flex-col ">
      <div className="shadow flex flex-col gap-2 m-4 p-2 rounded bg-gray-200">
        <h2>Games Name: {title}</h2>
        <span className='flex items-center gap-2'> Genre: {genreData}</span>
        <p className="flex items-center gap-2"> PlatForms: {platFormsData}</p>
         <span>Developer Name: {developer}</span>
         <p>Release: {releaseYear}</p>
         <span>GamesRating:{rating}</span>
      </div>
    </section>
  );
};
export default GamesInfo;
