'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  style = {},
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)'
      case 'down': return 'translateY(-30px)'
      case 'left': return 'translateX(30px)'
      case 'right': return 'translateX(-30px)'
      case 'none': return 'none'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : getInitialTransform(),
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
