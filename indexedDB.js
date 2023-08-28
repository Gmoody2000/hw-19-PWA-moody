import { openDB } from 'idb';

const DB_NAME = 'text-editor-db';
const DB_VERSION = 1;
const OBJECT_STORE_NAME = 'editor-content';

async function openDatabase() {
  return await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
        db.createObjectStore(OBJECT_STORE_NAME);
      }
    },
  });
}

async function saveContent(content) {
  const db = await openDatabase();
  const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
  const store = tx.objectStore(OBJECT_STORE_NAME);
  await store.put(content, 'current-content');
}

async function getContent() {
  const db = await openDatabase();
  const tx = db.transaction(OBJECT_STORE_NAME, 'readonly');
  const store = tx.objectStore(OBJECT_STORE_NAME);
  return await store.get('current-content');
}

export { saveContent, getContent };
