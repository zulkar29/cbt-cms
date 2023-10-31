import React from 'react';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import { Button } from '../../components/button';
import './csv.scss';
import { BsDownload } from 'react-icons/bs';

const Csv: React.FC = () => {
  return (
    <div className="csv-area">
      <Display>
        <div className="download">
          <BsDownload title="Export Csv" />
        </div>
        <h6>Step 1:</h6>
        <p>1. Download the skeleton file and fill it with proper data.</p>
        <p>
          2. You can download the example file to understand how the data must
          be filled.
        </p>
        <p>
          3. Once you have downloaded and filled the skeleton file, upload it in
          the form below and submit.
        </p>
        <p className="last">
          4. After uploading products you need to edit them and set product's
          images and choices.
        </p>
        <Button>Download Demo</Button>
      </Display>
      <Display>
        <form>
          <FileInput />
          <Button type="submit">Upload CSV</Button>
        </form>
      </Display>
    </div>
  );
};

export default Csv;
