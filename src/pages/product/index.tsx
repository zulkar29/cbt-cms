import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';

const AllProducts: React.FC = () => {
  return (
    <div>
      <CardBody header="Product" to="/categories/create" />
      <Display>
        <Table>
          <thead>
            <Row>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Show Home Page</th>
              <th>Action</th>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column>
                Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton Long
                Sleeve Casual pro
              </Column>
              <Column>$1,352.81</Column>
              <Column>
                <Select />
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

export default AllProducts;
