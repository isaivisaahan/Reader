import Dexie, { type Table } from 'dexie';

export type Book = { id: string; title: string; fileName: string; size: number; addedAt: number; file: Blob; pageCount?: number; lastPage: number; progress: number; lastOpened?: number; coverColor: string };
export type Bookmark = { id: string; bookId: string; page: number; label: string; createdAt: number };
export type Note = { id: string; bookId: string; page: number; text: string; note: string; color: string; createdAt: number };

class FolioDB extends Dexie {
  books!: Table<Book, string>;
  bookmarks!: Table<Bookmark, string>;
  notes!: Table<Note, string>;
  constructor() {
    super('folio-reader');
    this.version(1).stores({ books: 'id, title, addedAt, lastOpened', bookmarks: 'id, bookId, page, createdAt', notes: 'id, bookId, page, createdAt' });
  }
}
export const db = new FolioDB();
export const makeId = () => globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
