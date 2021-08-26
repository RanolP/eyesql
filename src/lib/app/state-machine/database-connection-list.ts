import { ActorRefFrom, assign, createMachine, spawn } from 'xstate';
import { DatabaseConnection } from '../model/database-connection';
import {
  createDatabaseConnectionMachine,
  DatabaseConnectionMachine,
} from './database-connection';

export type DatabaseConnectionWithRef = DatabaseConnection & {
  ref: ActorRefFrom<DatabaseConnectionMachine>;
};

export interface DatabaseConnectionListMachineContext {
  databaseConnections: DatabaseConnectionWithRef[];
}

export type DatabaseConnectionListMachineEventCreateTodo = {
  type: 'CREATE_TODO';
  databaseConnection: DatabaseConnection;
};

export type DatabaseConnectionListMachineEventPersist = {
  type: 'PERSIST';
};

export type DatabaseConnectionListMachineEvent =
  | DatabaseConnectionListMachineEventCreateTodo
  | DatabaseConnectionListMachineEventPersist;

export const DatabaseConnectionListMachine = createMachine<
  DatabaseConnectionListMachineContext,
  DatabaseConnectionListMachineEvent
>({
  id: 'database-connection-list',
  context: {
    databaseConnections: [],
  },
  initial: 'loading',
  states: {
    loading: {
      entry: assign({
        databaseConnections: (context: DatabaseConnectionListMachineContext) =>
          context.databaseConnections.map((connection) => ({
            ...connection,
            ref: spawn(createDatabaseConnectionMachine(connection)),
          })),
      }),
      always: 'ready',
    },
    ready: {},
  },
  on: {
    CREATE_TODO: {
      actions: [
        assign({
          databaseConnections: (
            context: DatabaseConnectionListMachineContext,
            event: DatabaseConnectionListMachineEventCreateTodo,
          ) => {
            const machine = spawn(
              createDatabaseConnectionMachine(event.databaseConnection),
            );
            const newConnection: DatabaseConnectionWithRef = {
              ...event.databaseConnection,
              ref: machine,
            };

            return [newConnection, ...context.databaseConnections];
          },
        }),
        'PERSIST',
      ],
    },
    PERSIST: {
      actions: (context) => {
        try {
          console.log(context);
          // TODO persist
        } catch (e) {
          console.error(e);
        }
      },
    },
  },
});

export type DatabaseConnectionListMachine =
  typeof DatabaseConnectionListMachine;
