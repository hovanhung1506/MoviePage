import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from 'api/config'

function MovieCredits() {
  const { id } = useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}`,
    fetcher
  )
  if (!data) return null
  const { cast } = data
  if (!cast || cast.length <= 0) return null
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl text-center">Casts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              className="w-full h-[350px] object-cover rounded-lg mb-2"
              alt=""
            />
            <h3 className="text-xl font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCredits
