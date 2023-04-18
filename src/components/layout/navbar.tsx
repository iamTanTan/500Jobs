import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { signIn, signOut, useSession } from 'next-auth/react';

const navbar: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <Navbar
      className='border-b bg-primary-50 dark:!border-white dark:!bg-midnight'
      fluid={true}
      rounded={false}
    >
      <Navbar.Brand href='/'>
        <img src='/briefcase.png' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          500Jobs
        </span>
      </Navbar.Brand>

      <div className='hidden md:order-2 md:block'>
        <Button
          color='dark'
          outline={true}
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </Button>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          className='!text-black underline-offset-4 hover:underline dark:!text-slate-300'
          href='/'
        >
          Home
        </Navbar.Link>
        {sessionData && (
          <Navbar.Link
            className='!text-black underline-offset-4 hover:underline dark:!text-slate-300'
            href='/my_apps'
          >
            My Apps
          </Navbar.Link>
        )}
        {sessionData && (
          <Navbar.Link
            className='!text-black underline-offset-4 hover:underline dark:!text-slate-300'
            href='/application'
          >
            Create Application
          </Navbar.Link>
        )}
        <Navbar.Link
          className='block md:hidden'
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
