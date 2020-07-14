import React from 'react'
import styled from 'styled-components'
import { useFavourites } from '../state'

const Heart = ({ cityId }: { cityId: number }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites()
  const favourite = favourites.includes(cityId)
  const toggleFavourite = () =>
    !favourite ? addFavourite(cityId) : removeFavourite(cityId)

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      favourite={favourite}
      onClick={toggleFavourite}
    >
      <path d="M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z" />
    </SVG>
  )
}

export default Heart

const SVG = styled.svg<{ favourite: boolean }>`
  margin-top: 2rem;
  width: 30px;
  height: 30px;
  fill: ${(props) => (props.favourite ? `#d4415e` : `none`)};
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 32px;
  cursor: pointer;
`