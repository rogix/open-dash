import { SearchBox } from '@/components/Search/style'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  right: 0;

  @media (min-width: 1280px) {
    width: calc(100% - 240px);
  }
`

export const SecondSection = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ThirdSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`

export const Search = styled(SearchBox)`
  color: #fff;

  button {
    background-color: #18a2b4;
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    height: 40px;
  }
`
