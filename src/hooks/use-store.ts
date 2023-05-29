import { reactive } from 'vue'

export interface Store {
  theme: {
    color: string
  }
}

const state = reactive<Store>({
  theme: {
    color: '#301134',
  },
})
const store: Store = {
  get theme() {
    return state.theme
  },
  set theme(theme: Store['theme']) {
    state.theme = theme
  },
}

export function useStore() {
  return store
}
