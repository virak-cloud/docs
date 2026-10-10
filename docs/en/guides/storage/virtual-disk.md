# Disks

In [this section](https://panel.virakcloud.com/instances/volumes), you can view the list of disks you have added to your cloud servers and make necessary changes to these disks.

<DarkModeImage
  dark-src="/images/guides/en/dark/storage/virtual-disk/disk-list.webp"
  light-src="/images/guides/en/light/storage/virtual-disk/disk-list.webp"
  alt="Disk list"
/>

## Create Disk

You can use this option to create an additional disk of any desired size.

<DarkModeImage
  dark-src="/images/guides/en/dark/storage/virtual-disk/disk-create.webp"
  light-src="/images/guides/en/light/storage/virtual-disk/disk-create.webp"
  alt="Create Disk"
/>

> **Note:** Creating a disk will not automatically connect it to a cloud server. You must use the "Connect to Cloud Server" option to link the disk.

::: warning Note
To attach a disk to a cloud server, the server must be **running** and must **not have any snapshots**. If the server has snapshots, delete them first from the [cloud server details page](/en/guides/instances/details#snapshots).
:::

## Delete Disk

If a disk is not connected to any cloud server, the user can delete it.
