import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const BlogCategories = () => {
  return (
    <div>
      <CardBody header="All Blogs Categories" to="/blogs/categories/create" />
      <Display>
        <Table>
          <tbody>
            <th>SI No.</th>
            <th>Title</th>
            <th>Status</th>
            <th>Options</th>
          </tbody>
          <tbody>
            <Row>
              <Column>01</Column>
              <Column>Cookware</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>Cookware</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>Cookware</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>Cookware</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>Cookware</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>Cookware</Column>
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

export default BlogCategories;
