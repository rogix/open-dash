import styled from 'styled-components'
import ReactLoading from 'react-loading'

type Props = {
  height?: string
  width?: string
  color?: string
  backgroundColor?: string
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height || '100vh'};
  background-color: ${props => props.backgroundColor || 'transparent'};
`

export function Loader({ height, backgroundColor }: Props) {
  return (
    <Container height={height} backgroundColor={backgroundColor}>
      <ReactLoading
        type="bubbles"
        color={backgroundColor === '#131722' ? '#1B2130' : '#131722'}
        height={200}
        width={100}
      />
    </Container>
  )
}
