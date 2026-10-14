# Create a Cloud Server

In this guide you create a cloud server: you choose a name, an operating system, resources, and a network, and, if you need to, prepare a disk, an initial script, or an SSH key from the very start. Creating a server usually takes about 3 minutes.

## Before You Begin

- **Authentication:** Creating cloud servers isn't available until you complete [authentication](/en/guides/user/authentication).
- **Account credit:** Cloud server costs are calculated hourly. We recommend having at least 24 hours' worth of credit in your account before you create a server. If your account has a debt, the order won't be placed.
- **Data center:** The server is created in the data center selected at the top of the page. If the selected data center is inactive, a warning replaces the creation form and you need to choose another data center.

## Start Creating a Server

Open the **Cloud Server** page from the sidebar:

- If you don't have any servers in this data center yet, the **Create Instance** button is in the center of the page.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/create-entry-empty.webp"
  light-src="/images/guides/en/light/instances/create-entry-empty.webp"
  alt="Create Instance button on the empty page"
/>

- If you have already created one or more servers, the **Create Instance** button is in the top bar of the page, on the right.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/create-entry-list.webp"
  light-src="/images/guides/en/light/instances/create-entry-list.webp"
  alt="Create Instance button in the server list"
/>

::: tip Shareable link
The name, data center, operating system, plan, and network you choose are saved in the page address. To recreate the same configuration later, or to send it to a colleague, copy that address. The disk, initial script, and SSH key aren't saved in the address.
:::

## Step 1: Choose a Name

Give the server a recognizable name, for example one that shows its role (`web-01` or `db-staging`). The name must:

