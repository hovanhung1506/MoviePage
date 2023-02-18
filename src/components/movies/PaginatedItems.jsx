import Pagination from '@mui/material/Pagination'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#f62682'
    }
  }
})

const PaginatedItems = ({ page, total_pages = 100, handleNextPage }) => {
  const handleChange = (e, p) => {
    handleNextPage(p)
  }
  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={total_pages}
        color="primary"
        onChange={handleChange}
        page={page}
      />
    </ThemeProvider>
  )
}
export default PaginatedItems
