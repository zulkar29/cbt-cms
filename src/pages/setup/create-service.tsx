import React from 'react';
import Display from '../../components/display';
import FileInput from '../../components/forms/file-input';
import Input from '../../components/forms/text-input';
import { Button } from '../../components/button';
import CardBody from '../../components/card-body';
import Column from '../../components/table/column';

const CreateService = () => {
  return (
    <div>
      <CardBody header="Create Service" to="/setup/services" />
      <form>
        <Display>
          <div className="row">
            <Column className="col-md-6">
              <Display>
                <Input
                  htmlFor="title"
                  label="Title"
                  placeholder="Enter Title"
                  required
                />
                <Input
                  htmlFor="s-title"
                  label="Sub Title"
                  placeholder="Enter Sub Title"
                  required
                />
              </Display>
            </Column>
            <Column className="col-md-6">
              <Display>
                <FileInput label="Black Icon" required />
                <FileInput label="White Icon" required />
              </Display>
            </Column>
          </div>

          <Button>Create</Button>
        </Display>
      </form>
    </div>
  );
};

export default CreateService;
