# instance Details

In this section, the user can manage the created instance and monitor the status of all resources.


<DarkModeImage
  dark-src="/images/guides/en/dark/instances/instance-details.webp"
  light-src="/images/guides/en/light/instances/instance-details.webp"
  alt="Instance Details"
/>


## The first row includes the following:

- **Shut down:** Turns off the instance.
- **Restart:** Reboots the instance.
- **Upgrade:** Allows the user to upgrade the instance if it is turned off.
- **Rebuild:** Rebuilds the current instance completely with a new template.
- **Rename:** Allows you to change the name of the instance.
- **Delete instance:** Deletes the instance.
- **Server Location:** The data center associated with the instance.
- **Username:** The username for logging into the instance.
- **Password:** The password associated with the username.
- **Cost of running server:** The cost of running the server, calculated per hour when it is on.
- **Cost of server when off:** The cost of the server when it is turned off, calculated per hour.

## The second row includes the following:

### instance Details:

This section provides network and service information related to the instance.

#### Network Information:

All network interfaces connected to the instance, including details such as IP addresses, MAC addresses, network type, and the number of additional IPs connected to the instance, can be viewed in this section.

::: tip Note 1
If the user has connected their instance to multiple networks, they can use the available menu to select one of the networks as the default. Please note that changing to the default option requires reconfiguring the instance’s routing table and addressing structure. To apply the changes automatically, restart the instance and ensure the system’s routing table and addressing configuration are correct.
:::

::: tip Note 2
Except for Layer 2 networks, where IP address configuration must be done by the user, it is possible to add more IP addresses for public and private Layer 2 + 3 networks. This can be done through the available menu by adding a **secondary IP**. You can view them under the **Secondary IPs** section.
:::

#### Service Information:

Service information includes the specifications of the resources that the user created when setting up the instance.

::: tip
After upgrading the instance, this section will also be updated.
:::

### Graphs:

Resource consumption measurements used by the instance are recorded and can be viewed through the **Graphs** tab for different time periods.

### Console:

If for any reason the remote connection to the instance encounters an issue, the user can connect to their instance through the **Console** tab and access it from the panel. Users can also use the **Restart Console** and **Open in New Tab** options for ease of use.

::: tip
The console inside the panel includes a plugin that features shortcut keys and a copy/paste box, which the user can utilize while working with the console.
:::

### Snapshots:

**Snapshots** are a feature that allows you to take an instant copy of the instance, which can be restored when needed. If you need to make changes to the instance but are unsure of their impact, you can use this feature to save a copy of the instance and restore it in case of an issue.

### Additional Disk:

**Additional Disk** is a feature that allows the user to add more disks to the instance, in addition to the primary disk created when setting up the instance. This is typically done to address the lack of initial storage, utilize the LVM feature, or separate storage for databases and other purposes.

::: tip
The disk icon takes you to the disk list, where you can create multiple disks and attach them to your instances.
:::

### Events:

Any event that changes the current status of the instance is recorded and viewable in this section.
