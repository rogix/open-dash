import styled from 'styled-components'

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  /* width: 100%; */
  /* padding-bottom: 20px; */

  > input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 10px;
    border: 0;
    color: #fff;

    &::before {
      content: '🔍';
      margin-right: 10px;

      font-size: 1.5rem;
      font-weight: bold;

      color: #fff;

      display: flex;
      align-items: center;
    }
  }

  > span {
    margin-left: 10px;
    background-color: ${props => props.theme.colors.secondary};
    padding: 10px;
    border-radius: 8px;
  }
`

export const InputSearch = styled.input``
