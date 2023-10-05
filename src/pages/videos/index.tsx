import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import CustomIconArea from '../../components/custom-icon-area';
import EditButton from '../../components/button/edit';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';

const VideosPage: React.FC = () => {
  return (
    <div>
      <CardBody header="Videos" to="/videos/create" />
      <Display>
        <Row className="row">
          <Column className="col-md-1">SI No.</Column>
          <Column className="col-md-4">Title</Column>
          <Column className="col-md-4">Link</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-2">Options</Column>
        </Row>
        <Row className="row">
          <Column className="col-md-1">01</Column>
          <Column className="col-md-4">
            {' '}
            Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
          </Column>
          <Column className="col-md-4">
            https://youtube.com/embed/6FxZnI01JCs
          </Column>
          <Column className="col-md-1">
            <ToggleButton
              isChecked={true}
              // onClick={() => handleStatusChange()}
            />
          </Column>
          <Column className="col-md-2">
            <CustomIconArea>
              <EditButton editUrl={`/blogs/edit/1`} />
              <DeleteButton
              // onClick={() => handleDeleteBlog(blog.id as number)}
              />
            </CustomIconArea>
          </Column>
        </Row>
        <Pagination />
      </Display>
    </div>
  );
};

export default VideosPage;
