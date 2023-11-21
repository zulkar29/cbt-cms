import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Pagination from '../../components/pagination';
import { ChangeEvent, useState } from 'react';
import Filter from '../../components/filter';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';

const CouponPage: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Coupon" to="/coupons/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />

        <Row className="row">
          <Column className="col-md-2">#</Column>
          <Column className="col-md-2">Code</Column>
          <Column className="col-md-2">Start Date</Column>
          <Column className="col-md-2">End Date</Column>
          <Column className="col-md-2">Status</Column>
          <Column className="col-md-2">Action</Column>
        </Row>
        {[...Array(3).keys()].map((_coupon, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-2">01</Column>
            <Column className="col-md-2">OFFER50</Column>
            <Column className="col-md-2">10-01-2023</Column>
            <Column className="col-md-2">28-02-2023</Column>
            <Column className="col-md-2">
              <Select>
                <option value="1">Value</option>
              </Select>
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <EditButton editUrl="/" />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
        <Pagination />
      </Display>
    </div>
  );
};

export default CouponPage;
