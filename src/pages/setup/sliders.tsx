import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import ToggleButton from '../../components/forms/checkbox';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import { useAppDispatch } from '../../redux/hooks';

const Sliders: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(() => console.log('first'));
  };

  return (
    <div>
      <CardBody header="Home Sliders" to="/setup/sliders/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-4">Image</Column>
          <Column className="col-md-5">Link</Column>
          <Column className="col-md-2">Visible</Column>
          <Column className="col-md-1">Action</Column>
        </Row>

        <Row className="row">
          <Column className="col-md-4">
            <img
              src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1629616218pexels-karolina-grabowska-4386467.jpg"
              alt="brand"
            />
          </Column>
          <Column className="col-md-5">
            https://www.gazihomeappliance.com/categories
          </Column>
          <Column className="col-md-2">
            <ToggleButton />
          </Column>
          <Column>
            <CustomIconArea>
              <DeleteButton onClick={handleDelete} />
            </CustomIconArea>
          </Column>
        </Row>
      </Display>
    </div>
  );
};

export default Sliders;
