import styled from 'styled-components'

export const IntroductionBox = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 20px;
  color: #fff;
  padding: 20px;
  min-height: 200px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.secondary};

  > h2 {
    padding-bottom: 20px;
  }
`
