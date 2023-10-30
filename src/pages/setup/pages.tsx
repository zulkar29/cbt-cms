import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import { ChangeEvent, useState } from 'react';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';

const CommonPages: React.FC = () => {
  const handlePageDelete = () => console.log('0');

  return (
    <div>
      <CardBody header="Add More Pages" to="/setup/pages/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-3">#</Column>
          <Column className="col-md-3">Page Name</Column>
          <Column className="col-md-3">Slug</Column>
          <Column className="col-md-3">Action</Column>
        </Row>
        <Row className="row">
          <Column className="col-md-3">1</Column>
          <Column className="col-md-3">About Page</Column>
          <Column className="col-md-3">/about</Column>
          <Column className="col-md-3">
            <CustomIconArea>
              <EditButton editUrl="/" />
              <DeleteButton onClick={handlePageDelete} />
            </CustomIconArea>
          </Column>
        </Row>
      </Display>
    </div>
  );
};

export default CommonPages;
