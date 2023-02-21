export default function Error() {
  return (
    <div className='d-flex-column ai-center jc-center' style={{height : '100vh'}}>
      <p className='ff-primary fs-35 c-black500 fw-500'>oops...</p>
      <p className='ff-primary fs-25 c-black300 fw-400'>{`This can't be right :(`}</p>
    </div>
  );
}
