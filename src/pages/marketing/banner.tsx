import Display from '../../components/display';
import Column from '../../components/table/column';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';
import './banner.scss';
import CardBody from '../../components/card-body';
import Row from '../../components/table/row';

const BannerPage = () => {
  return (
    <div>
      <CardBody header="Banner" to="/banner/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-9">Image</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-2">Action</Column>
        </Row>
        <div className="row banner">
          <Column className="col-md-9">
            <img src="/assets/BG.webp" alt="banner" />
          </Column>
          <Column className="col-md-1">
            <ToggleButton isChecked />
          </Column>
          <Column className="col-md-2">
            <CustomIconArea>
              <DeleteButton />
            </CustomIconArea>
          </Column>
        </div>
      </Display>
    </div>
  );
};

export default BannerPage;
