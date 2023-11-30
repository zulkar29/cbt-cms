import { useEffect } from 'react';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getEmis, reset } from '../../redux/emi/emiSlice';
import CardBody from '../../components/card-body';
import EditButton from '../../components/button/edit';

const EmiPage = () => {
  const dispatch = useAppDispatch();
  const { emis } = useAppSelector((state) => state.emi);

  useEffect(() => {
    dispatch(getEmis({}));

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div>
      <CardBody header="Available Emi" to="/emi/create"></CardBody>
      <Display>
        <Row className="row">
          <Column className="col-md-3">Bank Name</Column>
          <Column className="col-md-1">Three months</Column>
          <Column className="col-md-1">Six Months</Column>
          <Column className="col-md-1">Nine Months</Column>
          <Column className="col-md-1">Twelve Months</Column>
          <Column className="col-md-1">Eighteen Months</Column>
          <Column className="col-md-1">Twenty_four Months</Column>
          <Column className="col-md-1">Thirty Months</Column>
          <Column className="col-md-1">Thirty_six Months</Column>
          <Column className="col-md-1">Action</Column>
        </Row>
        {emis.map((emi, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-3">{emi.bank_name}</Column>
            <Column className="col-md-1">{emi.three_months}</Column>
            <Column className="col-md-1">{emi.six_months}</Column>
            <Column className="col-md-1">{emi.nine_months}</Column>
            <Column className="col-md-1">{emi.twelve_months}</Column>
            <Column className="col-md-1">{emi.eighteen_months}</Column>
            <Column className="col-md-1">{emi.twenty_four_months}</Column>
            <Column className="col-md-1">{emi.thirty_months}</Column>
            <Column className="col-md-1">{emi.thirty_six_months}</Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <EditButton editUrl={`/emi/edit/${emi.id}`} />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default EmiPage;
