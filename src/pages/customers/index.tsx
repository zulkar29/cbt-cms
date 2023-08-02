import Actions from '../../components/actions';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const Customers = () => {
  return (
    <div>
      <Display>
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
