import { x } from '@xstyled/emotion';
import { Link } from 'wouter-preact';
import { Logo } from '../../components/Logo';
import { NewButton } from './NewButton';
import { SearchBox } from './SearchBox';

export function IndexPage(): JSX.Element {
  return (
    <x.div w="100vw" p={8}>
      <x.nav
        w="100%"
        display="grid"
        gridTemplateRows="auto"
        gridTemplateColumns="1fr auto"
        gap={4}
      >
        <SearchBox />
        <NewButton />
      </x.nav>
      <x.ul></x.ul>
    </x.div>
  );
}
