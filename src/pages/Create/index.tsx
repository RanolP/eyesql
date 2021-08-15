import { x } from '@xstyled/emotion';
import { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { DatabaseKindSelect } from './DatabaseKindSelect';

export function CreatePage(): JSX.Element {
  const handleGoBackButton = useCallback(() => {
    history.back();
  }, []);

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
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="repeat(5, 1fr)"
          gap={4}
        >
          <x.label>데이터베이스 유형</x.label>
          <DatabaseKindSelect />

          <x.label>주소</x.label>
          <x.input borderBottomWidth={2} borderColor="primary" />

          <x.label>포트</x.label>
          <x.input borderBottomWidth={2} borderColor="primary" />

          <x.label>ID</x.label>
          <x.input borderBottomWidth={2} borderColor="primary" />

          <x.label>비밀번호</x.label>
          <x.input borderBottomWidth={2} borderColor="primary" />
        </x.form>
      </x.main>
    </x.div>
  );
}
