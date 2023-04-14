import axios from 'axios'
import { GITHUB_TOKEN_API } from './github-configs'

export const HttpClient = axios.create({
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN_API}`
  }
})
