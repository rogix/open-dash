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

export const Box = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 20px;
  color: #fff;
  padding: 20px;
  min-height: 200px;
  min-height: 400px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.secondary};

  > h2 {
    padding-bottom: 20px;
  }
`

export const Item = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style-type: none;
  gap: 20px;
  width: 100%;

  > li {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;

    > div {
      display: flex;
    }

    a {
      color: #fff;
      padding-left: 10px;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
    }
  }
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  .name {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.blue};
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    padding-bottom: 10px;

    > svg {
      margin-right: 10px;
    }
  }

  .description {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    padding-bottom: 10px;
  }

  .numbers {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
    }
  }

  .stars {
    display: flex;
    font-size: 16px;
    margin-right: 30px;

    > svg {
      color: yellow;
      margin-right: 10px;
    }
  }

  .forks {
    display: flex;
    font-size: 16px;

    > svg {
      color: #277194;
      margin-right: 10px;
    }
  }

  .stars-today {
    background-color: ${props => props.theme.colors.secondary};
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: bold;
  }
`

export const LangItem = styled.div`
  display: flex;
`

export const ItemColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  margin-right: 10px;
  display: ${props => (props.color ? 'flex' : 'none')};
`
