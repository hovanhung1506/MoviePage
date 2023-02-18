import { fetcher } from 'api/config'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR from 'swr'
import MovieCard from './MovieCard'
function MovieSimilar() {
  const { id } = useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_APIKEY}`,
    fetcher
  )
  if (!data) return null
  const { results } = data
  if (!results || results.length <= 0) return null
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl font-medium capitalize">Similar movies</h2>
      <div className="movie-list">
        <Swiper
          grabCursor={true}
          spaceBetween={40}
          loop={true}
          slidesPerView={'auto'}
          slidesPerGroup={1}
        >
          {results.length > 0 &&
            results.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieSimilar
