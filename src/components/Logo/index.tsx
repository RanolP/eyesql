import { x } from '@xstyled/emotion';
import faviconSrc from '../../favicon.svg';

export function Logo(): JSX.Element {
  return (
    <x.object
      type="image/svg+xml"
      data={faviconSrc}
      h="1em"
      w="1em"
      display="inline-block"
      verticalAlign="bottom"
    />
  );
}
