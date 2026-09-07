# Create Database

## Introduction ​

This page lets you create a new database inside the namespace you opened it from. The database will be created in the same namespace and datacenter as its parent, so you don't need to select them again.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/create-database.png"
  light-src="/images/guides/en/light/database/create-database.png"
  alt="Create Database"
/>

## Database Name ​

Enter a unique name for your database in the **Database Name** field. This name is used to identify the database later in the [list of databases](./database-list.md).

## Select Database ​

Choose the database engine you want from the available cards:

- **MySQL** — proxy type: haproxy, engine type: PXC
- **PostgreSQL** — proxy type: pgbouncer, engine type: POSTGRESQL
- **MongoDB** — proxy type: mongos, engine type: psmdb

Each card also shows the exact engine version that will be installed (e.g., MySQL 8.4.7-7.1).

## Hardware Selection (per node) ​

Choose a hardware plan based on the resources your database needs. Three plans are available — **small**, **medium**, and **large** — each showing:

- CPU cores
- Memory (RAM)
- Disk space (NVMe)
- Currently active connections supported
- Hourly price (per node)
- Estimated monthly price

Pick the plan that matches your expected workload; you can upgrade resources later without rebuilding the database.

## Order Summary ​

As you make your selections, the panel on the right updates live with:

- **General Information**: database name, namespace, and number of engine replicas.
- **Data Center**: server location and datacenter name, inherited from the namespace.
- **Database Specifications**: selected engine, engine type, version, and proxy type.
- **Hardware Plan**: plan name, CPU, memory, disk space, and storage class.
- **Price**: final hourly and monthly cost.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/create-database-sidebar.png"
  light-src="/images/guides/en/light/database/create-database-sidebar.png"
  alt="Database Order Summary"
/>

Review this summary carefully before ordering, then click the **Order** button to create your database.

::: tip Note
After placing the order, it may take a few minutes for the database to become ready. You can track its status from the [list of databases](./database-list.md).
:::
