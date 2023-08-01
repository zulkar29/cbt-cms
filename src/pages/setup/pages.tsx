import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Actions from '../../components/actions';

const CommonPages = () => {
  return (
    <div>
      <CardBody header="Add More Pages" to="/coupon/create" />
      <Display>
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
