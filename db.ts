import Dexie, { Table } from 'dexie'
import { Note } from './src/entities/Note'

export class MySubClassedDexie extends Dexie {
  notes!: Table<Note>

  constructor() {
    super('notes_app_db')
    this.version(1).stores({
      notes: '++id, text, tags'
    })
  }
}

export const db = new MySubClassedDexie()