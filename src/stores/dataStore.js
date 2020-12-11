import { writable, get } from 'svelte/store'
import { sampleData } from './sampleData'

const { userbase } = window
const DATABASE_NAME = 'prompts'

export const data = writable(null)
export const dataError = writable(null)
export const dataPromise = writable(null)

/*
export function createSampleData() {
  const items = get(data)
  dataPromise.set(
    new Promise((resolve) => {
      items.forEach((item) => {
        remove(item.itemId)
      })
      sampleData.forEach((item) => {
        insert(item)
      })
    })
  )
}
*/

export function connect() {
  dataError.set(null)
  dataPromise.set(
    userbase
      .openDatabase({
        databaseName: DATABASE_NAME,
        changeHandler: (items) => {
          data.set(items)
        },
      })
      .catch((e) => dataError.set(e.message))
  )
}

export function insert(item) {
  dataError.set(null)
  dataPromise.set(
    userbase
      .insertItem({ databaseName: DATABASE_NAME, item })
      .catch((e) => dataError.set(e.message))
  )
}

export function update(itemId, item) {
  dataError.set(null)
  dataPromise.set(
    userbase
      .updateItem({ databaseName: DATABASE_NAME, itemId, item })
      .catch((e) => dataError.set(e.message))
  )
}

export function remove(itemId) {
  dataError.set(null)
  dataPromise.set(
    userbase
      .deleteItem({ databaseName: DATABASE_NAME, itemId })
      .catch((e) => dataError.set(e.message))
  )
}
