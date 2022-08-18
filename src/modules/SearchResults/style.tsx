import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 960px;
  margin: 50px auto;

  ul {
    width: 100%;
  }
`

export const Card = styled.a`
  width: 100%;
  display: block;
  text-decoration: none;
  color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;

  .card-top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    font-size: 18px;

    > div {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }

    img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
    font-size: 12px;
  }

  .card-bottom--stars {
    display: flex;
    align-items: center;
    margin-left: 10px;

    span {
      margin-left: 5px;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  > h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 1rem;
`
