import { ReactNode } from 'react'
import { BlogCardContainer } from './styles'

interface BlogCardProps {
  children: ReactNode
}

export function BlogCard({ children }: BlogCardProps) {
  return <BlogCardContainer>{children}</BlogCardContainer>
}
