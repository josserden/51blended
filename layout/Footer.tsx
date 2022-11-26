export const Footer = () => {
  return (
    <footer className='border-t-2 border-slate-200 py-6'>
      <div className='container flex items-center justify-center'>
        <p className=' text-base font-light text-gray-700 leading-6'>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
