# v4 and v6 Firewalls

Firewalling allows you to define inbound and outbound traffic rules for the desired network.
By default, after creating a private network of the virtual router type, default permissions will be created for all inbound traffic to the public address and outbound traffic from the private addresses of the desired network.
The rules have priority, and for increased security, a no-access rule is created for each type of inbound and outbound traffic. If the user wants to grant access to certain traffic, they can create a new access rule in this section.

::: warning Note:
Overlapping rules will not be created and will generate a warning.
:::


## Add Firewall
In this section, you can create your desired firewall.


<DarkModeImage
  dark-src="/images/guides/en/dark/networks/add-firewall.webp"
  light-src="/images/guides/en/light/networks/add-firewall.webp"
  alt="Create firewall"
/>

Users can create rules for inbound and outbound traffic permissions by selecting the following components:
- Traffic type
- Protocol type
- Open ports
- Source address
- Destination address

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/firewall-entry.webp"
  light-src="/images/guides/en/light/networks/firewall-entry.webp"
  alt="Firewall entry"
/>
