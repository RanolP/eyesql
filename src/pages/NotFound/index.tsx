import { x } from '@xstyled/emotion';
import { Link, Redirect } from 'wouter-preact';

export function NotFoundPage(): JSX.Element {
  return (
    <x.div>
      <x.p>여긴어디난누구</x.p>
      <Link to="/">
        <x.a>돌아가장</x.a>
      </Link>
    </x.div>
  );
}
