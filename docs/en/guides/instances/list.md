# List of Cloud Servers

In [this section](https://panel.virakcloud.com/instances/list), you can see all the cloud servers you have created in the selected data center, and run the most common actions (start, stop, reboot, console, and view details) directly from this page. To open it, click **Cloud Server** in the sidebar.

<DarkModeImage
  dark-src="/images/guides/en/dark/instances/instances-list.webp"
  light-src="/images/guides/en/light/instances/instances-list.webp"
  alt="Instance list"
/>

::: tip Data center
The list shows the servers of the data center (location) selected at the top of the page. When you change the location, the list refreshes automatically.
:::

## Page Header ​

At the top of the page you will find:

- **Create Instance**: Go to the [Create Cloud Server](/en/guides/instances/create/) page. This button appears at the top once you have at least one server. If you don't have any yet, the create button is shown in the center of the page.
- **Refresh button**: Fetch the list from the server again.
- **Dashboard**: Return to the main dashboard.

## Search and Filters ​

Above the table you can narrow down the list:

- **Search**: Find a server by the text you type.
- **Instance status**: Show only servers in a specific status (for example, running or down).
- **Number of shows**: The number of rows per page (default is 5).

The result count is shown at the corner of the page, for example "Showing 1 out of 1 items". If you have more servers than the rows per page, page numbers appear below the table.

## Table Columns ​

| Column           | Description                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name             | The server name. Click it to open the server details page.                                                                                                                |
| OS               | The operating system icon and name. If you created the server from the [Marketplace](/en/guides/instances/create/marketplace), the name of the ready-to-use app is shown. |
| Price (Per hour) | The hourly cost in IRR. It depends on the server status: the running price is shown while the server is on, and the stopped price while it is off.                        |
| Service          | The name of the plan (service offering) selected for the server.                                                                                                          |
| Status           | The current server status, such as Down, with a colored icon.                                                                                                             |
| Actions          | Quick action buttons (described below).                                                                                                                                   |

::: warning Note
While a server is being created, waiting in the creation queue, or being deleted, its name is not a link and you can't open its details.
:::

## Quick Actions ​

The Actions column contains the buttons below. Hover over a button to see its description.

| Button                   | Purpose                       | When is it available?                                   |
| ------------------------ | ----------------------------- | ------------------------------------------------------- |
| Start (lamp icon)        | Turn the server on            | Only when the server is stopped                         |
| Stop (crossed lamp icon) | Turn the server off           | When the server is running or suspended                 |
| Reboot                   | Restart the server            | Only when the server is running                         |
| Console                  | Open the server's console tab | Only when the server is running                         |
| View details (eye icon)  | Open the server details page  | Almost always, except while the server is being deleted |

Start, Stop, and Reboot show a confirmation dialog before they run, to prevent mistakes. The Stop dialog also includes a **force stop** option, which is useful when a normal shutdown doesn't work.

If a server is busy with an operation (for example, it is starting), the buttons in its row are disabled for a moment and the tooltip explains why. The server status also updates automatically, so you don't need to reload the page to see the result.
