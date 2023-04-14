import {
  BlogContainer,
  ListPublishContainer,
  PublishContainer,
  PublishSearchContainer
} from './styles'
import {
  TitleL,
  TextLink,
  TextRegularM,
  TitleS,
  TextRegularS,
  TitleM
} from '../../styles/text'
// import { ArrowSquareOut } from 'phosphor-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { BlogCard } from '../../components/BlogCard'
import { useEffect, useState } from 'react'
import { HttpClient } from '../../utils/http-client'
import { User } from './interfaces/user'
import { SearchPosts } from './interfaces/search-posts'
import { GITHUB_REPO, GITHUB_USER_NAME } from '../../utils/github-configs'
import markdownToTxt from 'markdown-to-txt'
import {
  format,
  formatDistanceToNow,
  differenceInHours,
  formatDistance
} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { create } from 'domain'
import { NavLink } from 'react-router-dom'

export function Blog() {
  const [user, setUser] = useState<User | null>(null)
  const [searchPosts, setSearchPosts] = useState<SearchPosts | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    HttpClient.get<User>(
      `https://api.github.com/users/${GITHUB_USER_NAME}`
    ).then(res => {
      setUser(res.data)
    })

    getSearchPosts()
  }, [])

  async function getSearchPosts(text: string = '') {
    const { data } = await HttpClient.get<SearchPosts>(
      `https://api.github.com/search/issues?q=${text}%20repo:${GITHUB_USER_NAME}/${GITHUB_REPO}%20is:issue`
    )
    setSearchPosts(data)
  }

  function handleSearch(text: string) {
    getSearchPosts(text)
    setSearch(text)
  }

  return (
    <>
      {user ? (
        <BlogContainer>
          <BlogCard>
            <img src={`https://github.com/${user.login}.png?size=148`} alt="" />
            <main>
              <header>
                <TitleL>{user?.name}</TitleL>
                <a className="title" href={user.html_url} target="_blank">
                  <TextLink>Github</TextLink>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </header>
              <TextRegularM className="text-detail">{user.bio}</TextRegularM>

              <div className="blog-card-detail-bottom">
                <div className="item-detail">
                  <FontAwesomeIcon icon={faGithub} />
                  <TextRegularM>{user.login}</TextRegularM>
                </div>
                <div className="item-detail">
                  <FontAwesomeIcon icon={faBuilding} />
                  <TextRegularM>{user.company}</TextRegularM>
                </div>
                <div className="item-detail">
                  <FontAwesomeIcon icon={faUserGroup} />
                  <TextRegularM>{user.followers} seguidores</TextRegularM>
                </div>
              </div>
            </main>
          </BlogCard>

          <PublishContainer>
            <PublishSearchContainer>
              <div>
                <TitleS className="title">Publicações</TitleS>
                <TextRegularS className="title-time">
                  {searchPosts?.total_count} publicações
                </TextRegularS>
              </div>
              <input
                type="text"
                placeholder="Buscar conteúdo"
                value={search}
                onChange={e => handleSearch(e.target.value)}
              />
            </PublishSearchContainer>

            <ListPublishContainer>
              {searchPosts?.items?.map(post => {
                let createdAt = new Date(post.created_at as string)

                let dateStr = createdAt.toISOString()
                const publishedDateFormatted = format(
                  createdAt,
                  "d 'de' LLLL 'às' HH:mm'h'",
                  {
                    locale: ptBR
                  }
                )

                const diff = formatDistance(new Date(), createdAt, {
                  locale: ptBR
                })

                return (
                  <NavLink key={post.number} to={`/posts/${post.number}`}>
                    <li>
                      <div>
                        <TitleM className="title">{post.title}</TitleM>
                        <time title={publishedDateFormatted} dateTime={dateStr}>
                          <TextRegularS className="title-time">
                            {/* Há{' '}
                          {`${diffHours} ${diffHours > 1 ? 'horas' : 'hora'}`} */}
                            {diff}
                          </TextRegularS>
                        </time>
                      </div>

                      <TextRegularM className="text-post">
                        {markdownToTxt(post.body as string)}
                      </TextRegularM>
                    </li>
                  </NavLink>
                )
              })}
            </ListPublishContainer>
          </PublishContainer>
        </BlogContainer>
      ) : (
        <div></div>
      )}
    </>
  )
}
