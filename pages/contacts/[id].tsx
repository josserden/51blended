import React from 'react';

const Contact = ({ contact }) => {
  const { name, email, address } = contact ?? {};
  const { street, suite, city, zipcode } = address ?? {};

  return (
    <section className='py-20'>
      <div className='container'>
        <h1 className='text-4xl text-gray-700 mb-10 font-semibold text-center'>
          {name}
        </h1>

        <div className='flex items-center justify-between text-lg'>
          <span>
            <strong className='mr-2'> Email: </strong>
            {email}
          </span>

          <span>
            <strong className='mr-2'>Address: </strong>
            {`${street}, ${suite}, ${city}, ${zipcode}`}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};
