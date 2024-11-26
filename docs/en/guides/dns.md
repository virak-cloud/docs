# Domain Hosting

You can manage your domains through the user panel in the [Domain Hosting menu](https://panel.virakcloud.com/dns/list).

<DarkModeImage
  dark-src="/images/guides/en/dark/dns/create-domain.webp"
  light-src="/images/guides/en/light/dns/create-domain.webp"
  alt="Domain Hosting"
/>

To do this, go to the Domain List submenu and create a new domain.
Note that the domain should be entered without www. After confirmation in the next step, you must register the Virak Cloud name servers (NS) through your domain registrar's panel or the website where you purchased your domain, or replace the previous name servers.

 <DarkModeImage
  dark-src="/images/guides/en/dark/dns/add-domain.webp"
  light-src="/images/guides/en/light/dns/add-domain.webp"
  alt="Enter Domain"
/>

::: info Note:
The Virak Cloud name servers will be displayed in the NS settings box.

 <DarkModeImage
  dark-src="/images/guides/en/dark/dns/add-ns.webp"
  light-src="/images/guides/en/light/dns/add-ns.webp"
  alt="Add NS"
/>

:::

After confirming and registering the domain, you can create DNS records through the Details menu and view reports related to your domain through the Logs menu.

## Logs
The reports in this section are based on the number of requests, types of requested records, and the location of requests based on geographical area.

 <DarkModeImage
  dark-src="/images/guides/en/dark/dns/log.webp"
  light-src="/images/guides/en/light/dns/log.webp"
  alt="DNS Logs"
/>

## Records

 <DarkModeImage
  dark-src="/images/guides/en/dark/dns/records.webp"
  light-src="/images/guides/en/light/dns/records.webp"
  alt="DNS Records"
/>

In the Records menu, you can perform the following
actions:

### Add New Record
You can create the following records:

  #### 1. A Record
  This record connects the IPv4 address of a domain to a specific IP address. It is used to specify the web hosting server address of the domain.

  #### 2. AAAA Record
  This is similar to the A record but is used for IPv6 addresses.

  #### 3. CNAME Record
  This record creates an alias for a domain and connects it to another domain that has an A or AAAA record. For example, it can connect www.example.com to example.com.

  #### 4. MX Record
  This record specifies which server the domain's emails should be sent to. Prioritization is also possible for multiple email servers.

  #### 5. TXT Record
  This record is used to store text information. It is used for various purposes such as domain ownership verification and configuring SPF or DKIM to prevent spam.

  #### 6. NS Record
  This record specifies which DNS servers are responsible for providing domain information.

  #### 7. PTR Record
  The PTR record associates an IP address with a domain. It is used to check the domain name related to the IP (Reverse DNS) and is usually used in incoming emails to check the authenticity of the sending server.

  #### 8. SRV Record
  The SRV record specifies which server provides a specific service (such as VoIP or chat services).

  #### 9. TLSA Record
  This record is used to store TLS certificate information related to a specific service and is used to improve TLS communication security and verify server identities in DNSSEC.

---

### Import Record File
If you already have a file of your records or have backed it up through other panels, you can import them all at once.

### Download Record File
If you need a backup of your records, you can download them.

### Delete Domain
This action will delete your domain.

## Delete a Domain
To delete a domain:
1. Go to the Domain Hosting menu.
2. Find the domain you want to delete in the list of domains.
3. Click on the delete icon next to the domain.
4. Confirm the action by clicking "Yes" in the popup dialog.

Note: Deleting a domain is a permanent action and cannot be undone. Make sure you really want to delete the domain before confirming the action.
