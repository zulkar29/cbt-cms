import { ChangeEvent, useState } from 'react';
import Actions from '../../components/actions';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import Filter from '../../components/filter';

const Customers: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-3">Name</Column>
          <Column className="col-md-3">Email</Column>
          <Column className="col-md-3">Phone</Column>
          <Column className="col-md-3">Actions</Column>
        </Row>
        {[...Array(3).keys()].map((_customer, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-3">Md Sheikh Talha</Column>
            <Column className="col-md-3">talha.halcyon@gmail.com</Column>
            <Column className="col-md-3">+8801724721383</Column>
            <Column className="col-md-3">
              <Actions editUrl="/orders/edit" />
            </Column>
          </Row>
        ))}
        <Pagination />
      </Display>
    </div>
  );
};

export default Customers;
