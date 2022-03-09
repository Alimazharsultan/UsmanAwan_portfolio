import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import loadingGif from '../assets/aacismaharjan-loading-logo.svg'

export default function PortfolioCard({
  card: { img, title, desc, demo, source },
}) {
  const [isLoading, setIsLoading] = useState(true)

  const thumbnail = {
    backgroundImage: `url(${img})`,
  }

  const LoadingAnimation = () => {
    return (
      <AnimatePresence>
        {isLoading && (
          <motion.div className='overlay'>
            <img
              src={img}
              onLoad={() => setTimeout(() => setIsLoading(false), 5500)}
              onError={() => setIsLoading(false)}
              style={{ display: 'none' }}
            />
            <img src={loadingGif} alt='Loading card...' />
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <Card data-aos='flip-left'>
      <div className='card-thumbnail' style={thumbnail}>
        <LoadingAnimation />
      </div>

      <Card.Body>
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  )
}
