import { motion, AnimatePresence } from 'framer-motion'

const slideVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
}

const dissolveVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function SlideLayout({ slideKey, children, style, dissolve }) {
  const variants = dissolve ? dissolveVariants : slideVariants
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={
          dissolve
            ? { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }
            : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8vh 10vw',
          ...style,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
