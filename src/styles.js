import styled from 'styled-components'

const mainColor = '#845ec2'
const secondaryColor = '#ffc75f'
const thirdColor = '#f9f871'
const fourthColor = '#ff5e78'

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Card = styled.div`
  min-width: 5rem;
  min-height: 5rem;
  width: 180px;
  height: 180px;
  margin: 10px 10px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  position: relative;
  perspective: 600px;
  pointer-events: ${(props) => (props.uiLocked ? 'none' : 'auto')};
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    border-radius: 10px;
    transform-style: preserve-3d;
    .card-face {
      position: absolute;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
      &.front {
        background: ${secondaryColor};
      }
      &.back {
        transform: rotateY(180deg);
      }
    }
    &.is-flipped {
      transform: rotateY(180deg);
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
    height: 100%;
    object-fit: cover;
  }
`

export const Score = styled.div`
  font-family: 'Baloo Chettan 2', cursive;
  display: flex;
  height: auto;
  font-size: 2rem;
  color: white;
  span {
    text-transform: capitalize;
  }
`
