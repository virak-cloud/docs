# Managed Database

## Introduction ​

The **Managed Database** service lets you create and run production-ready databases without handling installation, configuration, security patching, or infrastructure management yourself. Just pick a database engine and a resource package — everything else is handled automatically.

## Supported Engines ​

Three database engines are currently supported, each available in several versions:

- **PostgreSQL**
- **MySQL**
- **MongoDB**

## Namespace Concept ​

Every database is created inside a **Namespace**. A Namespace is an isolated workspace that lets you group databases belonging to the same application or team together. You can create as many databases as you need inside a single Namespace.

## Key Features ​

- **Instant resource scaling**: Increase or decrease resources without downtime or rebuilding the database.
- **Simple and secure access**: Connection details are ready and available directly from the panel.
- **Instant or scheduled backups**: Set up hourly, daily, weekly, or monthly backup schedules, or take an instant backup at any time. Backups are stored in a Virak Cloud Object Storage bucket or any S3-compatible storage connected to the namespace.
- **Real-time monitoring**: Track CPU, memory, and disk read/write throughput, along with an engine-specific chart (transactions or queries per second).

## In This Section ​

- [List of Namespaces](./namespace-list.md)
- [List of Databases](./database-list.md)
- [Create Database](./create.md)
- [Database Details](./details.md)
