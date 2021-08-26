import { atomWithMachine } from 'jotai/xstate';
import { DatabaseConnectionListMachine } from '../state-machine/database-connection-list';

export const DatabaseConnectionListAtom = atomWithMachine(
  DatabaseConnectionListMachine,
);
