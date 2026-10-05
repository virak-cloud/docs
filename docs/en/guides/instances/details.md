# Cloud Server Details

On this page you can manage a cloud server, see its resources, and monitor their usage. To open it, click the server name or the eye icon in the [list of cloud servers](/en/guides/instances/list).

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/instance-details.webp"
  light-src="/images/guides/en/light/instances/instance-details.webp"
  alt="Cloud server details"
/>

## Page Header

At the top you can see the server name, a status (for example, "Up"), and the operating system name and version. If you created the server from the [Marketplace](/en/guides/instances/create/marketplace), the ready-to-use app name is shown instead.

### Page Alerts

A yellow alert is shown at the top of the page in two cases:

- **Server created from the Marketplace:** While the server is running, an alert asks you to finish the remaining steps of building the app using the **Instance Console**. Click "Instance Console" to jump to the Console tab, or "(Read More)" to open the [Marketplace](/en/guides/instances/create/marketplace) guide. You can close the alert, and it won't appear again for that server.
- **Dedicated server with ESXi or Proxmox:** To continue and keep the server secure, set the password of the `root` user through the console and then log in using the server address. For ESXi the address is `http://Your_Address`, and for Proxmox it is `http://Your_Address:8006`.

## Server Actions

The action bar at the top of the page has the buttons below. A button that can't be used in the server's current state is disabled, and hovering over it shows the reason.

| Action      | Purpose                                              | When is it available?                                              |
| ----------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| Start       | Turn the server on                                   | When the server is not running                                     |
| Stop        | Turn the server off (with a force stop option)       | When the server is not stopped or suspended                        |
| Rename      | Change the server name                               | When no other operation is running and the server isn't suspended  |
| Reboot      | Restart the server                                   | Only when the server is running                                    |
| Scale       | Change the server plan (CPU, memory, disk, etc.)     | Only when the server is **stopped**                                |
| Rebuild     | Reinstall the server with a different OS or template | When no other operation is running and the server isn't suspended  |
| Access keys | Show the server's username and password              | When the server is not waiting or suspended                        |
| Delete      | Delete the server                                    | When no other operation is running (also possible while suspended) |

- **Start, Stop, and Reboot:** A confirmation dialog appears before they run. In the Stop dialog you can also enable force stop.
- **Rename:** Enter the new name in a dialog.
- **Scale:** A dialog with a list of plans opens, and you choose the new plan.
- **Access keys:** A dialog shows the server's username and password, and you can copy each one. The password is hidden by default and you can reveal it.

### Deleting a Server

Click **Delete** to open the "Request to delete instance" dialog. To confirm, you must type the **instance name** in the box. If you change your mind, close the dialog.

After you confirm, the message "The request to delete the cloud server has been registered" appears and you are returned to the server list. While it is being deleted, the server shows a deleting status in the list until the deletion finishes.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-delete.webp"
  light-src="/images/guides/en/light/instances/details-delete.webp"
  alt="Delete cloud server dialog"
/>

::: warning Rebuild
Rebuilding erases all the data on the cloud server completely, and the server is created again with the new operating system. Back up your important data before you rebuild.
:::

## Page Tabs

Below the action bar there are six tabs. Some of them are disabled in certain states (for example, when the server is stopped).

| Tab                  | Disabled when the server is ...                                |
| -------------------- | -------------------------------------------------------------- |
| Cloud server details | Never                                                          |
| Charts               | Stopped, suspended, rebooting, rebuilding, scaling, or waiting |
| Console              | Same as Charts                                                 |
| Snapshots            | Suspended, rebooting, rebuilding, scaling, waiting             |
| Additional disk      | Same as Snapshots                                              |
| Events               | Waiting                                                        |

If you are on the Charts or Console tab and the server stops, the page returns to the Details tab automatically.

### Cloud Server Details

This tab has two cards: **Network information** and **Service information**.

#### Network Information

Each network connected to the server has its own card. If the server is connected to several networks, use the arrows beside the card (shown when you hover over it) to move between them. On large screens, two cards may be shown side by side.

The top of each card shows the network name and its type (Layer 2, private Layer 2 + 3, or public). A green dot next to the network icon marks the default network. Each card shows:

- **IPv4:** The server's IP address on that network, with a copy button.
- **IPv6:** The IPv6 address (with a copy button), if the network has one. Otherwise the **network rate** (in Mb) is shown here instead.
- **Mac address:** The network card's MAC address, with a copy button.
- **Type:** The network type.
- **Secondary IP:** The number of secondary IPs (not shown for Layer 2 networks).

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-network-card.webp"
  light-src="/images/guides/en/light/instances/details-network-card.webp"
  alt="Network information card"
