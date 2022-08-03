import styled from 'styled-components'

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 100%;
  color: #8d9098;
  background-color: ${props => props.theme.colors.secondary};

  > header {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  > div {
    width: 100%;
  }
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 50px;
  padding: 0 20px;
  cursor: pointer;
  width: 70%;
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
