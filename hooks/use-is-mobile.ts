import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isPhone, setIsPhone] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.screen.width <= 575.98)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return isPhone
}
