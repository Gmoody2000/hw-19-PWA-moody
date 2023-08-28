import { saveContent, getContent } from './indexedDB';

const textEditorContent = 'This is the content to be saved.';
saveContent(textEditorContent).then(() => {
  console.log('Content saved to IndexedDB');
});

getContent().then((content) => {
  console.log('Retrieved content from IndexedDB:', content);
});
