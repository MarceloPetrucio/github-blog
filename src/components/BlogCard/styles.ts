import styled from 'styled-components'

export const BlogCardContainer = styled.div`
  background-color: ${props => props.theme['base-profile']};
  /* height: 13.25rem; */
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  > img {
    border-radius: 8px;
  }

  > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > header {
      display: flex;
      justify-content: space-between;

      .title {
        color: ${props => props.theme['brand-blue']};
        text-transform: uppercase;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        text-decoration: none;
      }

      svg {
        height: 0.703125rem;
        width: 0.703125rem;
      }
    }

    .text-detail {
      margin-top: 0.5rem;
    }

    .blog-card-detail-bottom {
      display: flex;
      gap: 1.5rem;
      align-items: center;

      .item-detail {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        svg {
          color: ${props => props.theme['base-label']};
          height: 18px;
          width: 18px;
        }
      }
    }
  }
`
