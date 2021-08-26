import { DatabaseKind } from './database-kind';

export type Port = number;

export const DefaultPort: Record<DatabaseKind, Port> = {
  [DatabaseKind.PostgreSQL]: 5432,
  [DatabaseKind.MySQL]: 3306,
  [DatabaseKind.MSSQL]: 1433,
};
