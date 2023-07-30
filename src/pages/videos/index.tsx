import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';

const VideosPage = () => {
  return (
    <div>
      <CardBody header="Videos" to="/videos/create" />
      <Display>
        <Table>
          <tbody>
            <Row>
              <th>SI No.</th>
              <th>Title</th>
              <th>Link</th>
              <th>Status</th>
              <th>Options</th>
            </Row>
          </tbody>
          <tbody>
            <Row>
              <Column>01</Column>
              <Column>
                Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
              </Column>
              <Column> https://youtube.com/embed/6FxZnI01JCs</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>
                Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
              </Column>
              <Column> https://youtube.com/embed/6FxZnI01JCs</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>
                Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
              </Column>
              <Column> https://youtube.com/embed/6FxZnI01JCs</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>
                Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
              </Column>
              <Column> https://youtube.com/embed/6FxZnI01JCs</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>
                Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
              </Column>
              <Column> https://youtube.com/embed/6FxZnI01JCs</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
            <Row>
              <Column>01</Column>
              <Column>
                Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
              </Column>
              <Column> https://youtube.com/embed/6FxZnI01JCs</Column>
              <Column>
                <Select />
              </Column>
              <Column>
                <Actions />
              </Column>
            </Row>
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
};

export default VideosPage;
