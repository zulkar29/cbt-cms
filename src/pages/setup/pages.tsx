import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Actions from '../../components/actions';
import Filter from '../../components/filter';
import { ChangeEvent, useState } from 'react';

const CommonPages = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Add More Pages" to="/coupon/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>#</th>
              <th>Page Name</th>
              <th>Slug</th>
              <th>Action</th>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>1</Column>
              <Column>About Page</Column>
              <Column>/categories</Column>
              <Column>
                <Actions />
              </Column>
            </Row>
          </tbody>
        </Table>
      </Display>
    </div>
  );
};

export default CommonPages;
