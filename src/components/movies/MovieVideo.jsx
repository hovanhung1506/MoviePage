import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from 'api/config'

function MovieVideo() {
  const { id } = useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}`,
    fetcher
  )
  if (!data) return null
  const { results } = data
  if (!results || results.length <= 0) return null
  return (
    <div className="py-10">
      <div className="flex flex-col gap-5">
        {results.slice(0, 3).map((item) => (
          <div key={item.key} className="relative">
            <h3 className="absolute text-2xl font-medium text-center -translate-x-1/2 top-16 left-1/2">
              {item.name}
            </h3>
            <div className="flex items-center justify-center w-full aspect-video">
              <iframe
                width="964"
                height="542"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="A Conversation with Danai Gurira &amp; Simone Manuel | Marvel Studios&#39; Black Panther: Wakanda Forever"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieVideo
