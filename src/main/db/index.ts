import { initAuthDB } from './authDb'

export const databases = {
  auth: initAuthDB(),
}