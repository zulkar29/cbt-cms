import { useState } from 'react';
import ReactQuill from 'react-quill';

const DescriptionInput = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
    />
  );
};

export default DescriptionInput;
