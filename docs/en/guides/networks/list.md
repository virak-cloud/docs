# List of Networks

In [this section](https://panel.virakcloud.com/instances/network/list) you can see the networks of the selected data center. From here you can create a new network, connect cloud servers to a network or disconnect them, delete a network, and open its details for more settings.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/network-list.webp"
  light-src="/images/guides/en/light/networks/network-list.webp"
  alt="List of networks"
/>

## Network Types

| Type                                     | Purpose                                                                                                                                        |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Public**                               | Connects a server to the internet. It is in the list by default and shown above the others. It can't be deleted and has no details page.       |
| **Private Layer 2** (virtual switch)     | Direct connection between your servers, without the internet. You set up IP addressing inside the operating system yourself.                   |
| **Private Layer 2 + 3** (virtual router) | A connection between servers where the panel handles addressing. Its details page offers a firewall, port forwarding, load balancing, and VPN. |

To create a private network and choose between these two types, see [Create Network](/en/guides/networks/create).

## Table Columns

The list shows 10 networks per page, with search and a rows-per-page option above it.

- **Name and type** of the network.
- **Protocol:** The internet protocol of the network.
- **Network rate:** The maximum network speed in Mb.
- **Connection status:** The number in the chip is the number of cloud servers connected to the network.
- **Actions:** Buttons to connect, disconnect, delete, and open details.

On small screens only the number, name, and type are shown, and the other columns appear when you expand a row.

## Creating a Network

The **Create Network** button opens a dialog on this same page. If you haven't created a network yet, the button is in the center of the page; otherwise it is at the top. If the button is disabled, your account doesn't have network access.

## Actions

| Action                     | Purpose                               | When is it disabled?                                                                   |
| -------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------- |
| **Connect to server**      | Connect a cloud server to the network | While another operation is running on this network                                     |
| **Disconnect from server** | Disconnect a server from the network  | When no server is connected, or another operation is running                           |
| **Delete**                 | Delete the network                    | For public networks, when a server is connected, or while another operation is running |
| **Details**                | Open the network's settings           | For public networks, or while the network is being deleted                             |

Hover over a disabled button to see why.

### Connecting a Server to a Network

Click **Connect to server**, choose a server from the list, and confirm. A server that is already connected to this network doesn't appear in the list.

::: warning Note
The server must be running to be connected to a network.
:::

### Disconnecting a Server from a Network

Click **Disconnect from server**, choose the server, and confirm. If this network is that server's default network, you see a warning message. Because the default network affects the network card configuration and routing inside the operating system, check the server's settings after you disconnect it.

### Deleting a Network

You can only delete a network when no server is connected to it. To confirm, you must enter the network name.

::: tip Note
To delete a network that has servers, disconnect the servers from it first.
:::

## Status Updates

After you submit an operation (create, connect, disconnect, or delete), the network row stays in a loading state and the list refreshes automatically. You don't need to reload the page.
