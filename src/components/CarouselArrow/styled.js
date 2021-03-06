import styled from 'styled-components'

import { styleguide } from '../../constants'

const { colors } = styleguide

const CarouselButton = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 3rem;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px rgba(125, 125, 125, 0.15);
  top: unset;
  bottom: -6.2rem;
  z-index: 5;
  &:hover {
    * {
      fill: ${({ color }) => color};
    }
  }
  &:before,
  &:after {
    display: none;
  }
  &.slick-next {
    left: 40%;
  }
  &.slick-prev {
    left: unset;
    right: 40%;
  }
`

export {
  CarouselButton
}
