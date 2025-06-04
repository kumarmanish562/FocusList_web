import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "FocusList" },
    { name: "description", content: "Welcome to FocusList!" },
  ];
}
const Home = () => {
  return (
    <div className=' w-full h-screen flex items-center justify-center gap-4'>
      <Link to='/sign-in'>
      <Button className='bg-blue-500 text-white hover:bg-blue-600'>Sign In</Button>
      </Link>
      <Link to='/sign-up'>
      <Button  variant='outline' className='bg-green-500 text-white hover:bg-green-600 ml-4'>Sign Up</Button>
      </Link>
    </div>
  )
}


export default Home