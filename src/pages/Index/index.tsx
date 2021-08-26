import { x } from '@xstyled/emotion';
import { selectAtom, useAtomValue } from 'jotai/utils';
import { DatabaseConnectionListAtom } from '../../lib/app/atom/database-connection-list';
import { NewButton } from './NewButton';
import { SearchBox } from './SearchBox';

const DatabaseConnectionListValueAtom = selectAtom(
  DatabaseConnectionListAtom,
  (state) => state.context.databaseConnections,
);

export function IndexPage(): JSX.Element {
  const state = useAtomValue(DatabaseConnectionListValueAtom);

  console.log(state);

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
        <x.ul>
          {state.map((connection) => (
            <x.li key={connection.id}>{connection.name}</x.li>
          ))}
        </x.ul>
      </x.nav>
      <x.ul></x.ul>
    </x.div>
  );
}
