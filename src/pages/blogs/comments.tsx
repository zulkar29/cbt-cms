import { useEffect } from 'react';
import Display from '../../components/display';
import Row from '../../components/table/row';
import Column from '../../components/table/column';
import CardBody from '../../components/card-body';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getComments, reset } from '../../redux/comments/commentSlice';

const BlogComment = () => {
  const { comments } = useAppSelector((state) => state.comment);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getComments({}));

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div>
      <CardBody header="Blog Comments" to="#" />
      <Display>
        <Row className="row">
          <Column className="col-md-4">Name</Column>
          <Column className="col-md-4">Email</Column>
          <Column className="col-md-4">Comments</Column>
        </Row>
        {comments.map((comment, index) => (
          <Row className="row" key={index}>
            <Column className="col-md-4">{comment.name}</Column>
            <Column className="col-md-4">{comment.email}</Column>
            <Column className="col-md-4">{comment.comment}</Column>
          </Row>
        ))}
      </Display>
    </div>
  );
};

export default BlogComment;
