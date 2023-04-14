import styled from 'styled-components'

export const PostContainer = styled.div`
  .title-card-posts {
    margin-top: 1.25rem;
  }

  .blog-card-detail-bottom {
    margin-top: 0.5rem;
  }

  article {
    padding: 2.5rem 2rem;
    /* font-size: 16px; */
    font-family: 'Nunito', sans-serif;
    line-height: 1.5;
    word-wrap: break-word;
    font-weight: 400;

    hyphens: 'auto';

    img {
      max-width: 100%;
      box-sizing: content-box;
      background-color: #0d1117;
    }

    ul {
      list-style-position: 'inside';
    }

    a {
      color: ${props => props.theme['brand-blue']};
    }

    ul,
    ol {
      padding-left: 2rem;
    }

    h1 {
      font-size: 2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: var(--base-text-weight-semibold, 600);
      line-height: 1.25;
      padding-bottom: 0.3em;
      border-bottom: 1px solid ${props => props.theme['base-border']};
    }

    p,
    blockquote,
    ul,
    ol,
    dl,
    table,
    pre,
    details {
      margin-top: 0;
      margin-bottom: 16px;
    }

    #code {
      background: ${props => props.theme['base-post']} !important;
    }

    code,
    tt {
      padding: 0.2em 0.4em;
      margin: 0;
      font-size: 85%;
      white-space: break-spaces;
      background-color: ${props => props.theme['base-post']};
      border-radius: 6px;
    }
  }
`
