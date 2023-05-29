import {
  createApp,
  watch,
} from 'vue'
import { useStore } from '@/hooks/use-store'
import { syncThemeToCssVariable } from '@/utils/theme'
import App from '@/App'

import 'shuimo-ui/dist/style.css'
import '@/styles/normalize.css'
import '@/styles/main.scss'

const store = useStore()
watch(
  () => store.theme,
  () => {
    syncThemeToCssVariable(store.theme)
  },
  { immediate: true },
)

createApp(App)
  .mount('#app')
