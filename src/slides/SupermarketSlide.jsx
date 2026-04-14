import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import supermarketImage from '../assets/supermarket.png'
import chefImage from '../assets/chef.png'

export default function SupermarketSlide() {
  const [showChef, setShowChef] = useState(false)

  useEffect(() => {
    const onKeyDownCapture = (event) => {
      if (showChef) return
      if (event.key !== 'ArrowRight' && event.key !== ' ') return
      event.preventDefault()
      event.stopPropagation()
      setShowChef(true)
    }

    window.addEventListener('keydown', onKeyDownCapture, true)
    return () => {
      window.removeEventListener('keydown', onKeyDownCapture, true)
    }
  }, [showChef])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        cursor: showChef ? 'default' : 'pointer',
      }}
      onClick={() => {
        if (!showChef) setShowChef(true)
      }}
    >
      <motion.img
        src={supermarketImage}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          display: 'block',
        }}
        initial={{ x: '-16%', y: '-16%', opacity: 0 }}
        animate={{ x: '0%', y: '0%', opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <AnimatePresence>
        {showChef ? (
          <motion.img
            src={chefImage}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
            }}
            initial={{ x: '16%', y: '-16%', opacity: 0 }}
            animate={{ x: '0%', y: '0%', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
