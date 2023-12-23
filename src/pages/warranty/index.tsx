import React from 'react';
import Display from '../../components/display';
import ToggleButton from '../../components/forms/checkbox';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import ViewButton from '../../components/button/view';

const Warranty = () => {
  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-2">Order No</Column>
          <Column className="col-md-2">Product</Column>
          <Column className="col-md-2">Price</Column>
          <Column className="col-md-2">Approval</Column>
          <Column className="col-md-2">Refund Status</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        {/* TODO:  */}
        <Row className="row">
          <Column className="col-md-2">GHA-12</Column>
          <Column className="col-md-2">Product Title</Column>
          <Column className="col-md-2">1100</Column>
          <Column className="col-md-2">
            <ToggleButton isChecked onClick={() => {}} />
          </Column>
          <Column className="col-md-2">
            <ToggleButton />
          </Column>
          <Column className="col-md-2">
            <CustomIconArea>
              <ViewButton href={`/warranty/${1}`} />
            </CustomIconArea>
          </Column>
        </Row>
      </Display>
    </div>
  );
};

export default Warranty;
