import { fetcher } from 'api/config'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSWR from 'swr'
import BannerItem from './BannerItem'

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}`,
    fetcher
  )
  const movies = data?.results || []
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper
        grabCursor="true"
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        speed={1000}
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <BannerItem movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
export default Banner
