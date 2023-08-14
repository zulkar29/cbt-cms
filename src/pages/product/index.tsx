import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import Filter from '../../components/filter';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getProducts, reset } from '../../redux/products/product-slice';

const AllProducts: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [displayItem, setDisplayItem] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const { products, isLoading, isError, message } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(getProducts({ page: page, limit: displayItem }));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, page, displayItem]);
  console.log(products);
  console.log(page);
  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const handlePageClick = (count: { selected: number }) => {
    setPage(count.selected);
  };

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div>
      <CardBody header="Product" to="/products/create" />
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
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              products.map((product, index) => (
                <Row key={index}>
                  <Column>
                    <img
                      src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                      alt="product"
                    />
                  </Column>
                  <Column>{product.name}</Column>
                  <Column>$1,352.81</Column>
                  <Column>
                    <Select />
                  </Column>
                  <Column>
                    <Select />
                  </Column>
                  <Column>
                    <Actions editUrl="/products/edit/1" />
                  </Column>
                </Row>
              ))
            )}
          </tbody>
        </Table>
        <Pagination handlePageClick={handlePageClick} />
      </Display>
    </div>
  );
};

export default AllProducts;
