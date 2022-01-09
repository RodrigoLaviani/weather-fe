import { useState, useEffect } from 'react'

export const useGeoLocation = () => {
  const [location, setLocation] = useState({})

  const showPosition = ({ coords }) => {
    setLocation({
      latitude: coords.latitude.toFixed(2),
      longitude: coords.longitude.toFixed(2)
    })
  }

  useEffect(() => {
    const geolocation = navigator.geolocation
    geolocation && geolocation.getCurrentPosition(showPosition)
  }, [])

  return { location }
}
