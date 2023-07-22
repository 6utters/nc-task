export interface NotesSchema {
  notes: Note[]
}

export interface Note {
  id: string
  text: string
  tags: string[]
}