import { Outlet } from 'react-router-dom'
import Header from './Header'

const Main = () => {
  document.title = 'Movie Page'
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default Main
