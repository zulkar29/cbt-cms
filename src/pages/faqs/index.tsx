import { useEffect } from "react";
import DeleteButton from "../../components/button/delete";
import EditButton from "../../components/button/edit";
import CardBody from "../../components/card-body";
import CustomIconArea from "../../components/custom-icon-area";
import Display from "../../components/display";
import ToggleButton from "../../components/forms/checkbox";
import Column from "../../components/table/column";
import Row from "../../components/table/row";
import { IFaq } from "../../interfaces/faq";
import {
  deleteFaq,
  getFaqs,
  reset,
  updateFaq,
} from "../../redux/faqs/faqSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const FaqPage: React.FC = () => {
  const { faqs, isUpdate, isDelete } = useAppSelector((state) => state.faqs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFaqs());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isDelete, isUpdate]);

  /* useEffect(() => {
    if (isUpdate) {
      toast.success(`Faq status updated successfully`);
    }
    if (isDelete) {
      toast.success('Faq delete successfully');
    }
  }, [isUpdate, isDelete]); */

  const handleStatusChange = (faq: IFaq) => {
    dispatch(updateFaq({ id: faq.id, is_visible: !faq.is_visible }));
  };

  const handleDeleteVideo = (id: number) => {
    dispatch(deleteFaq(id));
    dispatch(getFaqs());
  };

  return (
    <div>
      <CardBody header="FAQ" to="/faqs/create" />
      <Display>
        <Row className="row text-bold">
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
              <ToggleButton
                isChecked={faq.is_visible}
                onClick={() => handleStatusChange(faq)}
              />
            </Column>
            <Column className="col-md-1">
              <CustomIconArea>
                <EditButton editUrl={`/faqs/edit/${faq.id}`} />
                <DeleteButton
                  onClick={() => handleDeleteVideo(faq.id as number)}
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
