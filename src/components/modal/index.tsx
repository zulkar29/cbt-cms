import Swal from 'sweetalert2';

const Modal = async (onClick: () => void) => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      onClick();

      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    }
  });
};

export default Modal;
