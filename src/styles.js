import styled from 'styled-components'

const mainColor = '#845ec2'
const secondaryColor = '#ffc75f'
const thirdColor = '#f9f871'
const fourthColor = '#ff5e78'

const containerPadding = '20px'

export const Button = styled.button`
  color: #ffffff;
  background-color: ${fourthColor};
  font-size: 19px;
  border: 1px solid ${fourthColor};
  padding: 15px 40px;
  border-radius: 2px;
  margin-top: 2rem;
  cursor: pointer
  button:hover {
    color: ${secondaryColor};
    background-color: #ffffff;
  }
`
export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  box-sizing: border-box;
  background-color: ${mainColor};
  color: ${fourthColor};
  font-family: 'Baloo Chettan 2', cursive;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-align: center;
`

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - ${containerPadding});
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

export const Setup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: calc(90% - 1rem);
  }
  height: auto;
  border-radius: 10px;
  border: solid 1px ${thirdColor};
`

export const DifficultySelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  color: ${secondaryColor};
  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }
  .radio-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
