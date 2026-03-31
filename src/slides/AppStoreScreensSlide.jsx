import { motion } from 'framer-motion'

import appstore1 from '../assets/jokesapp/appstore/appstore1.png'
import appstore2 from '../assets/jokesapp/appstore/appstore2.png'
import appstore3 from '../assets/jokesapp/appstore/appstore3.png'
import appstore4 from '../assets/jokesapp/appstore/appstore4.png'
import appstore5 from '../assets/jokesapp/appstore/appstore5.png'
import appstore6 from '../assets/jokesapp/appstore/appstore6.png'
import appleStoreIcon from '../assets/jokesapp/appstore/apple-store.png'
import istorioLogo from '../assets/jokesapp/appstore/istorio-logo.png'

const phones = [appstore1, appstore2, appstore3, appstore4, appstore5, appstore6]

const OVERLAP = 'clamp(-6rem, -11vw, -3rem)'

const LOGO_FRAME = {
  width: 'clamp(56px, 7.5vw, 80px)',
  height: 'clamp(56px, 7.5vw, 80px)',
  borderRadius: 'clamp(16px, 2.2vw, 22px)',
  overflow: 'hidden',
  flexShrink: 0,
  boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
}

function StoreLogos() {
  return (
    <>
      <div style={LOGO_FRAME}>
        <img
          src={istorioLogo}
          alt="Istorio"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>
      <div style={LOGO_FRAME}>
        <img
          src={appleStoreIcon}
          alt="Download on the App Store"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  )
}

export default function AppStoreScreensSlide() {
  return (
    <div
      style={{
        flex: 1,
        alignSelf: 'stretch',
        minHeight: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'absolute',
          top: 'clamp(28px, 6vh, 72px)',
          left: 0,
          right: 0,
          width: 'fit-content',
          marginLeft: 'auto',
          marginRight: 'auto',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(12px, 1.8vw, 24px)',
          pointerEvents: 'none',
        }}
      >
        <StoreLogos />
      </motion.div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          minHeight: 0,
          width: '100%',
          maxWidth: '100%',
          margin: 0,
          padding: 0,
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          paddingLeft: 'env(safe-area-inset-left, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {phones.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            initial={{ opacity: 0, x: 110, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              delay: 0.12 + i * 0.11,
              duration: 0.72,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: 'relative',
              zIndex: i + 1,
              height: '100%',
              width: 'auto',
              maxHeight: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              display: 'block',
              marginLeft: i === 0 ? 0 : OVERLAP,
              flexShrink: 0,
              filter: 'drop-shadow(0 18px 32px rgba(35, 30, 60, 0.22))',
            }}
          />
        ))}
      </div>
    </div>
  )
}