- Be between 3 and 30 characters long.
- Be written with an English keyboard (Persian names aren't accepted).

You can change the name later from the [cloud server details](/en/guides/instances/details) page.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/name.webp"
  light-src="/images/guides/en/light/instances/name.webp"
  alt="Cloud server name field"
/>

## Step 2: Choose an Operating System or a Ready-to-Use App

Here you decide what the server starts with. There are two tabs:

- **Operating system:** A clean operating system is installed, and installing software and configuring it is up to you. Choose this when you want full control.
- **Marketplace:** You pick a ready-made application and the server is created together with it. The list of applications and their configuration guides are in the [Marketplace guide](/en/guides/instances/create/marketplace).

If an operating system has several versions, click its card to open the list of versions and choose one. If it has only one version, a single click selects it.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/OS.webp"
  light-src="/images/guides/en/light/instances/OS.webp"
  alt="Select an operating system"
/>

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/marketplace.webp"
  light-src="/images/guides/en/light/instances/marketplace.webp"
  alt="Marketplace - ready-to-use applications"
/>

::: warning Order of selection
The plans you can choose depend on the selected operating system (or app). Every time you change the operating system or version, the list of plans is reloaded and your earlier plan selection is cleared. It's best to choose the operating system first and the plan after.
:::

::: tip Note
For servers created from the Marketplace, you finish the remaining installation steps through the console after the server starts. Details are in the [Marketplace guide](/en/guides/instances/create/marketplace).
:::

## Step 3: Choose Resources

Server resources (CPU, memory, disk, and network bandwidth) are offered as packages. Packages fall into 5 categories, based on the resource they are strongest in.

| Category            | Characteristic              | Good for                                        |
| ------------------- | --------------------------- | ----------------------------------------------- |
| `General`           | Balanced, average resources | Websites, small applications, test environments |
| `CPU Optimized`     | Stronger processor          | Heavy computing, compiling, video encoding      |
| `Memory Optimized`  | More memory (RAM)           | Caches and in-memory databases                  |
| `Storage Optimized` | More disk space             | File storage and large datasets                 |
| `Network Optimized` | Higher bandwidth            | Proxies and high-traffic services               |

Each plan shows its name, CPU (cores), memory (MB), disk space (GB), network rate (Mb), and its hourly and monthly price. The monthly price is calculated on the basis of 720 hours (30 days). A plan with the "Suggested" label fits most users. If a plan has a discount, the previous price is shown struck through next to the new price. Plans that are unavailable or not compatible with the selected operating system are grayed out and can't be selected.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/hardwareOffering.webp"
  light-src="/images/guides/en/light/instances/hardwareOffering.webp"
  alt="Choose resources"
/>

::: tip Note
If you aren't sure how many resources you need, start with a smaller plan. Later, you can stop the server and scale it from the [cloud server details](/en/guides/instances/details) page.
:::

## Step 4: Choose a Network

You must choose **at least one network** for the server (public or private). You can't place the order until a network is selected.

- **Public network:** Gives access to the internet and can be `IPv4` or `IPv6`. The first public network is selected automatically, and you can change it. If you want to connect the server only to a private network, click the public network again to deselect it.
- **Private network:** The Layer 2 and Layer 3 networks you have created yourself. Tick **Networks** to open the list and choose one or more of them. This option is only available to users who have network access. If you haven't created a private network yet, a button to create a (Layer 3) network is shown. For details, see the [Create Network guide](/en/guides/networks/create).

Each network appears as a card showing its name, type, network rate (Mb), and hourly price.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/network.webp"
  light-src="/images/guides/en/light/instances/network.webp"
  alt="Choose a network"
/>

### Default Network

After you select networks, the **Default network** table appears. The first row is the default automatically, and you can change it by clicking another row. A few notes:

- **Cost:** The cost of additional private networks is calculated separately and can be seen in the list of invoices.
- **Effect on the operating system:** Choosing a network as the default affects the network card configuration, addressing, and the routing table of the operating system.
- **Changing it later:** If you change the default network later, check the configuration inside the operating system too.

## Step 5: Additional Features

This step is optional. It helps you customize the server from the moment it is created.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/additional-feature.webp"
  light-src="/images/guides/en/light/instances/additional-feature.webp"
  alt="Additional features"
/>

### Additional Disk

If you need more storage in addition to the primary disk, tick **Disk** to open this section. You have two options:

- **Select an existing disk** from the disks you have already created.
- **Create a new disk** with the create disk button. The size and price of the new disk are shown, and you can remove it with the delete button if you change your mind.

On the create page you can add at most one additional disk, but after the server is created you can create and attach as many disks as you want, up to the limit shown for your account on the [main dashboard](/en/guides/dashboard). See the [Virtual Disks guide](/en/guides/storage/virtual-disk) for details. The cost of additional disks is calculated separately and can be seen in the invoices.

An additional disk is typically useful for keeping data (such as a database) apart from the operating system, using LVM, or adding space without changing the primary disk.

::: tip Using the disk inside the operating system
After you attach a disk to the server, you need to detect it and prepare it for use inside the operating system. First run `lsblk` to find the name of the new disk, and use that name instead of `sdX` in the guide's commands. The full commands are in the "Guide to connect disk" shown when you create a disk.
:::

### Initial Script (Cloud-init)

An initial script lets you configure the server on its first boot without logging in, for example to install packages or run commands. Tick **Initial script** to open a code editor with YAML highlighting. The script uses the [cloud-init](https://docs.cloud-init.io/en/latest/reference/examples.html) format and must start with the line `#cloud-config`. The editor has copy and full-screen buttons, and it shows YAML format errors right below the editor as you type.

Here is an example that updates the package index, installs `nginx`, and enables its service:

```yaml
#cloud-config
package_update: true
packages:
  - nginx
runcmd:
  - systemctl enable --now nginx
```

In this example, `packages` installs the packages and `runcmd` runs the commands only on the **first boot**.

::: warning Note

- The file must be valid YAML. A mistake in indentation or special characters (such as `:`) makes the script invalid, and the order button stays disabled.
- Package names depend on the operating system distribution. For example, `nginx` installs under this name on Ubuntu and Debian, but the package name may differ on another distribution.
- For more samples (such as creating users, writing files, and adding package repositories), see the [official cloud-init examples](https://docs.cloud-init.io/en/latest/reference/examples.html).
  :::

### SSH Authentication Key

With an SSH key, you can log in without typing the server password. The private key stays on your computer and only a signature is sent to the server. For key login to work, the server must have your public key, so select the key when you create the server. A key is an additional way to log in and doesn't remove the server password (in the "Access keys" dialog).

Tick **SSH key** to see the SSH keys saved in your account. You can select one or more keys for the server. Each key has its own menu: view details (name, creation date, and key value) and delete. Keys belong to your account, so you can reuse them on later servers.

To add a new key, click the add key box and enter these two items:

- **Display name:** Any name that helps you recognize the key.
- **Public key:** The contents of the public key on a **single line**, in English characters.

The accepted formats are `ssh-ed25519`, `ssh-rsa`, and `ssh-dss`. `ecdsa` keys aren't accepted. If you don't have a key, create one on your computer:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Enter the contents of the public key file (usually `~/.ssh/id_ed25519.pub`) in the panel. If `ed25519` isn't available, use `ssh-keygen -t rsa -b 4096`. Never enter or send the private key (the file without the `.pub` extension) anywhere.

#### Connecting to the Server with Your Key

After the server is created, log in with the server's username (shown in the "Access keys" dialog):

```bash
ssh USER_NAME@SERVER_IP
```

If your private key is in the default location (`~/.ssh/`), you don't need the server password. On the first connection, SSH shows the server's fingerprint and asks you to confirm; after you've made sure the address is correct, type `yes`. If the key is somewhere else, point to it with `-i`:

```bash
ssh -i /path/to/key USER_NAME@SERVER_IP
```

::: tip Note
If SSH asks for the server password, the key was probably not selected when you created the server, or SSH is using a different key. If you see `Enter passphrase for key`, that is the passphrase of the key file on your own computer, not the server password.
:::

### Initial Script or SSH Key?

You can't use both options at the same time: enabling the initial script disables the SSH key option and clears the selected keys. For **dedicated** plans (the `DEDICATED` category), both options are disabled.

| Your need                                                 | Recommended choice                                              |
| --------------------------------------------------------- | --------------------------------------------------------------- |
| Log in with a key                                         | SSH key                                                         |
| Install software or configure automatically on first boot | Initial script                                                  |
| Both                                                      | Initial script, with the key included in the script (see below) |

If you want both automatic configuration and key-based login, put your public key inside the cloud-init script itself:

```yaml
#cloud-config
ssh_authorized_keys:
  - ssh-ed25519 AAAA... you@example.com
packages:
  - nginx
```

A key under `ssh_authorized_keys` is added to the authorized keys file of the default user or the first user defined.

## Step 6: Review and Order

The order summary is shown in the side column of the page (on the right in English) and stays in place as you scroll. On small screens, it opens with the order button at the bottom of the page. Check these sections in it:

- **Server information:** The server name.
- **Data center:** The location and name of the data center.
- **Operating system:** The name, operating system, and version (or the name and version of the ready-to-use app).
- **Resource plan:** The plan name and its specifications.
- **Disk:** The existing disk or the new disk you selected, with its size and price.
- **Count:** How many servers are created at once with this configuration.
- **Prices:** The hourly and monthly price (monthly = hourly × 720).

::: warning Note
The hourly and monthly prices in the summary are based on the plan price and the number of servers. The cost of disks and private networks is calculated separately and can be seen in the invoices.
:::

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/overal-os-info.webp"
  light-src="/images/guides/en/light/instances/overal-os-info.webp"
  alt="Order summary"
/>

After you review it, click the **Order** button. A message confirming the request to create the server appears, and you go to the [list of cloud servers](/en/guides/instances/list). About 3 minutes later the server is created and a confirmation SMS is sent to you.

### If the Order Button Is Disabled

The order button is only enabled when all of the following are true:

| Item             | What to check                                      |
| ---------------- | -------------------------------------------------- |
| Server name      | 3 to 30 characters, typed with an English keyboard |
| Operating system | An operating system or app is selected             |
| Plan             | An available plan is selected                      |
| Network          | At least one network is selected                   |
| Initial script   | If you use it, the YAML is valid                   |

## After the Server Is Created

You can see the new server in the [list of cloud servers](/en/guides/instances/list). To see the username and password, open the [server details](/en/guides/instances/details) page and click **Access keys**. If you created the server from the Marketplace, finish the remaining steps from the Console tab.

::: info Recommendation
We recommend having at least 24 hours' worth of credit in your account before creating a cloud server.
:::
