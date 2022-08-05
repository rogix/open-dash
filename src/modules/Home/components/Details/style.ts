import styled from 'styled-components'

export const DetailsBox = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 20px;
  color: #fff;
`
