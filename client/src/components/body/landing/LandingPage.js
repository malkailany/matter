import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import useWindowDimensions from '../../utils/window-dimensions/windowDimensions'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

function LandingPage () {
  // Size of width of window
  const { width } = useWindowDimensions()
  const [firstLottieWidth, setFirstLottieWidth] = useState('50%')
  const [remainingLottieWidths, setRemainingLottieWidths] = useState('85%')

  useEffect(() => {
    if (width <= 768) {
      setFirstLottieWidth('80%')
      setRemainingLottieWidths('100%')
    } else {
      setFirstLottieWidth('50%')
      setRemainingLottieWidths('85%')
    }
  }, [width])

  // GSAP Animations
  useEffect(() => {
    // Section 1
    gsap.from(
      '.landing-page-row.section1 .landing-page-text-container.text .landing-page-1-text-items h1',
      {
        duration: 0.75,
        x: -500,
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.25,
        scrollTrigger: {
          trigger:
            '.landing-page-row.section1 .landing-page-text-container.text .landing-page-1-text-items',
          start: 'top 100%',
          end: 'bottom 25%',
          toggleActions: 'restart reverse restart reverse'
        }
      }
    )

    gsap.from('.landing-page-row.section1 .landing-page-text-container.image', {
      duration: 0.75,
      x: 500,
      opacity: 0,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger:
          '.landing-page-row.section1 .landing-page-text-container.image',
        start: 'top 100%',
        end: 'bottom 25%',
        toggleActions: 'restart reverse restart reverse'
      }
    })

    // Section 2
    gsap.from('.landing-page-row.section2 .landing-page-text-container.image', {
      duration: 0.75,
      left: -500,
      opacity: 0,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger:
          '.landing-page-row.section2 .landing-page-text-container.image',
        start: 'top 50%',
        end: 'bottom 25%',
        toggleActions: 'restart reverse restart reverse'
      }
    })

    gsap.from(
      '.landing-page-row.section2 .landing-page-text-container.text .landing-page-text-alt',
      {
        duration: 0.75,
        x: -500,
        opacity: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger:
            '.landing-page-row.section2 .landing-page-text-container.text .landing-page-text-alt',
          start: 'top 65%',
          end: 'bottom 20%',
          toggleActions: 'restart reverse restart reverse'
        }
      }
    )

    gsap.from(
      '.landing-page-row.section2 .landing-page-text-container.text ul li',
      {
        duration: 1,
        y: 500,
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.25,
        scrollTrigger: {
          trigger:
            '.landing-page-row.section2 .landing-page-text-container.text ul li',
          start: 'top 120%',
          end: 'bottom 70%',
          toggleActions: 'restart reverse restart reverse'
        }
      }
    )

    // Section 3
    gsap.from('.landing-page-row.section3 .landing-icon', {
      duration: 1,
      y: 500,
      opacity: 0,
      ease: Power3.easeOut,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.landing-page-row.section3 .landing-icon',
        start: 'top 100%',
        end: 'bottom 60%',
        toggleActions: 'restart reverse restart reverse'
      }
    })

    // Section 4
    gsap.from('.landing-page-row.section4 .landing-page-text-container.image', {
      duration: 0.75,
      left: -500,
      opacity: 0,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger:
          '.landing-page-row.section4 .landing-page-text-container.image',
        start: 'top 80%',
        end: 'bottom 25%',
        toggleActions: 'restart reverse restart reverse'
      }
    })

    gsap.from(
      '.landing-page-row.section4 .landing-page-text-container.text .landing-page-text-alt.header',
      {
        duration: 0.75,
        x: -500,
        opacity: 0,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger:
            '.landing-page-row.section4 .landing-page-text-container.text .landing-page-text-alt.header',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'restart reverse restart reverse'
        }
      }
    )

    gsap.from(
      '.landing-page-row.section4 .landing-page-text-container.text ul li',
      {
        duration: 0.75,
        x: 500,
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.25,
        scrollTrigger: {
          trigger:
            '.landing-page-row.section4 .landing-page-text-container.text ul li',
          start: 'top 80%',
          toggleActions: 'restart reverse restart reverse'
        }
      }
    )

    gsap.from('.landing-page-row.section4 .landing-page-text-alt.contact', {
      duration: 0.75,
      x: -500,
      opacity: 0,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: '.landing-page-row.section4 .landing-page-text-alt.contact',
        start: 'top 90%',
        toggleActions: 'restart reverse restart reverse'
      }
    })
  }, [])

  return (
    <>
      <Row className='landing-page-row section1'>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          className='landing-page-text-container text'
        >
          <div
            style={{ display: 'block' }}
            className='landing-page-1-text-items'
          >
            <h1 className='landing-page-text'>
              Welcome to Matter, a simplfied twitter clone
            </h1>
            <h1 className='landing-page-subtext'>
              Welcome! This is an showcase of a twitter alternative that is
              built on primarly a MERN stack (MongoDB, ExpressJS, React and
              NodeJs).
              <br />
              This showcase includes a Login/Register, Profile and JWT
              Authentication
            </h1>
          </div>
          <div className='button-layout'>
            <button
              className='css-button-gradient--4'
              onClick={() => {
                window.location = '/social'
              }}
            >
              Start Meeting!
            </button>
          </div>
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          className='landing-page-text-container image'
        >
          <img src='logo.png' style={{ maxWidth: '100%' }} />
        </Col>
      </Row>

      
    </>
  )
}

export default LandingPage
