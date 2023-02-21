export default function ContextMenu({open, rename, kill}) {
  return (
    <div
      className='pt-5 pb-5 b-white500 c-black500 ff-primary fs-12 fw-400 border-white600 border-1 bora-5 d-flex-column pos-absolute'
      style={{ right: '0', zIndex: '10' }}
    >
      <p className='hover-b-white600 pr-20 pl-10 cursor-pointer user-select-none' onClick={open}>
        Open
      </p>
      <p className='hover-b-white600 pr-20 pl-10 cursor-pointer user-select-none' onClick={rename}>
        Rename
      </p>
      <p className='hover-b-white600 pr-20 pl-10 cursor-pointer user-select-none' onClick={kill}>
        Delete
      </p>
    </div>
  );
}
