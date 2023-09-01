import React, { useEffect, useState } from "react"

const useCerificates = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return { loading }
}

export default useCerificates
