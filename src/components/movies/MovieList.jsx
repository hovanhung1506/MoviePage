import { fetcher } from 'api/config'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR from 'swr'
import MovieCard from './MovieCard'

const MovieList = ({ type = 'now_playing' }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_APIKEY}`,
    fetcher
  )
  if (!data) return null
  const movies = data?.results || []

  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={40}
        loop={true}
        slidesPerView={'auto'}
        slidesPerGroup={1}
        className={type}
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
export default MovieList
