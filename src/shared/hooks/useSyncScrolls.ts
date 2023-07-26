import React, { useEffect, useRef, useState } from 'react'

export function useSyncScrolls() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const componentRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop } = e.target as HTMLElement
    setScrollPosition(scrollTop)
  }

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollTop = scrollPosition
    }
  }, [componentRef, scrollPosition])

  return {
    componentRef,
    handleScroll
  }
}
