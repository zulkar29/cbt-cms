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
import { API_ROOT } from '../../constants';

const StockOutProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, totalCount } = useAppSelector(
    (state) => state.product
  );
  const [displayItem, setDisplayItem] = useState(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const totalPage = Math.floor(totalCount / displayItem);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(
      getProducts({ page: pageNumber, limit: displayItem, quantity: 0 })
    );
    return () => {
      dispatch(reset());
    };
  }, [dispatch, pageNumber, displayItem]);

  return (
    <div>
      <CardBody header="Stock Out Products" to="/categories/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-1">#</Column>
          <Column className="col-md-1">Images</Column>
          <Column className="col-md-3">Name</Column>
          <Column className="col-md-1">Stock</Column>
          <Column className="col-md-1">Regular Price</Column>
          <Column className="col-md-1">Discount Price</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-1">Show Home Page</Column>
          <Column className="col-md-2">Action</Column>
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
                  src={`${API_ROOT}/images/product/${product.image}`}
                  alt="brand"
                />
              </Column>
              <Column className="col-md-3">{product.title}</Column>
              <Column className="col-md-1">{product.quantity}</Column>
              <Column className="col-md-1">৳ {product.regular_price}</Column>
              <Column className="col-md-1">৳ {product.discount_price}</Column>
              <Column className="col-md-1">
                <ToggleButton isChecked={product.is_visible} />
              </Column>
              <Column className="col-md-1">
                <ToggleButton isChecked={product.is_homepage} />
              </Column>
              <Column className="col-md-2">
                <CustomIconArea>
                  <ViewButton href="/products" />
                  <EditButton editUrl={`/products/edit/1`} />
                  <DeleteButton onClick={() => console.log('first')} />
                </CustomIconArea>
              </Column>
            </Row>
          ))
        )}
        <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        />
      </Display>
    </div>
  );
};

export default StockOutProducts;
