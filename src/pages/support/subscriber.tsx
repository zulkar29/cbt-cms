import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';

const Subscriber = () => {
  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-12">Email</Column>
        </Row>
        {[...Array(15).keys()].map((_email, index) => (
          <Row className="row">
            <Column className="col-md-12">{`talha.halcyon${index}@gmail.com`}</Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Subscriber;
