import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-10">
      <div className="text-9xl">404 Not found</div>
      <button
        className="flex items-center px-10 py-2 transition-all border rounded-xl gap-x-5 border-primary hover:bg-primary"
        onClick={() => navigate('..')}
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          ></path>
        </svg>
        <span>Back</span>
      </button>
    </div>
  )
}
export default Notfound
