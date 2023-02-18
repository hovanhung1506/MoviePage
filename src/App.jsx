import Banner from 'components/banner/Banner'
import Main from 'components/layout/Main'
// import HomePage from 'pages/HomePage'
// import MovieDetailPage from 'pages/MovieDetailPage'
// import MoviePage from 'pages/MoviePage'
import { Route, Routes } from 'react-router-dom'
import 'swiper/scss'
import 'swiper/scss/pagination'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('pages/HomePage'))
const MovieDetailPage = lazy(() => import('pages/MovieDetailPage'))
const MoviePage = lazy(() => import('pages/MoviePage'))

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
