import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "FocusList" },
    { name: "description", content: "Welcome to FocusList!" },
  ];
}
const Home = () => {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  )
}

export default Home