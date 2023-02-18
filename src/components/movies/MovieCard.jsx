import Button from 'components/button/Button'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, id } = movie
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full p-3 rounded-lg movie-card bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[200px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold title-movie">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm">
          <span className="opacity-50">{release_date.slice(0, 4)}</span>
          <span className="flex gap-x-2">
            <svg
              fill="#ff0"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>{' '}
            <span className="opacity-50">{vote_average}</span>
          </span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>Wacth Now</Button>
      </div>
    </div>
  )
}
export default MovieCard
