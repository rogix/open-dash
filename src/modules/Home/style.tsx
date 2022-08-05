import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`

export const SecondSection = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`
