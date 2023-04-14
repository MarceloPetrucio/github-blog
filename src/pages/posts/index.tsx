import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BlogCard } from '../../components/BlogCard'
import { TextLink, TextRegularM, TitleL } from '../../styles/text'
import { PostContainer } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark as dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HttpClient } from '../../utils/http-client'
import { Post } from './interface/post'
import { GITHUB_REPO, GITHUB_USER_NAME } from '../../utils/github-configs'
import { format, formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

export function Posts() {
  const { postId } = useParams()
  const [post, setPost] = useState<Post>({})

  //api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1

  https: useEffect(() => {
    HttpClient.get<Post>(
      `https://api.github.com/repos/${GITHUB_USER_NAME}/${GITHUB_REPO}/issues/${postId}`
    ).then(res => {
      setPost(res.data)
    })
  }, [])

  let createdAt = post.created_at
    ? new Date(post.created_at as string)
    : new Date()

  let dateStr = createdAt.toISOString()
  let publishedDateFormatted = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  let createdAtFormated = formatDistance(new Date(), createdAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <PostContainer>
      <BlogCard>
        <main>
          <header>
            <NavLink className="title" to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              <TextLink>Voltar</TextLink>
            </NavLink>

            <a className="title" href={post.html_url} target="_blank">
              <TextLink>Github</TextLink>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <TitleL className="title-card-posts">{post.title}</TitleL>

          <div className="blog-card-detail-bottom">
            <div className="item-detail">
              <FontAwesomeIcon icon={faGithub} />
              <TextRegularM>{post.user?.login}</TextRegularM>
            </div>
            <div className="item-detail">
              <FontAwesomeIcon icon={faCalendarDay} />
              <time title={publishedDateFormatted} dateTime={dateStr}>
                <TextRegularM>{createdAtFormated}</TextRegularM>
              </time>
            </div>
            <div className="item-detail">
              <FontAwesomeIcon icon={faComment} />
              <TextRegularM>{`${post.comments} ${
                (post.comments ?? 0) > 1 ? 'cometários' : 'cometário'
              }`}</TextRegularM>
            </div>
          </div>
        </main>
      </BlogCard>

      <article>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={post?.body ?? ''}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  id="code"
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </article>
    </PostContainer>
  )
}
