# List of Namespaces

## Introduction ​

In [this section](https://panel.virakcloud.com/dbaas), you can view all the namespaces you have created for the Database service. A namespace is a workspace that groups the databases belonging to the same application or team together.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/namespace-list.png"
  light-src="/images/guides/en/light/database/namespace-list.png"
  alt="List of Namespaces"
/>

## Table Columns ​

For each namespace, the following information is displayed:

- **Number**: The row number.
- **Name**: The name you chose for the namespace.
- **Creation Date**: The date the namespace was created.
- **Active**: Whether the namespace is currently active.
- **Status**: The current provisioning status of the namespace.

## Actions ​

Each namespace has the following actions available:

- **View Details**: Opens the [list of databases](./database-list.md) inside this namespace.
- **Manage Backup Storage**: Connects or removes the storage used for automatic/manual database backups within this namespace.
- **Delete**: Permanently deletes the namespace.

::: warning Note
A namespace can only be deleted if it does not contain any databases. If one or more databases still exist inside the namespace, the delete button is disabled until they are removed.
:::

## Creating a Namespace ​

To create a new namespace, click the **Create Namespace** button at the top of the namespace list.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/create-namespace.png"
  light-src="/images/guides/en/light/database/create-namespace.png"
  alt="Create Namespace"
/>

In the dialog that opens, enter a name for the namespace. As you type, the panel validates the name in real time and shows which rules are met:

- The name cannot be empty.
- Only English keyboard characters are allowed (no Persian characters).
- Only lowercase letters, numbers, and hyphens are allowed.
- The name must start and end with a letter or a number, not a hyphen.
- The name must follow the allowed length limit shown in the validation list.

Each rule turns green once satisfied. Once all the rules are met, the **Confirm** button becomes enabled. Click **Confirm** to create the namespace.


## Backup Storage ​

Every namespace can be connected to a single storage bucket. Once connected, all databases inside that namespace automatically save their backups to this bucket — you do not need to configure backup storage separately for each database.

### Connecting a Storage ​

If no storage is connected yet, clicking **Manage Backup Storage** opens a dialog with two tabs:

- **Our Object Storage**: Select a datacenter and directly pick one of your existing Virak Cloud Object Storage buckets. Once you choose a bucket, its details (bucket name, endpoint URL, region, and access key) are shown automatically.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/backup-storage/our-storage.png"
  light-src="/images/guides/en/light/database/backup-storage/our-storage.png"
  alt="Virak Cloud Object Storage"
/>

- **Custom (S3)**: Connect any other S3-compatible storage by entering the storage name, endpoint URL, bucket name, region, access key, and secret key. You can also enable **Force Path Style** and **Verify TLS certificate** depending on your storage provider's requirements.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/backup-storage/custom-storage.png"
  light-src="/images/guides/en/light/database/backup-storage/custom-storage.png"
  alt="Custom Object Storage"
/>

After filling in the required fields, click **Confirm** to connect the storage to the namespace.

### Viewing a Connected Storage ​

If a storage is already connected, clicking **Manage Backup Storage** shows its details instead:

- Storage Name
- Bucket Name
- Status
- Created At

From here, you can also **Delete** the connected storage to disconnect it from the namespace.

<DarkModeImage
  dark-src="/images/guides/en/dark/database/backup-storage/connected-backup-storage.png"
  light-src="/images/guides/en/light/database/backup-storage/connected-backup-storage.png"
  alt="Connected Backup Storage"
/>
