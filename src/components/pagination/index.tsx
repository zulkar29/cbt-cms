import ReactPaginate from 'react-paginate';
import './index.scss';

interface IProps {
  pageCount?: number;
  handlePageClick?: (count: { selected: number }) => void;
  totalPage?: number;
}

const Pagination: React.FC<IProps> = ({
  handlePageClick,
  pageCount,
  totalPage,
}) => {
  return (
    <div className="page-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={pageCount}
        pageCount={totalPage ?? 80}
        disableInitialCallback={true}
        marginPagesDisplayed={1}
        pageClassName="page-item"
        previousClassName="prev-page"
        nextClassName="next-page"
        previousLabel="Previous"
        containerClassName="pagination"
        renderOnZeroPageCount={null}
        disabledClassName="disable"
      />
    </div>
  );
};

export default Pagination;
