export enum DatabaseKind {
  PostgreSQL = 'PostgreSQL',
  MySQL = 'MySQL',
  SQLite = 'SQLite',
  MSSQL = 'MSSQL',
}

export interface DatabaseConnection {
  kind: DatabaseKind;
  name: string;
}
