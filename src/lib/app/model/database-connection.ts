import * as uuid from 'uuid';
import { DatabaseKind } from './database-kind';

export interface DatabaseConnection {
  id: string;
  kind: DatabaseKind;
  name: string;
  address: string;
  port: number;
  user: string;
  password: string;
}

export function createDatabaseConnection(
  data: Omit<DatabaseConnection, 'id'>,
): DatabaseConnection {
  return {
    id: uuid.v4(),
    ...data,
  };
}
