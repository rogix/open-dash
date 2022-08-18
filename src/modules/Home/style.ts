import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.primary};
  color: #fff;

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;

    h2 {
      font-size: 2rem;
    }

    button {
      background-color: #0d8bff;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 10px 30px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #0b569b;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  text-align: center;
`

export const Search = styled.div`
  display: flex;

  select {
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
  }

  input {
    border: 0;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 10px 30px;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s;
    width: 100%;
    margin-right: 10px;
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }
`
