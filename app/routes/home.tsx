import type { Route } from './+types/home';
import Welcome from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Redux User App' },
    { name: 'description', content: 'Manage users with Redux and React' },
  ];
}

export default function Home() {
  return <Welcome />;
}
