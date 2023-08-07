import Display from '../../components/display';
import CardBody from '../../components/card-body';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';
import { ChangeEvent, useState } from 'react';
import Actions from '../../components/actions';

const SubCategory = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Sub Categories" to="/subcategory/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>Category</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </Row>
          </thead>
          <tbody>
            {[...Array(5).keys()].map((_category, index) => (
              <Row key={index}>
                <Column>Web Themes & Templates</Column>
                <Column>HTML Templates</Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl={`/subcategory/edit/${index}`} />
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

export default SubCategory;
