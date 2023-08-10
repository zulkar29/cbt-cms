import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import { ChangeEvent, useState } from 'react';
import Filter from '../../components/filter';

const StockOutProducts = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="Stock Out Products" to="/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
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
            {[...Array(3).keys()].map((_category, index) => (
              <Row key={index}>
                <Column>
                  <img
                    src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                    alt="product"
                  />
                </Column>
                <Column>
                  Men Shirt Custom Shirts Hot Sale Men Women Polyester Cotton
                  Long Sleeve Casual pro
                </Column>
                <Column>$1,352.81</Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl="/products/edit" />
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

export default StockOutProducts;
