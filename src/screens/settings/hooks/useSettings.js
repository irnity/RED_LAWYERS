import React, { useEffect, useState } from "react"

const useSettings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return { isLoading }
}
export default useSettings
