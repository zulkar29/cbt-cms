import { useEffect } from "react";
import DeleteButton from "../../components/button/delete";
import EditButton from "../../components/button/edit";
import CardBody from "../../components/card-body";
import CustomIconArea from "../../components/custom-icon-area";
import Display from "../../components/display";
import Column from "../../components/table/column";
import Row from "../../components/table/row";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deletePages, getPages } from "../../redux/pages/pageSlice";

const CommonPages: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pages, isDelete } = useAppSelector((state) => state.pages);
  const handlePageDelete = (pageNumber: number) => {
    dispatch(deletePages(pageNumber));
  };

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch, isDelete]);

  return (
    <div>
      <CardBody header="Add More Pages" to="/setup/pages/create" />
      <Display>
        <Row className="row text-bold">
          <Column className="col-md-3">#</Column>
          <Column className="col-md-3">Page Name</Column>
          <Column className="col-md-3">Slug</Column>
          <Column className="col-md-3">Action</Column>
        </Row>
        {pages.map((page, index) => (
          <Row key={index} className="row">
            <Column className="col-md-3">{index + 1}</Column>
            <Column className="col-md-3">{page.title}</Column>
            <Column className="col-md-3">{page.slug}</Column>
            <Column className="col-md-3">
              <CustomIconArea>
                <EditButton editUrl={`/setup/pages/edit/${page.id}`} />
                <DeleteButton
                  onClick={() => handlePageDelete(page.id as number)}
                />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default CommonPages;
