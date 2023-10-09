import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import Pagination from '../../components/pagination';
import CardBody from '../../components/card-body';
import { ChangeEvent, useState, useEffect } from 'react';
import Filter from '../../components/filter';
import CustomIconArea from '../../components/custom-icon-area';
import DeleteButton from '../../components/button/delete';
import ToggleButton from '../../components/forms/checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getFaqs } from '../../redux/faqs/faqSlice';

const FaqPage: React.FC = () => {
  const { faqs } = useAppSelector((state) => state.faqs);
  const [displayItem, setDisplayItem] = useState(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useAppDispatch();

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  useEffect(() => {
    dispatch(getFaqs({ page: pageNumber, limit: displayItem }));
    window.scrollTo(0, 0);
  }, [dispatch, pageNumber, displayItem]);

  return (
    <div>
      <CardBody header="FAQ" to="/faqs/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />

        <Row className="row">
          <Column className="col-md-1">SI No.</Column>
          <Column className="col-md-4">Questions</Column>
          <Column className="col-md-5">Answers</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-1">Actions</Column>
        </Row>
        {faqs.map((faq, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">{faq.id}</Column>
            <Column className="col-md-4">{faq.question}</Column>
            <Column className="col-md-5">{faq.answer}</Column>
            <Column className="col-md-1">
              <ToggleButton isChecked />
            </Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <DeleteButton
                // onClick={() => handleDeleteVideo(video.id as number)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
        {/* <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        /> */}
      </Display>
    </div>
  );
};

export default FaqPage;
