# Create Network

In Virak Cloud, you can create dedicated private networks to connect your cloud servers. To start creating a network, go to **Private Network** in the sidebar and click the **Create New Network** button, or use the direct links below:

- [Create Virtual Switch (Layer 2)](https://panel.virakcloud.com/instances/network/list?createNetwork=true&layer=l2)
- [Create Virtual Router (Layer 2 + 3)](https://panel.virakcloud.com/instances/network/list?createNetwork=true&layer=l3)

::: tip Log In to the Panel
Before clicking the links above, make sure you are logged into the [Virak Cloud Panel](https://panel.virakcloud.com/); otherwise, you will be redirected to the login page first.
:::

## 1. Network Layer Selection

In the first section of the dialog, select your network architecture:

| Network Type                          | Layer       | Description & Use Case                                                                                                                                                                        |
| ------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Virtual Switch** (`virtual switch`) | Layer 2     | Direct, secure, and raw Layer 2 communication between server network interfaces without internet access. IP addressing must be configured manually inside each server's operating system.     |
| **Virtual Router** (`virtual router`) | Layer 2 + 3 | A private network powered by a virtual router. Provides automated IP addressing, outbound internet connectivity (Source NAT), edge firewall, port forwarding, load balancing, and VPN access. |

### Virtual Switch (Layer 2 Private Network) {#l2}

This type of network is used solely to establish a Layer 2 communication platform for cloud instances. By setting IP addresses in a common subnet on instances connected to this network, the user can establish secure, internal communication between them. No virtual router is provisioned, and there is no direct connection to the public internet.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/create-network-switch.webp"
  light-src="/images/guides/en/light/networks/create-network-switch.webp"
  alt="Network Layer Selection - Virtual Switch"
/>

### Virtual Router (Layer 2 + 3 Private Network) {#l3}

As soon as this network is created, the system provisions a dedicated virtual router for it. In this section, you can choose a name for your private network and determine your internal network range. The IP address you select in the Network Gateway section will be configured as the gateway on your internal network's virtual router. Internal virtual machines will also receive IP addresses from this range with a `/24` subnet. With the router in place, services such as internet access (Source NAT), edge firewalls, port forwarding, load balancing, and VPN connections become available.

## 2. Choosing Offering (Resource and Bandwidth Plan)

After choosing the layer type, available network offerings corresponding to that layer are listed:

### For Virtual Router (Layer 2 + 3):

- **Offering Title:** Identifies the service model:
  - **Dedicated BW vRouter:** Guaranteed, dedicated bandwidth with unlimited free download traffic (ideal for consistent, production workloads).
  - **vRouter (Metered):** Standard bandwidth offering with a free monthly download quota and transparent pricing for overage traffic.
- **Protocol:** Supported IP stack (native dual stack with `IPv4 + IPv6`).
- **Network Rate:** Port bandwidth throughput limit (e.g., 10, 100, 250, or 500 Mb).
- **Free Download:** Monthly included download traffic quota (e.g., 10 GB or Unlimited).
- **Additional Download:** Price per additional GB consumed beyond the free quota.
- **Hourly:** Pay-as-you-go hourly cost for the virtual router.

### For Virtual Switch (Layer 2):

Because a Layer 2 virtual switch does not connect to the internet, columns for protocol and download traffic are omitted. Only the following specifications are shown:

- **Offering Name:** Virtual switch plan name (`vSwitch`).
- **Network Rate:** Inter-server communication throughput rate (e.g., 250 or 500 Mb).
- **Hourly:** Hourly cost for the switch.

## 3. Basic Information

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/create-network-router.webp"
  light-src="/images/guides/en/light/networks/create-network-router.webp"
  alt="Network Basic Information Form"
/>

Complete the network identification and addressing details:

1. **Network Name:**
   - A descriptive name using English letters and numbers (maximum 50 characters).
   - Persian characters are not permitted.

2. **Network Gateway (Virtual Router only):**
   - The private IP address assigned to the virtual router, configured as the default gateway on instances connected to this network. Defaults to `192.168.1.1`.
   - Permitted private IPv4 ranges:
     - Class C: `192.168.X.X` (where 3rd and 4th octets are between 1 and 254).
     - Class B: `172.16.X.X` to `172.31.X.X` (where 2nd octet is 16–31, and 3rd and 4th octets are between 1 and 254).

3. **Network Subnet Address (Virtual Router only):**
   - This field is disabled and locked to `255.255.255.0` (a `/24` subnet), supporting up to 254 private host addresses.

::: tip Virtual Switch Addressing
When creating a Virtual Switch (Layer 2), the gateway and subnet fields are hidden completely, leaving only the **Network Name** field to fill out.
:::

## Important Prerequisites

::: warning Creation Requirements

- If your account has an outstanding balance/debt, the network creation will be blocked and the "create network" button disabled until settled.
- After clicking **Confirm**, the network enters a provisioning state and appears in your network list after a few moments.
  :::
