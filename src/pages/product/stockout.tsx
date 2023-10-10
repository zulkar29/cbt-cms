import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import { ChangeEvent, useEffect, useState } from 'react';
import Filter from '../../components/filter';
import ToggleButton from '../../components/forms/checkbox';
import CustomIconArea from '../../components/custom-icon-area';
import ViewButton from '../../components/button/view';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProducts, reset } from '../../redux/products/product-slice';

const StockOutProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, isError, message } = useAppSelector(
    (state) => state.product
  );
  const [displayItem, setDisplayItem] = useState(10);
  const [page, setPage] = useState<number>(1);

  console.log(page);

  const handlePageClick = (count: { selected: number }) => {
    setPage(count.selected + 1);
  };

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(getProducts({ page: page, limit: displayItem }));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, page, displayItem]);

  return (
    <div>
      <CardBody header="Stock Out Products" to="/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row>
          <th>Images</th>
          <th>Name</th>
          <th>Price</th>
          <th>Status</th>
          <th>Show Home Page</th>
          <th>Action</th>
        </Row>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          products.map((product, index) => (
            <Row key={index} className="row">
              <Column className="col-md-1">
                {product.id}
                {/* <input
                  checked={selectedProducts.includes(product.id as number)}
                  onClick={() => handleSelectedProducts(product.id as number)}
                  type="checkbox"
                  name=""
                  id=""
                /> */}
              </Column>
              <Column className="col-md-1">
                <img
                  src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1634135320H408d7d7e37b4437297de600584c1af1fL.jpg"
                  alt="product"
                />
              </Column>
              <Column className="col-md-3">{product.name}</Column>
              <Column className="col-md-1">0</Column>
              <Column className="col-md-1">৳ 3000.00</Column>
              <Column className="col-md-1">৳ 2800.00</Column>
              <Column className="col-md-1">
                <ToggleButton isChecked />
              </Column>
              <Column className="col-md-1">
                <ToggleButton isChecked />
              </Column>
              <Column className="col-md-2">
                <CustomIconArea>
                  <ViewButton href="/products" />
                  <EditButton editUrl={`/products/edit/1`} />
                  <DeleteButton
                  // onClick={() => handleDeleteVideo(video.id as number)}
                  />
                </CustomIconArea>
              </Column>
            </Row>
          ))
        )}
        <Pagination handlePageClick={handlePageClick} totalPage={3} />
      </Display>
    </div>
  );
};

export default StockOutProducts;
