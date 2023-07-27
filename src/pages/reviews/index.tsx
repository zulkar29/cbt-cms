import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Pagination from '../../components/pagination';
import Select from '../../components/select';
import Table from '../../components/table';
import Column from '../../components/table/column';
import Row from '../../components/table/row';

const Reviews = () => {
  return (
    <div>
      <CardBody header="Reviews" to="/products/reviews#" />
      <Display>
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
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>Alex Smith</Column>
              <Column>
                New French Elegant White Bubble Sleeve Party Dress Casual A-Line
                Dresses, Long Sleeve Dresses
              </Column>
              <Column>3.5</Column>
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

export default Reviews;
