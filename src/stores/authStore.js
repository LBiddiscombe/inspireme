import { writable } from 'svelte/store'

const { userbase } = window

export const user = writable(null)
export const authError = writable(null)
export const authPromise = writable(null)

authPromise.set(
  userbase
    .init({ appId: '20d824fd-306e-4769-adac-076efe51d2bf' })
    .then(({ user: u }) => user.set(u))
    .catch((e) => authError.set(e.message))
)

export function signUp(username, password) {
  authError.set(null)
  authPromise.set(
    userbase
      .signUp({ username, password })
      .then((u) => user.set(u))
      .catch((e) => authError.set(e.message))
  )
}

export function signIn(username, password) {
  authError.set(null)
  authPromise.set(
    userbase
      .signIn({ username, password })
      .then((u) => user.set(u))
      .catch((e) => authError.set(e.message))
  )
}

export function signOut() {
  authError.set(null)
  authPromise.set(
    userbase
      .signOut()
      .then((u) => user.set(null))
      .catch((e) => authError.set(e.message))
  )
}
