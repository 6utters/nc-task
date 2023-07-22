import { FC, ReactNode, useEffect, useState } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../../../../db'
import { notesActions } from '@/entities/Note'

interface DBProviderProps {
  children: ReactNode
}

export const DBProvider: FC<DBProviderProps> = (props) => {
  const { children } = props
  const dispatch = useAppDispatch()
  const [initial, setInitial] = useState(true)
  const notes = useLiveQuery(
    () => db.notes.toArray()
  )

  useEffect(() => {
    if (notes && initial) {
      if (notes.length == 0) {
        dispatch(notesActions.setNotes([{ id: '1', text: '', tags: [] }]))
      } else {
        dispatch(notesActions.setNotes(notes))
      }
      setInitial(false)
    }
  }, [dispatch, notes])

  return <>{children}</>
}
