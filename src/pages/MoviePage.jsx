import { fetcher } from 'api/config'
import MovieCard from 'components/movies/MovieCard'
import PaginatedItems from 'components/movies/PaginatedItems'
import SekeletonMovie from 'components/movies/SekeletonMovie'
import useDebounceSearch from 'hooks/useDebounceSearch'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const MoviePage = () => {
  const [filter, setFilter] = useState('')
  const [prevSearch, setPrevSearch] = useState('')
  const [nextPage, setNextPage] = useState(1)
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&page=1`
  )
  const { data, isLoading } = useSWR(url, fetcher)
  const handleFilterChange = (e) => setFilter(e.target.value)
  const debouncedSearch = useDebounceSearch(filter, 1000)
  const { page, total_pages } = !!data && data
  const movies = data?.results || []

  useEffect(() => {
    if (debouncedSearch) {
      if (page !== nextPage && debouncedSearch === prevSearch) {
        setUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${debouncedSearch}&page=${nextPage}`
        )
      } else if (debouncedSearch !== '' && debouncedSearch !== prevSearch) {
        setPrevSearch(debouncedSearch)
        setNextPage(1)
        setUrl(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${debouncedSearch}&page=1`
        )
      }
    } else {
      if (debouncedSearch === '' && prevSearch !== '') {
        setPrevSearch('')
        setNextPage(1)
        setUrl(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&page=1`
        )
      } else
        setUrl(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&page=${nextPage}`
        )
    }
  }, [debouncedSearch, nextPage])
  const handleNextPage = (p) => {
    setNextPage(p)
  }

  return (
    <div className="py-10 text-white page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 border-none outline-none bg-slate-800"
            placeholder="Search..."
            onChange={handleFilterChange}
            value={filter}
            autoFocus
          />
        </div>
        <button className="px-10 py-4 text-white bg-primary">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
        </button>
      </div>
      {isLoading ? (
        <SekeletonMovie />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.length > 0 &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
          {movies.length <= 0 && (
            <div className="text-xl md:text-2xl lg:text-3xl">
              Không có kết quả tìm kiếm cho: {debouncedSearch}
            </div>
          )}
        </>
      )}
      <div className="flex items-center justify-center mt-10">
        {page && total_pages && movies.length > 0 && (
          <PaginatedItems
            total_pages={total_pages}
            handleNextPage={handleNextPage}
            page={page}
          />
        )}
      </div>
    </div>
  )
}
export default MoviePage
