import { x } from '@xstyled/emotion';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'wouter-preact';

export function NewButton(): JSX.Element {
  return (
    <Link to="/create">
      <x.a>
        <x.button
          p="3 4"
          borderRadius="lg"
          borderWidth={2}
          background="transparent"
          color="primary"
        >
          <FiPlus /> 새로 만들기
        </x.button>
      </x.a>
    </Link>
  );
}
