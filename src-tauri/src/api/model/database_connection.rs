use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, PartialOrd, Ord, PartialEq, Eq)]
#[cfg_attr(debug_assertions, derive(Debug))]
pub enum DatabaseKind {
  #[serde(rename = "PostgreSQL")]
  PostgreSQL,
  #[serde(rename = "MySQL")]
  MySQL,
  #[serde(rename = "MSSQL")]
  MSSQL,
}
