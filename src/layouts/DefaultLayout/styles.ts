import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 296px;
    object-fit: cover;
  }

  margin-bottom: 4rem;
`

export const LayoutContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 864px;
  margin-top: -5.5rem;
  padding: 0 1.5rem;
`
