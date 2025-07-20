import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='flex items-center justify-between bg-gray-800 px-8 py-4 text-white'>
      <h1 className='text-2xl font-black'>HRnet</h1>
      <nav>
        <ul className='flex space-x-8 font-bold uppercase'>
          <li>
            <a href='/' className='hover:underline'>
              Employee creation
            </a>
          </li>
          <li>
            <a href='/employee-list' className='hover:underline'>
              Employee listing
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
