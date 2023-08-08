import ReactQuill from 'react-quill';
import './index.scss';

interface IProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DescriptionInput: React.FC<IProps> = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { align: '' },
        { align: 'center' },
        { align: 'right' },
        { align: 'justify' },
      ],
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
    'align',
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
