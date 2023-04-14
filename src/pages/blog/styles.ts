import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;

  .blog-card-detail-bottom {
    margin-top: 2rem;
  }
`

// export const BlogCard = styled.div`
//   background-color: ${props => props.theme['base-profile']};
//   height: 13.25rem;
//   border-radius: 10px;
//   padding: 2rem 2.5rem;
//   display: flex;
//   gap: 2rem;

//   > img {
//     border-radius: 8px;
//   }

//   > main {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     > header {
//       display: flex;
//       justify-content: space-between;

//       .title {
//         color: ${props => props.theme['brand-blue']};
//         text-transform: uppercase;
//         display: flex;
//         gap: 0.5rem;
//         align-items: center;
//         text-decoration: none;

//         svg {
//           height: 0.703125rem;
//           width: 0.703125rem;
//         }
//       }
//     }

//     .text-detail {
//       margin-top: 0.5rem;
//     }

//     .detail-bottom {
//       margin-top: 2rem;
//       display: flex;
//       gap: 1.5rem;
//       align-items: center;

//       .item-detail {
//         display: flex;
//         gap: 0.5rem;
//         align-items: center;

//         svg {
//           color: ${props => props.theme['base-label']};
//           height: 18px;
//           width: 18px;
//         }
//       }
//     }
//   }
// `

export const PublishContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PublishSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    .title {
      color: ${props => props.theme['base-subtitle']};
    }

    .title-time {
      color: ${props => props.theme['base-span']};
    }
  }

  input {
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    padding: 0.75rem 1rem;
    color: ${props => props.theme['base-text']};
    border-radius: 6px;

    ::placeholder {
      /* Most modern browsers support this now. */
      color: ${props => props.theme['base-label']};
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0 1px ${props => props.theme['brand-blue']};
    }
  }
`

export const ListPublishContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  list-style-type: none;

  a {
    text-decoration: none;
  }

  li {
    padding: 2rem;
    border-radius: 10px;
    height: 17.5rem;
    background: ${props => props.theme['base-post']};
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    cursor: pointer;

    div:first-child {
      display: flex;
      gap: 0.5rem;

      .title {
        flex: 1;
        color: ${props => props.theme['base-title']};
      }

      .title-time {
        margin-top: 5px;
        white-space: nowrap;
        color: ${props => props.theme['base-span']};
      }
    }

    .text-post {
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      color: ${props => props.theme['base-text']};
    }

    :hover {
      box-shadow: 0 0 0 2px ${props => props.theme['base-label']};
    }
  }
`
