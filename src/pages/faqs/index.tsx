import Display from '../../components/display';
import Table from '../../components/table';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Select from '../../components/select';
import Actions from '../../components/actions';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import { ChangeEvent, useState } from 'react';
import Filter from '../../components/filter';

const FaqPage: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);

  console.log(displayItem);

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="FAQ" to="/faqs/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Table>
          <tbody>
            <Row>
              <th>SI No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Details</th>
              <th>Status</th>
              <th>Options</th>
            </Row>
          </tbody>
          <tbody>
            {[...Array(3).keys()].map((_category, index) => (
              <Row key={index}>
                <Column>01</Column>
                <Column>Where can I get some?</Column>
                <Column> Offer Information !</Column>
                <Column>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </Column>
                <Column>
                  <Select />
                </Column>
                <Column>
                  <Actions editUrl="/faqs/edit/1" />
                </Column>
              </Row>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </Display>
    </div>
  );
};

export default FaqPage;
