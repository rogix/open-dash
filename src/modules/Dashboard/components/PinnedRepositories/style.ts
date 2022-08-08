import styled from 'styled-components'

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
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
  gap: 20px;
  width: 100%;

  > li {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding: 20px;

    > div {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
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
