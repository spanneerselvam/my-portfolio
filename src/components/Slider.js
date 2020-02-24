/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

/**
 * @function Slider
 *
 * - For reference, the slides variable always refers to props.slides. _slides, will always
 *   refer to the internal variable set in state.
 *
 *  @todo
 * - Handle resizing.
 * - Instead of recreating the css event listener each time, perhaps it can be set once somehow.
 */
const Slider = props => {
  const getWidth = () => window.innerWidth
  const contentRef = useRef()

  const { slides } = props

  const [state, setState] = useState({
    activeIndex: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [slides[slides.length - 1], ...slides, slides[0]]
  })

  const { activeIndex, translate, _slides, transition } = state

  /** smoothTransition */
  const smoothTransition = () => {
    if (activeIndex === 0 && translate > getWidth())
      return setState({ ...state, transition: 0, translate: getWidth() })

    if (activeIndex === slides.length - 1 && translate === 0) {
      return setState({
        ...state,
        transition: 0,
        translate: getWidth() * slides.length
      })
    }
  }

  /** Listen for CSS transform transition. */
  useEffect(() => {
    contentRef.current.addEventListener('transitionend', smoothTransition)
    return () =>
      contentRef.current.removeEventListener('transitionend', smoothTransition)
  }, [activeIndex])

  /** Reset transition once we have positioned the translate to it's proper value. */
  useEffect(() => {
    if (transition === 0) {
      setState({ ...state, transition: 0.45 })
    }
  }, [transition])

  /** nextSlide */
  const nextSlide = () => {
    const next = (activeIndex + 2) * getWidth()

    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        activeIndex: 0,
        translate: next
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: next
    })
  }

  /** prevSlide */
  const prevSlide = () => {
    const prev = activeIndex * getWidth()

    if (activeIndex === 0) {
      return setState({
        ...state,
        activeIndex: slides.length - 1,
        translate: prev
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: prev
    })
  }

  return (
    <div css={SliderCSS}>
      <SliderContent
        ref={contentRef}
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide key={_slide + i} content={_slide} images />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider
