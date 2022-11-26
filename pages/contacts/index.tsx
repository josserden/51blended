import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Contacts = ({ users }: UsersProps): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-4xl text-gray-700 mb-10 font-semibold text-center'>
          Contacts
        </h1>

        <ul className='max-w-2xl mx-auto border shadow bg-white rounded-lg p-8 flex flex-col gap-4'>
          {users &&
            users.map(({ id, username, name }) => (
              <li key={id}>
                <Link
                  className='hover:bg-blue-200 flex items-center justify-between border rounded p-2 transition-colors'
                  href={`${pathname}/${id}`}
                >
                  <h2 className=' flex items-center gap-2 text-lg'>
                    <span className='text-3xl p-0 text-green-500'>&bull;</span>
                    {name}
                  </h2>
                  <p className='text-sm text-grey-800 font-light'>{username}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacts;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  if (!users) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      users,
    },
  };
};

interface UserProps {
  id: string;
  name: string;
  username: string;
}

interface UsersProps {
  users: UserProps[];
}
