import Carousel from "react-spring-3d-carousel"
import { useState, useEffect } from "react"
import { config } from "react-spring"
import styled from "styled-components"


const MainCont = styled.div`
   @media (max-width: 800px) {
      transform: scale(0.65);
  }
  height: 500px;
  width: 800px;


`


export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [offsetRadius, setOffsetRadius] = useState(2)
  const [showArrows, setShowArrows] = useState(false)
  const [goToSlide, setGoToSlide] = useState(null)
  const [cards] = useState(table)

  useEffect(() => {
    setOffsetRadius(props.offset)
    setShowArrows(props.showArrows)
  }, [props.offset, props.showArrows])

  return (
    <MainCont
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </MainCont>
  )
}
