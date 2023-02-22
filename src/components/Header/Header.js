import user from '../../assets/img/user.svg'

export default function Header() {
  return (
    <header className='d-flex-row b-white400 h-60 ai-center jc-space-between pl-20 pr-20 border-bottom-2 border-white500'>
      <h1 className='c-black500 fs-25 ff-primary fw-400'>Donit</h1>
      <div className='d-flex-row ai-center'>
        <p className='c-black500 fs-14 ff-primary fw-400 mr-15'>Antoine Fayeux</p>
        <img src={user} alt='profile' className='w-30 h-30 bora-full border-2 border-white700 user-select-none' />
      </div>
    </header>
  );
}
