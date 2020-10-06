import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Counter.module.scss'
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from './counterSlice'

export function Counter(): JSX.Element {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={(): unknown => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={(): unknown => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e): unknown => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={(): unknown => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={(): unknown => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}
