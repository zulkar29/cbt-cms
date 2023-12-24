import { useEffect } from 'react';
import Display from '../../components/display';
import ToggleButton from '../../components/forms/checkbox';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getRefund, updateRefund } from '../../redux/refund/refundSlice';
import DeleteButton from '../../components/button/delete';

const Warranty = () => {
  const dispatch = useAppDispatch();
  const { refunds, isUpdate } = useAppSelector((state) => state.refund);

  const updateStatus = (id: number, status: string) => {
    dispatch(updateRefund({ refund_status: status, id }));
  };

  useEffect(() => {
    dispatch(getRefund());
  }, [dispatch, isUpdate]);
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
                  onClick={() => updateStatus(refund.id, 'cancel')}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Warranty;
