# Network Information
::: warning Note:
 Layer 2 network settings only provide us with information such as connected clouds and network specifications.
:::

Details of layer 2 + 3 networks include the following.

## Details
### Configuration Information
 By creating a private network of the virtual router type, the user specifies their gateway IP address, which they can view in this section. The IPv6 address will be selected automatically.

### Public IPs
As soon as a private network of the virtual router type is created and the first cloud is connected to it, the virtual router will receive a visible public IP address by default, which will be used as the Source NAT operation to establish communication between the connected clouds to the outside network.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/public-ip.webp"
  light-src="/images/guides/en/light/networks/public-ip.webp"
  alt="Public IPs"
/>

::: warning Note:
The default public IP address is non-removable and non-deletable and will only be deleted by deleting the network. The user will be allowed to add additional public IP addresses to their virtual router by selecting the Connect IP option and use them for PortForwarding as well as the Static NAT operation to transfer all their traffic and protocols to a cloud with a specific address. After connecting the IP, a new IP will be added, and if we do not intend to use Static NAT, we can use it in the firewall, port forwarding, and load balancing sections. By selecting Add New Static NAT and choosing an IP address from the existing clouds in the next step, all traffic to the desired public IP will be transferred to the selected IP from the desired cloud.
:::

::: warning Note:
If the intended public IP is used for the static NAT operation, we will only have firewall operations for it and will not be able to use it in other sections.
:::
