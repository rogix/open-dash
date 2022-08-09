import styled from 'styled-components'

export const HeaderBox = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  margin: 20px 0;
  color: #fff;
  height: 120px;
  border-radius: 8px;

  > div {
    display: flex;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 20px;
  }

  .search-sign-out {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > button {
      margin-left: 10px;
      background-color: ${props => props.theme.colors.secondary};
      border: none;
      color: #fff;
      padding: 12.5px 30px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: 50px;

    .search-sign-out {
      width: auto;
    }
  }
`
