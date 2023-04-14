import styled from 'styled-components'

const BaseTitle = styled.div`
  font-family: 'Nunito', sans-serif;
  line-height: 160%;
  font-weight: bold;
  color: ${props => props.theme['base-text']};
`

export const TitleL = styled(BaseTitle)`
  font-size: 1.5rem;
  line-height: 130%;
`

export const TitleM = styled(BaseTitle)`
  font-size: 1.25rem;
`

export const TitleS = styled(BaseTitle)`
  font-size: 1.125rem;
`

const BaseText = styled.div`
  font-family: 'Nunito', sans-serif;
  line-height: 160%;
`

export const TextRegularM = styled(BaseText)`
  font-size: 1rem;
`

export const TextRegularS = styled(BaseText)`
  font-size: 0.875rem;
`

export const TextLink = styled(BaseText)`
  font-size: 0.75rem;
  font-weight: bold;
`
