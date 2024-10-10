'use client';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const QuillEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ align: ['right', 'center', 'justify'] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ],
  };

  return (
    <section>
      <ReactQuill
        modules={modules}
        value={editorHtml}
        onChange={handleChange}
        placeholder="Enter page content"
      />
      <button type="button" onClick={() => console.log(editorHtml)}>
        Check
      </button>
    </section>
  );
};
