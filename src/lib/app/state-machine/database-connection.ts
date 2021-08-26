import * as uuid from 'uuid';
import { assign, createMachine } from 'xstate';
import { DatabaseConnection } from '../model/database-connection';

export const DatabaseConnectionMachine = createMachine({
  id: 'database-connection',
});

export interface DatabaseConnectionMachineContext {
  connection: DatabaseConnection;
  previousConnection: DatabaseConnection;
}

export type DatabaseConnectionMachineEvent =
  | {
      type: 'DELETE';
    }
  | {
      type: 'EDIT';
    }
  | {
      type: 'CHANGE';
      newConnection: DatabaseConnection;
    };

export const createDatabaseConnectionMachine = (
  connection: DatabaseConnection,
) => {
  return createMachine<
    DatabaseConnectionMachineContext,
    DatabaseConnectionMachineEvent
  >({
    id: 'database-connection',
    initial: 'reading',
    context: {
      connection,
      previousConnection: connection,
    },
    on: {
      DELETE: {
        target: 'deleted',
      },
    },
    states: {
      reading: {
        on: {
          EDIT: {
            target: 'editing',
            actions: 'focusInput',
          },
        },
      },
      editing: {
        entry: assign((context: DatabaseConnectionMachineContext) => ({
          previousConnection: context.connection,
        })),
        on: {
          CHANGE: {
            actions: assign({
              connection: (_, event) => event.newConnection,
            }),
          },
        },
      },
      deleted: {},
    },
  });
};

export type DatabaseConnectionMachine = ReturnType<
  typeof createDatabaseConnectionMachine
>;
