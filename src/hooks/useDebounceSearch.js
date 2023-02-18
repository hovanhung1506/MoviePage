import { useEffect, useState } from 'react'

function useDebounceSearch(value, delay) {
  const [dbValue, setDbValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDbValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return dbValue
}

export default useDebounceSearch
