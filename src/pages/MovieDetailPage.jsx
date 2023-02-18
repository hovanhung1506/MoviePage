import MovieCredits from 'components/movies/MovieCredits'
import MovieSimilar from 'components/movies/MovieSimilar'
import MovieVideo from 'components/movies/MovieVideo'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from 'api/config'

const MovieDetailPage = () => {
  const { id } = useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`,
    fetcher
  )
  if (!data) return null
  const { backdrop_path, poster_path, title, genres, overview } = data
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
          }}
        ></div>
      </div>
      <div className="w-full h-[600px] max-w-[600px] mx-auto relative -mt-[200px] z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <h1 className="mb-10 text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex flex-col items-center justify-center mb-10 md:flex-row gap-y-5 gap-x-5">
          {genres.map((item) => (
            <span
              key={item.id}
              className="px-4 py-2 text-base border rounded-full border-primary text-primary md:text-xl"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-base md:text-xl text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits />
      <MovieVideo />
      <MovieSimilar />
    </div>
  )
}
export default MovieDetailPage
