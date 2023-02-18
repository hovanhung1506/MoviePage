import Button from 'components/button/Button'
import { useNavigate } from 'react-router-dom'

function BannerItem({ movie }) {
  const { poster_path, title, id } = movie
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="object-cover object-top w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="px-4 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Drama
          </span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>Wacth Now</Button>
      </div>
    </div>
  )
}

export default BannerItem
