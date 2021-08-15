import { x } from '@xstyled/emotion';
import { FiSearch } from 'react-icons/fi';
import { Logo } from '../../components/Logo';

export function SearchBox(): JSX.Element {
  return (
    <x.form
      display="grid"
      gridTemplateRows="auto"
      gridTemplateColumns="1fr auto"
    >
      <x.input
        borderWidth="2 0 2 2"
        borderStyle="solid"
        borderColor="primary"
        borderRadius="lg 0 0 lg"
      />
      <x.button
        w="max-content"
        borderRadius="0 lg lg 0"
        p="3 4"
        backgroundColor="primary"
        color="primaryFg"
      >
        <FiSearch /> 검색
      </x.button>
    </x.form>
  );
}
