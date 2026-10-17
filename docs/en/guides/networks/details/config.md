# Network Configuration

In the network details page, the **Network Configuration** tab allows you to view internal network settings and manage public IP addresses assigned to your virtual router.

::: warning Note
This section is only available for **Virtual Router (Layer 2 + 3)** networks. In **Virtual Switch (Layer 2)** networks, because there is no router, the details page contains **only a single tab: "Connected Cloud Servers"**.
:::

## Network Configurations

This card shows the internal IP settings configured on your virtual router. You can copy any address using the copy icon beside it:

- **IPv4:**
  - **Gateway:** The private IP address of the virtual router set during creation (e.g., `192.168.1.1`).
  - **Subnet Mask:** The fixed internal subnet mask, always set to `255.255.255.0` (a `/24` subnet).
- **IPv6:**
  If your network plan supports both IP versions (`IPv4 + IPv6`), the IPv6 gateway and subnet mask (automatically allocated by the system) are displayed here. On IPv4-only networks, this tab is disabled.

## Public IPs

The virtual router uses public IP addresses to connect servers to the internet and receive inbound traffic.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/public-ip.webp"
  light-src="/images/guides/en/light/networks/public-ip.webp"
  alt="Public IPs table"
/>

### Table Columns

- **Number:** Row index.
- **IP Address:** Public IP address with a copy-to-clipboard button.
- **Created Date:** Time the IP was attached to the network.
- **SourceNAT:** Indicates which IP acts as the primary outbound address.
- **Actions:** Buttons to assign Static NAT and disassociate the IP.

### Default Public IP (SourceNAT)

As soon as the first cloud server connects to the virtual router, a public IP address is automatically assigned as the **SourceNAT** IP:

- Outbound internet traffic from servers in this network exits through this IP address.
- This default IP **cannot be disassociated or deleted**; it is released only when the entire network is deleted.
- Static NAT cannot be configured on the SourceNAT IP, but you can use it for Port Forwarding, Load Balancing, and Firewall rules.

### Adding a New Public IP (Associate IP)

If your applications require more public IPs, click the **Associate IP** button above the table to attach an additional public IP to your router. You can use this IP for Static NAT, Port Forwarding, or Load Balancing.

### Disassociating an IP

To release an additional public IP you no longer need, click the red cross icon (**Disassociate**) in that IP's row.

::: tip Note
The disassociate button is always disabled for the default SourceNAT IP.
:::

## Static NAT

Static NAT maps all incoming traffic on a public IP directly to a single cloud server (a direct 1-to-1 relationship). You do not need to open or forward ports individually; any traffic hitting this public IP is sent straight to the selected server.

### Enabling Static NAT

1. In the public IPs table, click the **Assign Static NAT** button on the desired IP's row.
2. Select the destination cloud server from the list (if the server has multiple IPs, select the target IP).
3. Click Confirm to establish the connection.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/assign-staticnat.webp"
  light-src="/images/guides/en/light/networks/assign-staticnat.webp"
  alt="Assign Static NAT dialog"
/>

### Viewing and Removing Static NAT

When Static NAT is enabled on an IP, an expand arrow appears on its row. Clicking it displays:

- Connected cloud server name
- Internal server IP
- Connection timestamp
- The **Delete Static NAT** button (trash icon) to disconnect the mapping

::: warning Important Note on Static NAT
When a public IP is assigned to Static NAT, all its traffic goes directly to that server; therefore:

- This IP is **no longer selectable** under **Port Forwarding** or **Load Balancing**.
- To restrict or control traffic reaching this IP, use **Firewall** rules.
  :::
