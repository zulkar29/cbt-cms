import { useEffect } from 'react';
import DeleteButton from '../../components/button/delete';
import CustomIconArea from '../../components/custom-icon-area';
import Display from '../../components/display';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteQueries, getQueries, reset } from '../../redux/query/querySlice';
import { toast } from 'react-toastify';

const Queries = () => {
  const dispatch = useAppDispatch();
  const { queries, isDelete } = useAppSelector((state) => state.query);

  const handleDelete = (id: number) => {
    dispatch(deleteQueries(id));
  };

  useEffect(() => {
    if (isDelete) {
      toast.success('Query deleted successfully');
    }
    dispatch(getQueries({}));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isDelete]);

  return (
    <div>
      <Display>
        <Row className="row">
          <Column className="col-md-1">#</Column>
          <Column className="col-md-2">Date</Column>
          <Column className="col-md-2">Product Title</Column>
          <Column className="col-md-2">Mobile</Column>
          <Column className="col-md-3">Question</Column>
          <Column className="col-md-2">Options</Column>
        </Row>

        {queries.map((query, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-1">{query.id}</Column>
            <Column className="col-md-2">
              {new Date(query.created_at).toISOString().slice(0, 10)}
            </Column>
            <Column className="col-md-2">{query.product_name}</Column>
            <Column className="col-md-2">{query.mobile}</Column>
            <Column className="col-md-3">{query.question}</Column>
            <Column className="col-md-2">
              <CustomIconArea>
                <DeleteButton onClick={() => handleDelete(Number(query.id))} />
              </CustomIconArea>
            </Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default Queries;
