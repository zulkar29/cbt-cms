import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import Filter from '../../components/filter';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getProducts, reset } from '../../redux/products/product-slice';
import ToggleButton from '../../components/forms/checkbox';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';
import ViewButton from '../../components/button/view';
import Overflow from '../../components/overflow';
import './index.scss';
import { useAppDispatch } from '../../redux/hooks';

const AllProducts: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const [displayItem, setDisplayItem] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  console.log(page);

  const { products, isLoading, isError, message } = useSelector(
    (state: RootState) => state.product
  );
  console.log(products);

  useEffect(() => {
    dispatch(getProducts({ page: page, limit: displayItem }));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, page, displayItem]);

  const handleAllSelectedProducts = (e: ChangeEvent<HTMLInputElement>) => {
    const productIds = products.map((product) => Number(product.id));
    if (e.target.checked) {
      setSelectedProducts(productIds);
    } else {
      setSelectedProducts([]);
    }
  };
  const handleSelectedProducts = (productsId: number) => {
    const selectedProductsSet = new Set(selectedProducts);

    if (selectedProductsSet.has(productsId)) {
      selectedProductsSet.delete(productsId);
    } else {
      selectedProductsSet.add(productsId);
    }

    setSelectedProducts(Array.from(selectedProductsSet));
  };

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const handlePageClick = (count: { selected: number }) => {
    setPage(count.selected);
  };

  return (
    <div>
      <CardBody header="Product" to="/products/create" />
      <Display>
        <div className="row filter-action">
          <div className="title">
            <h3>All Products</h3>
          </div>
          <div className="action">
            <Overflow title="Bulk Action">
              <div>Delete Selection</div>
            </Overflow>
            <Overflow title="Sort By">
              <div>Price {'(high > low)'}</div>
              <div>Price {'(low > high)'}</div>
              <div>
                <p>Latest</p>
              </div>
              <div>
                <p>Oldest</p>
              </div>
            </Overflow>
            <input className="search" type="text" placeholder="Search" />
          </div>
        </div>
      </Display>
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-1">
            <input
              id="select-all"
              type="checkbox"
              onChange={(e) => handleAllSelectedProducts(e)}
              name=""
            />
            {/* <label htmlFor="select-all">Select</label> */}
          </Column>
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
                <input
                  checked={selectedProducts.includes(product.id as number)}
                  onClick={() => handleSelectedProducts(product.id as number)}
                  type="checkbox"
                  name=""
                  id=""
                />
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
                  <DeleteButton onClick={() => console.log('first')} />
                </CustomIconArea>
              </Column>
            </Row>
          ))
        )}
        <Pagination handlePageClick={handlePageClick} />
      </Display>
    </div>
  );
};

export default AllProducts;
