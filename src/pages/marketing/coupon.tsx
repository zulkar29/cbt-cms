import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Pagination from '../../components/pagination';
import Actions from '../../components/actions';
import { ChangeEvent, useState } from 'react';
import Filter from '../../components/filter';

const CouponPage = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Coupon" to="/coupon/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>#</th>
              <th>Code</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </Row>
          </thead>
          <tbody>
            {[...Array(3).keys()].map((_coupon, index) => (
              <Row key={index}>
                <Column>01</Column>
                <Column>OFFER50</Column>
                <Column>10-01-2023</Column>
                <Column>28-02-2023</Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl="/coupon/edit" />
                </Column>
              </Row>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
};

export default CouponPage;
