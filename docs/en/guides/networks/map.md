# Network Map

In [this section](https://panel.virakcloud.com/instances/network/network-map) you can see all the public and private networks of the selected data center, together with the servers connected to them, in a single diagram. At a glance, you can tell which networks each server is connected to and what IP it has in each one. To open it, click **Network Topology** under **Cloud Network** in the sidebar.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/network-map.webp"
  light-src="/images/guides/en/light/networks/network-map.webp"
  alt="Network Topology"
/>

## Reading the Diagram

The diagram has three rows: public networks at the top, private networks in the middle, and servers at the bottom.

| Icon              | Meaning                         |
| ----------------- | ------------------------------- |
| Cloud             | A public network (the internet) |
| Router + Firewall | A private Layer 2 + 3 network   |
| Switch            | A private Layer 2 network       |
| Computer          | A cloud server                  |

- **A line between two icons** means that server is connected to that network.
- **The number on a line** is the server's IP in that network.
- **The words "Default network" under a line** mean that network is that server's default network.

For the differences between the networks, see the [List of Networks](/en/guides/networks/list).

## Working with the Diagram

- You can drag the nodes (networks and servers) to make the diagram easier to read.
- Scroll to zoom.
- **Reset zoom:** Adjusts the diagram so it fits fully on the screen.
- **Reset node positions:** Returns the nodes to their original layout.

## When Is the Map Useful?

- Before you set up a [firewall](/en/guides/networks/details/firewall) or [port forwarding](/en/guides/networks/details/port-forward), to see exactly which network a server is connected to.
- When you need a server's IP in a private network.
- To check which network is each server's default.

::: tip Note
The map is view-only. To connect a server to a network or disconnect it, go to the [List of Networks](/en/guides/networks/list).
:::

::: warning Note

- The map only shows the networks and servers of the data center selected at the top of the page.
- If the map doesn't update after a change (for example, connecting or disconnecting a server), reload the page.
  :::
