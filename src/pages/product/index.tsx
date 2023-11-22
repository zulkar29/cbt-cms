import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import Filter from '../../components/filter';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  deleteProduct,
  getProducts,
  reset,
  updateProduct,
} from '../../redux/products/product-slice';
import ToggleButton from '../../components/forms/checkbox';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';
import ViewButton from '../../components/button/view';
import Overflow from '../../components/overflow';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { API_ROOT } from '../../constants';
import { toast } from 'react-toastify';

const AllProducts: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [onSearch, setOnSearch] = useState('');
  const dispatch = useAppDispatch();
  const [displayItem, setDisplayItem] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { products, isDelete, totalCount, isUpdate, message } = useAppSelector(
    (state) => state.product
  );
  const totalPage = Math.floor(totalCount / displayItem);

  const handleOnSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOnSearch(e.target.value);
  };

  useEffect(() => {
    if (isDelete) {
      toast.success(`${message}`);
    }
    dispatch(
      getProducts({ page: pageNumber, limit: displayItem, search: onSearch })
    );
    return () => {
      dispatch(reset());
    };
  }, [
    dispatch,
    pageNumber,
    displayItem,
    isUpdate,
    isDelete,
    onSearch,
    message,
  ]);

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

  const handleMultiDelete = () => {
    dispatch(deleteProduct([...selectedProducts]));
  };

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  const handleKeyPoint = (
    id: number,
    updateData: { [key: string]: string | number | boolean }
  ) => {
    dispatch(updateProduct({ id, productData: updateData }));
  };

  return (
    <div>
      <CardBody header="Product" to="/products/create" />
      <Display>
        <Filter
          handleDisplayItem={handleDisplayItem}
          onSearch={handleOnSearch}
          leftElements={
            <div className="action">
              <Overflow title="Bulk Action">
                <div onClick={handleMultiDelete}>Delete Selection</div>
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
            </div>
          }
        />
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

        {products.map((product, index) => (
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
                src={`${API_ROOT}/images/product/${product.image}`}
                alt="brand"
              />
            </Column>
            <Column className="col-md-3">{product.title}</Column>
            <Column className="col-md-1">0</Column>
            <Column className="col-md-1">৳ 3000.00</Column>
            <Column className="col-md-1">৳ 2800.00</Column>
            <Column className="col-md-1">
              <ToggleButton
                onClick={() =>
                  handleKeyPoint(product.id as number, {
                    availability: !product.availability,
                  })
                }
                isChecked={product.availability}
              />
            </Column>
            <Column className="col-md-1">
              <ToggleButton
                onClick={() =>
                  handleKeyPoint(product.id as number, {
                    is_homepage: !product.is_homepage,
                  })
                }
                isChecked={product.is_homepage}
              />
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <ViewButton href="/products" />
                <EditButton editUrl={`/products/edit/${product.id}`} />
                <DeleteButton
                  onClick={() =>
                    dispatch(deleteProduct([product.id as number]))
                  }
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
        <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        />
      </Display>
    </div>
  );
};

export default AllProducts;
