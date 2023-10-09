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
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';

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

        <Row className="row">
          <Column className="col-md-1">SI No.</Column>
          <Column className="col-md-2">Questions</Column>
          <Column className="col-md-2">Answers</Column>
          <Column className="col-md-2">Status</Column>
          <Column className="col-md-2">Actions</Column>
        </Row>
        {[...Array(3).keys()].map((_category, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">01</Column>
            <Column className="col-md-2">Where can I get some?</Column>
            <Column className="col-md-2">
              Columnere are many variations of passages of Lorem Ipsum
              available, but Columne majority have suffered alteration in some
              form, by injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a passage of
              Lorem Ipsum, you need to be sure Columnere isn't anyColumning
              embarrassing hidden in Columne middle of text. All Columne Lorem
              Ipsum generators on Columne Internet tend to repeat predefined
              chunks as necessary, making Columnis Columne first true generator
              on Columne Internet. It uses a dictionary of over 200 Latin words,
              combined wiColumn a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. Columne generated
              Lorem Ipsum is Columnerefore always free from repetition, injected
              humour, or non-characteristic words etc.
            </Column>
            <Column className="col-md-2">
              <ToggleButton isChecked />
            </Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <DeleteButton
                // onClick={() => handleDeleteVideo(video.id as number)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
        <Pagination />
      </Display>
    </div>
  );
};

export default FaqPage;