/>

::: tip Default network
If the server is connected to several networks, you can set one as the default from that network's "…" menu. After you confirm, a loading icon is shown until the change finishes.

This option is only available when the network isn't already the default, no other operation is running, the server is running or stopped (not in another state), and **the server has no snapshots**. If you have snapshots, delete them first.

Changing the default network requires reconfiguring the server's routing table and addressing. To apply the changes automatically, reboot the server and check that the address and routing configuration inside the operating system is correct.
:::

::: tip Secondary IP
For public and private Layer 2 + 3 networks, you can add more IP addresses to the server from the card's "…" menu. Each network allows up to 10 secondary IPs. For Layer 2 networks this isn't available, and you must configure the IP address yourself.
:::

To see the secondary IPs, click the number next to "Secondary IP" (if the counter is zero, clicking does nothing). The list of IPs opens, and each IP has a delete button. Use the arrow button at the top of the card to go back to the main view. Adding and removing a secondary IP takes a little while, and a success message appears when it finishes.

#### Service Information

The specifications of the resources you chose when creating the server: the plan name, data center, hourly cost while running and while stopped, CPU, memory, CPU speed, disk space, network rate, and disk IOPS. This section changes after you scale the server.

### Charts

Four charts show resource usage: CPU (percent), memory, disk IOPS, and network traffic (read and write). For each chart, choose a period from the "Period" list: 1 hour, 4 hours, 1 day, 2 days, 3 days, or 1 week. Use the mouse wheel (or pinch on a touch screen) to zoom in on the time axis. If there is no data, a "no data" message is shown.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-charts.webp"
  light-src="/images/guides/en/light/instances/details-charts.webp"
  alt="Resource usage charts"
/>

### Console

If remote access to the server (such as SSH or RDP) has a problem, you can use the Console tab to connect directly from the panel. The console only works while the server is running. Two buttons sit above it:

- **Refresh:** Reconnects the console.
- **Full screen:** Opens the console in a new browser tab.

On small screens (mobile), a message is shown over the console, and it's easier to use on a larger screen.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-console.webp"
  light-src="/images/guides/en/light/instances/details-console.webp"
  alt="Cloud server console"
/>

::: tip Console plugin
The console in the panel includes a plugin with shortcut keys and a copy/paste box.
:::

### Snapshots

A snapshot is an instant copy of the server that you can return to later. When you want to make a change whose effect you're not sure about, take a snapshot first so you can go back if something goes wrong.

Use the **Create snapshot** button to take a new snapshot. The snapshot table has these columns:

- **Number** and **Name** of the snapshot. A green dot next to a name marks the snapshot the server is currently based on.
- **Status** of the snapshot.
- **Date** it was created.
- **Parent**: the earlier snapshot this one was taken from.
- **Actions**: two buttons to **revert** the server to that snapshot (with a confirmation dialog) and to **delete** it.

While an operation is running on the server or one of the snapshots (for example, a revert), the create button and the action buttons are disabled, and hovering over them shows the reason. If you haven't created any snapshot yet, an empty page with a create snapshot button is shown.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-snapshots.webp"
  light-src="/images/guides/en/light/instances/details-snapshots.webp"
  alt="Snapshot list"
/>

::: warning Note
While a server has snapshots, you can't change its default network.
:::

### Additional Disk

This tab shows the disks you have attached to the server in addition to its primary disk. The table shows the number, name, size (in GB), and actions (including detaching a disk from the server). The **Attach disks** button takes you to the [Virtual Disks](/en/guides/storage/virtual-disk) page, where you can create a disk and attach it to a server. If you haven't attached any disk, an empty page with the same button is shown.

Additional disks are usually used when you run out of initial space, to use LVM, or to keep database and other data on a separate disk.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-volumes.webp"
  light-src="/images/guides/en/light/instances/details-volumes.webp"
  alt="Additional disks of the server"
/>

### Events

Any event that changes the server's state (such as start, stop, reboot, scale, and rebuild) is recorded in this tab. The table shows the number, event, date, and time. Above the table you can search the events, filter them by date, and change the number of rows shown (default 5).

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/details-events.webp"
  light-src="/images/guides/en/light/instances/details-events.webp"
  alt="Server events"
/>
