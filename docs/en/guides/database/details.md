# Database Details

## Introduction ​

This page shows full information about a single database and lets you scale it, view its connection credentials, manage backups, and monitor its resource usage. You can reach this page from the [list of databases](./database-list.md).

The header of the page shows the database name, its status (e.g., Ready), the engine and version, and three actions:

- **Scale**: Upgrade the database's hardware plan and number of engine replicas.
- **Credentials**: View the connection details needed to connect to the database.
- **Delete**: Permanently delete the database.

Below the header, the page is organized into three tabs: **Overview**, **Backup**, and **Monitoring**.

## Overview Tab ​

The Overview tab shows two cards:

- **Database Information**: namespace, engine type, proxy type, database version, number of engine replicas, and creation date.
- **Service Information**: the current plan name, data center, service cost, processor (CPU), memory, disk space, and the number of currently active connections.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/details/overview.png"
  light-src="/images/guides/en/light/database/details/overview.png"
  alt="Database Overview"
/>

### Scaling the Database ​

Clicking **Scale** in the header opens a dialog where you can:

- Increase or decrease the **number of engine replicas** using the stepper.
- Choose a different **hardware plan** (small, medium, or large), each showing CPU, memory, disk space, currently active connections, and hourly/monthly price.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/details/scale.png"
  light-src="/images/guides/en/light/database/details/scale.png"
  alt="Scale Database"
/>

After selecting the desired replicas and plan, click **Confirm** to apply the upgrade. This does not require rebuilding the database.

### Viewing Credentials ​

Clicking **Credentials** in the header opens a dialog showing the information needed to connect to your database:

- **Hostname**
- **Port**
- **Username**
- **Password**
- **URL**

::: warning Note
These credentials give full access to your database. Do not share them with anyone you don't trust.
:::

## Backup Tab ​

The Backup tab lets you schedule automatic backups, take instant backups, and view backup and restore history.

::: tip Note
Backup storage is not configured on this page. It is connected at the namespace level — see [Backup Storage](./namespace-list#backup-stoage) in the List of Namespaces guide. Once a storage is connected to the namespace, every database inside it automatically uses that storage for backups.
:::

### Before Connecting a Storage ​

If the namespace has no backup storage connected yet, the tab shows three empty sections, and the **Create Schedule** and **Backup Now** buttons are disabled until a storage is connected:

- **Backup Storage**: "No backup storage configured." — connect an S3-compatible storage to the namespace to enable database backups.
- **Schedule Backup**: "No backup schedule." — the **Create Schedule** button is disabled until a backup storage is connected to the namespace.
- **Backups**: "No backups yet." — the **Backup Now** button is disabled until a backup storage is connected to the namespace.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/details/backup/without-backup.png"
  light-src="/images/guides/en/light/database/details/backup/without-backup.png"
  alt="Backup Tab Without Storage"
/>

### After Connecting a Storage ​

Once the namespace has a backup storage connected, the **Create Schedule** and **Backup Now** buttons become active, and the tab shows:

- **Backup Storage**: storage name, bucket name, status, and creation date.
- **Schedule Backup**: the configured schedule (e.g., Daily at 2:00), its status and running status, creation date, last backup run, and next run time, with a **Delete** button to remove the schedule.
- **Backups**: a searchable, filterable list of all backups taken so far, showing name, state, destination path, created date, completed date, and latest restore. Each backup has **History**, **Restore**, and **Delete** actions. Use the **Backup Now** button at any time to take an instant backup.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/details/backup/with-backup.png"
  light-src="/images/guides/en/light/database/details/backup/with-backup.png"
  alt="Backup Tab With Storage"
/>

### Creating a Backup Schedule ​

Clicking **Create Schedule** opens a dialog where you can set up a recurring backup. Choose one of four schedule types:

- **Hourly**: runs every hour at a chosen minute.
- **Daily**: runs every day at a chosen hour and minute.
- **Weekly**: runs on a chosen day of the week, at a chosen hour and minute.
- **Monthly**: runs on a chosen day of the month, at a chosen hour and minute.

The fields shown in the dialog change depending on the schedule type you select. A summary line confirms the schedule in plain language (e.g., "This schedule creates a backup of your database every day at 2:00").

<DarkModeImage
  dark-src="/images/guides/en/dark/database/details/backup/create-schedule.png"
  light-src="/images/guides/en/light/database/details/backup/create-schedule.png"
  alt="Create Backup Schedule"
/>

Click **Confirm** to activate the schedule.

### Restoring a Backup ​

To restore a database from a backup, click **Restore** next to the desired backup in the **Backups** list. You can track the progress and outcome of the restore from the **History** action next to that same backup, which shows the restore's status along with its start and end time.

## Monitoring Tab ​

The Monitoring tab shows real-time charts of your database's resource usage. Each chart lets you change the time period and refresh the data manually.

The following charts are always shown:

- **CPU**: processor usage over time.
- **Memory**: memory (RAM) usage over time.
- **Disk Read/Write**: combined disk write and disk read throughput.

In addition, one chart is shown based on your database engine:

- **PostgreSQL**: Transactions Per Second (TPS).
- **MySQL**: Queries Per Second (QPS).
- **MongoDB**: Queries Per Second (QPS).

<DarkModeImage
  dark-src="/images/guides/en/dark/database/details/monitoring.png"
  light-src="/images/guides/en/light/database/details/monitoring.png"
  alt="Database Monitoring"
/>
