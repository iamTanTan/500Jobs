import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { signIn, signOut, useSession } from 'next-auth/react';

const navbar: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='/'>
        <img src='/briefcase.png' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          500Jobs
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button
          gradientDuoTone='pinkToOrange'
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </Button>
        {/* <Navbar.Toggle /> */}
      </div>
    </Navbar>
  );
};

export default navbar;
