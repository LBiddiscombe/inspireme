import { writable } from 'svelte/store'

const { userbase } = window

export const data = writable([])

const changeHandler = (items) => data.set(items)
