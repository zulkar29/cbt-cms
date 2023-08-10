import { ChangeEvent, useState } from 'react';
import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import Filter from '../../components/filter';

const Reviews = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Reviews" to="/products/reviews#" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>Name</th>
              <th>Products</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </Row>
          </thead>
          <tbody>
            {[...Array(6).keys()].map((_review, index) => (
              <Row key={index}>
                <Column>Alex Smith</Column>
                <Column>
                  New French Elegant White Bubble Sleeve Party Dress Casual
                  A-Line Dresses, Long Sleeve Dresses
                </Column>
                <Column>3.5</Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl="/review/details" />
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

export default Reviews;
