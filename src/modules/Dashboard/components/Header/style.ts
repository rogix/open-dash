import styled from 'styled-components'

export const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
  margin: 20px 0;
  color: #fff;
  height: 50px;
  border-radius: 8px;

  > div {
    display: flex;
    align-items: center;
  }

  .search-sign-out {
    display: flex;
    align-items: center;

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
`
