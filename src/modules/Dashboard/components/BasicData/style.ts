import styled from 'styled-components'

export const DataSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
  border-radius: 8px;

  > div {
    flex: 1;
    padding: 1.5rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const DataSectionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;

  > div {
    padding-bottom: 20px;
  }

  span {
    padding-left: 10px;
    color: gray;
  }

  &:not(:last-child) {
    &:after {
      content: '';
      height: 70%;
      width: 1px;

      background-color: rgba(255, 255, 255, 0.05);
      right: 0;
      top: 15%;

      position: absolute;
    }
  }

  &:nth-child(1) {
    svg {
      color: blueviolet;
    }
  }

  &:nth-child(2) {
    svg {
      color: gray;
    }
  }

  &:nth-child(3) {
    svg {
      color: yellow;
    }
  }

  &:nth-child(4) {
    svg {
      color: springgreen;
    }
  }
`
