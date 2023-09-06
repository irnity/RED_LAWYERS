import React, { useEffect, useState } from "react"

const useCerificates = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    // const timer = setTimeout(() => {
    // setloading(false)
    // }, 0)

    // return () => {
    // clearTimeout(timer)
    // }
    setloading(false)
  }, [])

  return { loading }
}

export default useCerificates
