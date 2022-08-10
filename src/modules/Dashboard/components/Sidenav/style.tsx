import styled from 'styled-components'

export const NavSection = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 100%;
  min-height: 100vh;
  color: #8d9098;
  background-color: ${props => props.theme.colors.secondary};
  position: fixed;

  > header {
    padding-top: 40px;
    padding-bottom: 20px;
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
    width: 70%;
    display: flex;
    align-items: center;

    span {
      background-color: #007aff;
      color: #ffffff;
      padding: 10px;
      font-size: 16px;
      border-radius: 50%;
      min-width: 10px;
      min-height: 10px;
      display: inline-flex;
      margin-right: 10px;
    }

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }

  > div {
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: flex;
  }
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  width: 80%;
  margin: 20px auto;
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;

  > svg {
    margin-right: 10px;
  }

  > a {
    color: #8d9098;
    text-decoration: none;
    font-weight: 600;
  }

  &:hover {
    background-color: #007aff;

    > svg {
      color: white;
    }

    > a {
      color: white;
      text-decoration: none;
    }
  }
`
