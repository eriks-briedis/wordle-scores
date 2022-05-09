import { FunctionalComponent } from 'preact'
import styles from './attempt.module.css'

interface Props {
  word: string
  correctWord: string
}

export const Attempt: FunctionalComponent<Props> = ({ word, correctWord }: Props) => {
  const empty = '⬛'
  const partial = '🟨'
  const correct = '🟩'

  const letters = word.split('')
  const correctLetters = correctWord.split('')

  // NOTE: we have a full word match, no need to continue
  if (word === correctWord) {
    return <div class={styles.attempt}>{letters.map(() => correct)}</div>
  }

  const pattern = letters.map((letter, i) => {
    // NOTE: wrong letter
    if (!correctLetters.includes(letter)) {
      return empty
    }

    // NOTE: correct letter and correct position
    if (letter === correctLetters[i]) {
      return correct
    }

    // NOTE: correct letter but wrong position
    return partial
  })

  return <div class={styles.attempt}>{pattern}</div>
}
