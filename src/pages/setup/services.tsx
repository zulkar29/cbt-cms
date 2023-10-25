// import React from 'react';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';
import CardBody from '../../components/card-body';

const Services = () => {
  const handleDelete = () => {
    console.log('first');
  };
  return (
    <div>
      <CardBody header="Service" to="/setup/services/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-2">Black Icon</Column>
          <Column className="col-md-2">White Icon</Column>
          <Column className="col-md-2">Title</Column>
          <Column className="col-md-2">Sub Title</Column>
          <Column className="col-md-2">Status</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        <Row className="row">
          <Column className="col-md-2">
            <img src="/assets/icons/service1.webp" alt="service" />
          </Column>
          <Column className="col-md-2">
            <img src="/assets/icons/service1.webp" alt="service" />
          </Column>
          <Column className="col-md-2">Cash on Delivery</Column>
          <Column className="col-md-2">Installation Service</Column>
          <Column className="col-md-2">
            <ToggleButton isChecked />
          </Column>
          <Column className="col-md-2">
            <CustomIconArea>
              <DeleteButton onClick={handleDelete} />
            </CustomIconArea>
          </Column>
        </Row>
      </Display>
    </div>
  );
};

export default Services;
