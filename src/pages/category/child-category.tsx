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

const ChildCategory = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Child Category" to="/childcategory/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <Row>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Men Clothing</Column>
              <Column>Outerwear & Jackets</Column>
              <Column>Shirt</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
};

export default ChildCategory;
