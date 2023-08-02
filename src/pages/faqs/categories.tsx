import { useState, ChangeEvent } from 'react';
import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Filter from '../../components/filter';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const FaqCategories = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Faq Categories" to="/faq/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <tbody>
            <Row>
              <th>Name</th>
              <th>Text</th>
              <th>Status</th>
              <th>Options</th>
            </Row>
          </tbody>
          <tbody>
            <Row>
              <Column>Offer Information !</Column>
              <Column>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born
              </Column>
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

export default FaqCategories;
