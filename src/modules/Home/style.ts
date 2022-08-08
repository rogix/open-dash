import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  background: ${props => props.theme.colors.primary};

  > div {
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    h2 {
      font-size: 2rem;
      text-align: left;
      padding-bottom: 50px;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      background-color: #0d8bff;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 20px 30px;
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

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`
