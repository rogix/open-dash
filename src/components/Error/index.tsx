import Image from 'next/image'
import pet from './../../../public/pet.png'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  color: white;
`

export function Error() {
  return (
    <Container>
      <h2>Ops!</h2>
      <Image src={pet} alt="error" />
    </Container>
  )
}
