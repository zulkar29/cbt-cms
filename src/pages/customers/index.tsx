import { ChangeEvent, useState } from 'react';
import Actions from '../../components/actions';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import Filter from '../../components/filter';

const Customers = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <Row>
              <Column>Md Sheikh Talha</Column>
              <Column>talha.halcyon@gmail.com</Column>
              <Column>+8801724721383</Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Md Sheikh Talha</Column>
              <Column>talha.halcyon@gmail.com</Column>
              <Column>+8801724721383</Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Md Sheikh Talha</Column>
              <Column>talha.halcyon@gmail.com</Column>
              <Column>+8801724721383</Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Md Sheikh Talha</Column>
              <Column>talha.halcyon@gmail.com</Column>
              <Column>+8801724721383</Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Md Sheikh Talha</Column>
              <Column>talha.halcyon@gmail.com</Column>
              <Column>+8801724721383</Column>
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

export default Customers;
