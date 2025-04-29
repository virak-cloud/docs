# Create Cloud Server

To create a cloud server, you need to proceed from [this section](https://panel.virakcloud.com/instances/create).

## Choose a Cloud Server Name
In the first step, you need to choose a name for your cloud server.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/name.webp"
  light-src="/images/guides/en/light/instances/name.webp"
  alt="Instance Name Field"
/>

## Choose an Operating System
In the next step, you need to select the operating system you require.
You can see the list of available operating systems in the image below:

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/OS.webp"
  light-src="/images/guides/en/light/instances/OS.webp"
  alt="Select OS"
/>

<!-- ## Marketplace
You can also select the software you need from the marketplace section.
You can see the list of available software in the marketplace in the image below:

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/marketplace.webp"
  light-src="/images/guides/en/light/instances/marketplace.webp"
  alt="Marketplace - Ready to use Applications"
/> -->

## Marketplace
You can also select the required applications from the Marketplace section.
The list of available software in the Marketplace can be seen in the image below:

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/marketplace.webp"
  light-src="/images/guides/en/light/instances/marketplace.webp"
  alt="Marketplace - Ready to use Applications"
/>

### Installing and Using ViraCloud Marketplace Templates

In the ViraCloud platform, to enhance your ease and speed, we offer pre-configured application templates in our Marketplace. These templates are designed for popular software like MySQL, WordPress, GitLab, FileServer, and many more, and can be installed with just a few clicks.
By using these templates, you no longer need to handle complex configurations or manual installations — all installation and initial configuration steps are done automatically.


#### Benefits of Using ViraCloud Marketplace Templates:

1. Fast installation and ready-to-use in the shortest time possible
2. Simple system management with powerful tools:
    - Webmin: Complete system and service management via GUI (See this [section](#webmin) for more info)
    - Adminer: Manage MySQL, PostgreSQL, and other databases (See this [section](#adminer) for more info)
    - Web Shell: Secure terminal access through the browser

3. FQDN Assignment to the Instance After Creation:

After installing your desired template from the Marketplace, your instance is assigned a unique subdomain in the format
<code>85-9-104-4</code> (derived from the instance's IP address), along with the root domain vrak.app.
This name is mapped to your instance’s address and enables you to connect to it and its services not only via IP but also using the subdomain:
<code>(85-9-104-4.vrak.app)</code>

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/1-appliance-services.jpg"
  light-src="/images/guides/common/instance/marketplace/1-appliance-services.jpg"
  alt="Marketplace - Ready to use Applications"
/>


4. Automatic Let's Encrypt SSL Certificate
Thanks to the FQDN and configuration provided by the template, the service receives a valid SSL certificate via Let's Encrypt.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/2-Lets-Encrypt-SSL.png"
  light-src="/images/guides/common/instance/marketplace/2-Lets-Encrypt-SSL.png"
  alt="Marketplace - Ready to use Applications"
/>

5. Configuration via Graphical Menu (confconsole)
In addition to Webmin, which gives you full server/service configuration options, you can access a graphical menu using the confconsole command and easily perform basic settings.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/3-confconsole.jpg"
  light-src="/images/guides/common/instance/marketplace/3-confconsole.jpg"
  alt="Marketplace - Ready to use Applications"
/>

---

### Installation Steps

::: tip Note:
In this tutorial, WordPress has been selected as the OS.
:::

::: danger Warning:
Some software like GitLab require high resources to run, which may disable some plans when selected.
:::


After [finalizing your setup](#final-registration) and once the instance status is running, configuration of the app's admin and security settings must be done by the user.
To continue the installation, go to the console tab of your instance.


::: danger Attention:
Depending on the software requirements, you’ll be asked various questions during setup.
These may include DB username/password, admin panel login credentials, email address, etc.
:::


<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/4-mqSql.png"
  light-src="/images/guides/common/instance/marketplace/4-mqSql.png"
  alt="Marketplace - Ready to use Applications"
/>
<br/>
<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/5-rootPassword.png"
  light-src="/images/guides/common/instance/marketplace/5-rootPassword.png"
  alt="Marketplace - Ready to use Applications"
/>
<br/>
<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/6-wordpressPassword.png"
  light-src="/images/guides/common/instance/marketplace/6-wordpressPassword.png"
  alt="Marketplace - Ready to use Applications"
/>

::: info Recommendation:
It is recommended to complete security updates, notifications, and backup settings after the installation process is complete.
:::


After entering the required info, you will be shown a summary page with credentials and access details for your instance.
For example, the image below displays access info for the WordPress web page, Webmin, Adminer, and SSH access.


<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/7-wordpress-config.png"
  light-src="/images/guides/common/instance/marketplace/7-wordpress-config.png"
  alt="Marketplace - Ready to use Applications"
/>


---

### More Info

#### Webmin:
Webmin is a web-based control panel for managing Linux/Unix servers. It allows sysadmins to perform many administrative tasks without needing the command line, accessible via the provided address and port.

##### Use Cases:
- Manage users and groups
- Control services like Apache, NGINX, MySQL, etc.
- Edit system config files
- Configure firewall (iptables)
- Monitor system resources (CPU, RAM, Disk)
- Install/update packages via apt or yum

##### Benefits:
- Web-based graphical interface
- Reduces the need for command-line skills
- Great for admins who prefer GUI over CLI


The image below shows the Webmin interface, offering powerful configuration tools:

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/8-webmin.jpg"
  light-src="/images/guides/common/instance/marketplace/8-webmin.jpg"
  alt="Marketplace - Ready to use Applications"
/>

#### Adminer:
Adminer is a lightweight, single-file, open-source database management tool (often used with MySQL / MariaDB) via a web interface. It’s a lightweight alternative to phpMyAdmin. Access it via the provided address and port.

##### Use Cases:
- Connect to databases, view tables/records
- Execute SQL queries
- Manage users and permissions
- Import/export databases
- Create/delete tables and databases

##### Benefits:
- Just one PHP file (no complex setup)
- Fast, lightweight, low resource usage
- Supports multiple databases: MySQL, PostgreSQL, SQLite, MS SQL, Oracle, etc.

<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/9-adminer.jpg"
  light-src="/images/guides/common/instance/marketplace/9-adminer.jpg"
  alt="Marketplace - Ready to use Applications"
/>


The following image shows the WordPress login page at: `http://85.9.104.4/wp-admin`


<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/10-wordpress-login.png"
  light-src="/images/guides/common/instance/marketplace/10-wordpress-login.png"
  alt="Marketplace - Ready to use Applications"
/>
<br/>
<DarkModeImage
  dark-src="/images/guides/common/instance/marketplace/11-wordpress-dashboard.png"
  light-src="/images/guides/common/instance/marketplace/11-wordpress-dashboard.png"
  alt="Marketplace - Ready to use Applications"
/>


## Choose Resources

In the next step, according to the amount of resources you need for your cloud server, you should choose a cloud server package.
Cloud server packages are divided into 5 categories based on resources, which you can choose a package according to the specified bar in the image and the amount of resources you need:

- `General`:
General packages with average resources

- `CPU Optimized`:
Cloud server packages with higher CPU

- `Memory Optimized`:
Cloud server packages with higher RAM

- `Storage Optimized`:
Cloud server packages with higher hard drive

- `Network Optimized`:
Cloud server packages with higher bandwidth

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/hardwareOffering.webp"
  light-src="/images/guides/en/light/instances/hardwareOffering.webp"
  alt="Choose Resource (Hardware Offerings)"
/>

## Choose Public or Private Network
In the next step, you need to select a public network with `IPV4` or a public network with `IPV6` for the internet behind your server.
(You can also use a private network for your cloud server, which will be explained further).

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/pubNetwork.webp"
  light-src="/images/guides/en/light/instances/pubNetwork.webp"
  alt="Public Networks"
/>

## Additional Features
And in the next step, you can use additional features if needed, which include adding disk to your cloud server, running the initial script, and SSH authentication key.


<DarkModeImage
  dark-src="/images/guides/en/dark/instances/add-feature.webp"
  light-src="/images/guides/en/light/instances/add-feature.webp"
  alt="SSH authentication key - Cloud Init"
/>

## Final Registration
In the last step, to register your order and create a cloud server, you need to complete the purchase of your cloud server from the left menu, which is marked in the image below.
After 3 minutes, your cloud server will be created and a confirmation SMS will be sent to you.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/overal-os-info.webp"
  light-src="/images/guides/en/light/instances/overal-os-info.webp"
  alt="Overal OS info"
/>

::: info Recommendation:
We recommend having at least 24 hours of credit in your account before creating a instance.
:::
