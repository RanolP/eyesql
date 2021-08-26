import styled, { x } from '@xstyled/emotion';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'preact/hooks';
import { FiArrowLeft } from 'react-icons/fi';
import { DatabaseConnectionListAtom } from '../../lib/app/atom/database-connection-list';
import {
  createDatabaseConnection,
  DatabaseConnection,
} from '../../lib/app/model/database-connection';
import { DatabaseKind } from '../../lib/app/model/database-kind';
import { DefaultPort } from '../../lib/app/model/port';
import { DatabaseKindSelect } from './DatabaseKindSelect';

const Input = styled.input`
  border-bottom-width: 2px;
  border-color: primary;
`;

export function CreatePage(): JSX.Element {
  const handleGoBackButton = useCallback(() => {
    history.back();
  }, []);

  const [kind, setKind] = useState<DatabaseKind | null>(null);

  const [state, send] = useAtom(DatabaseConnectionListAtom);

  const handleSubmit = useCallback(
    (event: JSX.TargetedEvent<HTMLFormElement>) => {
      event.preventDefault();

      const databaseConnection = createDatabaseConnection(
        Object.fromEntries(
          new FormData(event.currentTarget),
        ) as unknown as Omit<DatabaseConnection, 'id'>,
      );

      send({
        type: 'CREATE_TODO',
        databaseConnection,
      });

      history.back();
    },
    [],
  );

  return (
    <x.div divideY={true} divideColor="primary">
      <x.button
        background="transparent"
        color="primary"
        onClick={handleGoBackButton}
        p="3 6"
      >
        <FiArrowLeft /> 뒤로 가기
      </x.button>
      <x.main m="0 4" pl={2} pt={3}>
        <x.h1
          userSelect="none"
          cursor="default"
          fontSize="3xl"
          fontWeight="bold"
          marginBottom={6}
        >
          새로 만들기
        </x.h1>
        <x.form
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="repeat(6, auto)"
          gap={4}
          onSubmit={handleSubmit}
        >
          <x.label>
            이름<sup>필수</sup>{' '}
          </x.label>
          <Input name="name" required={true} />

          <x.label>
            데이터베이스 유형<sup>필수</sup>
            <br />
            <small>위 값을 변경할 경우 주소와 포트가 재설정됩니다.</small>
          </x.label>

          <DatabaseKindSelect name="kind" onSelect={setKind} required={true} />

          <x.label>
            주소<sup>필수</sup>
          </x.label>
          <Input name="address" value="0.0.0.0" required={true} />

          <x.label>
            포트<sup>필수</sup>
          </x.label>
          <Input
            name="port"
            type="number"
            value={kind ? DefaultPort[kind] : undefined}
            required={true}
          />

          <x.label>
            사용자명<sup>필수</sup>
          </x.label>
          <Input name="user" required={true} />

          <x.label>
            비밀번호<sup>필수</sup>
          </x.label>
          <Input name="password" type="password" required={true} />

          <x.button
            gridColumn="1 / 3"
            m="0 auto"
            p="3 100"
            backgroundColor="primary"
            color="primaryFg"
          >
            만들기
          </x.button>
        </x.form>
      </x.main>
    </x.div>
  );
}
