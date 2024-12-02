# Create Network

Through the [Create Network](https://panel.virakcloud.com/instances/network/list?createNetwork=true) menu, users can create a [private Layer 2 network](#l2) and a [private Layer 2 + 3 network](#l3).

## Virtual Switch (Private Layer 2 Network) {#l2}
This type of network is used solely to establish a Layer 2 communication platform for cloud instances. By setting IP addresses in a subnet on instances connected to this network, the user can establish internal communication between them.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/create-network-switch.webp"
  light-src="/images/guides/en/light/networks/create-network-switch.webp"
  alt="Create Virtual Switch"
/>


## Virtual Router (Private Layer 2 + Layer 3 Network) {#l3}
As soon as this type of network is created, the system assigns a virtual router that is not visible to the user.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/create-network-router.webp"
  light-src="/images/guides/en/light/networks/create-network-router.webp"
  alt="Create Virtual Router"
/>

In this section, you can choose a name for your private network and determine your internal network range. The IP address you select in the Network Gateway section will be configured as the gateway on your internal network's virtual router. Internal virtual machines will also receive IP addresses from this range with a /24 subnet.

::: warning Note:
In this section, you can create a cloud server network with dedicated bandwidth and unlimited traffic.
:::
