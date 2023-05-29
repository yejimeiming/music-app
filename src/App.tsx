import {
  defineComponent,
  watch,
} from 'vue'
import {
  MButton,
} from 'shuimo-ui'
import { useStore } from '@/hooks/use-store'

export default defineComponent({
  setup(props, ctx) {
    const store = useStore()

    return () => (
      <div class='app-main'>
        <MButton>按钮</MButton>
      </div>
    )
  },
})
