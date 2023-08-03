import { ChangeEvent, useState } from 'react';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';
import Actions from '../../components/actions';

function Categories() {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Categories" to="/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>Image</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </Row>
          </thead>
          <tbody>
            {[...Array(5).keys()].map((_category, index) => (
              <Row key={index}>
                <Column>
                  <img
                    src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
                    alt="brand"
                  />
                </Column>
                <Column>Web Themes & Templates</Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions />
                </Column>
              </Row>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
}

export default Categories;
