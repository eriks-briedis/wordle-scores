import type { FunctionalComponent } from 'preact'
import type { Score } from '../models'
import { Attempt } from './attempt';
import styles from './score-item.module.css'

type Props = {
  score: Score
}

export const ScoreItem: FunctionalComponent<Props> = ({ score }) => (
  <li class={styles.item}>
    Wordle {score.id} {score.tries.length}/6
    {score.tries.map((word) => <Attempt word={word} correctWord={score.word} />)}
  </li>
)
