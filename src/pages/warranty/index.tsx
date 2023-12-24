import { useEffect, useState } from 'react';
import Display from '../../components/display';
import ToggleButton from '../../components/forms/checkbox';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  deleteRefund,
  getRefund,
  updateRefund,
} from '../../redux/refund/refundSlice';
import DeleteButton from '../../components/button/delete';
import Pagination from '../../components/pagination';

const Warranty = () => {
  const dispatch = useAppDispatch();
  const { refunds, isUpdate, totalCount, isDelete } = useAppSelector(
    (state) => state.refund
  );
  const [pageNumber, setPageNumber] = useState<number>(1);
  const totalPage = Math.ceil(totalCount / 10);
  const updateStatus = (id: number, status: string) => {
    dispatch(updateRefund({ refund_status: status, id }));
  };
  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  useEffect(() => {
    dispatch(getRefund({ page: pageNumber }));
  }, [dispatch, isUpdate, pageNumber, isDelete]);
  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-1">Order No</Column>
          <Column className="col-md-2">Product</Column>
          <Column className="col-md-1">Price</Column>
          <Column className="col-md-4">Message</Column>
          <Column className="col-md-2">Refund Status</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        {/* TODO:  */}
        {refunds.map((refund, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">{refund.order_id}</Column>
            <Column className="col-md-2">{refund.product_name}</Column>
            <Column className="col-md-1">{refund.product_price}</Column>
            <Column className="col-md-4">{refund.message}</Column>
            <Column className="col-md-2">
              <ToggleButton
                onClick={() =>
                  updateStatus(
                    refund.id,
                    refund.refund_status === 'approved' ? 'pending' : 'approved'
                  )
                }
                isChecked={refund.refund_status === 'approved'}
              />
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <DeleteButton
                  onClick={() => dispatch(deleteRefund(refund.id))}
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

export default Warranty;
