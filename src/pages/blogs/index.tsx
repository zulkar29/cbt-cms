import { ChangeEvent, useState, useEffect } from 'react';
import Actions from '../../components/actions';
import CardBody from '../../components/card-body';
import Display from '../../components/display';
import Filter from '../../components/filter';
import Pagination from '../../components/pagination';
import Column from '../../components/table/column';
import Row from '../../components/table/row';
import ToggleButton from '../../components/forms/checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getBlogs } from '../../redux/blogs/blogSlice';

const Blogs: React.FC = () => {
  const [displayItem, setDisplayItem] = useState(10);
  // const [selectedBlog, setSelectedBlog] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { blogs, totalCount } = useAppSelector((state) => state.blogs);

  const totalPage = Math.floor(totalCount / displayItem);

  console.log(blogs);
  console.log(displayItem);

  useEffect(() => {
    dispatch(getBlogs({ page: pageNumber, limit: displayItem }));
    window.scrollTo(0, 0);
  }, [dispatch, pageNumber, displayItem]);

  /*   const handleSelectedBlog = (blogId: number) => {
    const selectedBlogSet = new Set(selectedBlog);

    if (selectedBlogSet.has(blogId)) {
      selectedBlogSet.delete(blogId);
    } else {
      selectedBlogSet.add(blogId);
    }

    setSelectedBlog(Array.from(selectedBlogSet));
  };
 */
  const handlePageChange = (selectedItem: { selected: number }) => {
    setPageNumber(selectedItem.selected + 1);
  };

  const handleDisplayItem = (e: ChangeEvent<HTMLSelectElement>) => {
    setDisplayItem(Number(e.target.value));
  };

  return (
    <div>
      <CardBody header="All Blogs" to="/blogs/create" />
      <Display>
        <Filter handleDisplayItem={handleDisplayItem} />
        <Row className="row">
          <Column className="col-md-1">SI No.</Column>
          <Column className="col-md-2">Title</Column>
          <Column className="col-md-6">Sort Description</Column>
          <Column className="col-md-1">Status</Column>
          <Column className="col-md-1">Options</Column>
        </Row>
        <>
          {blogs.map((blog, index) => (
            <Row className="row" key={index}>
              {/*  <Column className="col-md-1">
                <input
                  type="checkbox"
                  onClick={() => handleSelectedBlog(blog.id)}
                />
              </Column> */}
              <Column className="col-md-1">{blog.id}</Column>
              <Column className="col-md-2">{blog.title}</Column>
              <Column className="col-md-6">
                <div
                  dangerouslySetInnerHTML={{ __html: blog.description ?? '' }}
                ></div>
              </Column>
              <Column className="col-md-1">
                <ToggleButton isChecked={blog.is_visible} />
              </Column>
              <Column className="col-md-1">
                <Actions editUrl={`/blogs/edit/${blog.id}`} />
              </Column>
            </Row>
          ))}
        </>
        <Pagination
          pageCount={pageNumber}
          handlePageClick={handlePageChange}
          totalPage={totalPage}
        />
      </Display>
    </div>
  );
};

export default Blogs;
