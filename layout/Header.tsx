import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import classNames from 'classnames';
import { Button } from '../components/Button';

const menu = [
  { id: 'home', name: 'home', path: '/' },
  { id: 'news', name: 'news', path: '/news' },
  { id: 'about', name: 'about', path: '/about' },
];

export const Header: FC = () => {
  const router = useRouter();

  const handleButtonClick = () => router.back();

  return (
    <header className='py-5 shadow'>
      <div className='container flex items-center justify-between'>
        <Button onClick={handleButtonClick}>Go back</Button>

        <p className='text-4xl font-black'>Next App.</p>

        <nav className='lg:text-lg'>
          <ul className='mx-auto flex items-center gap-14'>
            {menu &&
              menu.map(({ id, name, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className={classNames(
                      'py-2 text-2xl capitalize transition-all hover:border-b-4 hover:border-indigo-500 hover:text-gray-500 focus:border-b-4 focus:border-indigo-500 focus:text-gray-500',
                      {
                        ['border-b-4 border-indigo-500']:
                          router.pathname == path,
                      }
                    )}
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
