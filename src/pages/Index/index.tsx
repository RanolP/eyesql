import { x } from '@xstyled/emotion';
import { Link } from 'wouter-preact';
import { Logo } from '../../components/Logo';

export function IndexPage(): JSX.Element {
  return (
    <x.div>
      <x.h1 fontSize="6xl" fontWeight="bold" userSelect="none" cursor="default">
        <Logo />
        EyeSQL
      </x.h1>
      <x.ul>
        <x.li>
          <Link to="/help">
            <x.a>몰랑</x.a>
          </Link>
          <Link to="/help">
            <x.a>몰랑</x.a>
          </Link>
        </x.li>
      </x.ul>
    </x.div>
  );
}
