import { Chat } from '@/components/chat'
import { nanoid } from 'ai'
import { AI } from './actions'
import styles from './globals.css'

export const maxDuration = 60

export default function Page() {
  const id = nanoid()
  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <div className={styles.pageContainer}>
        <div className={styles.logoPlaceholder}>Logo Placeholder</div>
        <Chat id={id} />
      </div>
    </AI>
  )
}
