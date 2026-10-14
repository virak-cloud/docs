# Event Logs

## Introduction ​

The **Event Logs** page shows a complete history of activity on your account and project resources. Use it to see when a resource (cloud server, network, disk, database, Kubernetes cluster, domain, etc.) was created, changed, or deleted, and to review logins to your account.

<DarkModeImage
  dark-src="/images/guides/en/dark/event-logs.webp"
  light-src="/images/guides/en/light/event-logs.webp"
  alt="List of event logs"
/>

::: tip Note
This page is read-only. Events are recorded automatically by the platform, and you cannot edit or delete them.
:::

## Filters ​

Two filters are available above the table to narrow down the results:

- **Date**: shows events recorded within a specific date range.
- **Event Type**: filters events by their origin — **User** (events triggered directly by you) or **System** (events recorded automatically by the platform).

## Table Columns ​

Each row in the table includes:

- **Number**: the sequential number of the event.
- **Event Type**: User or System.
- **Event Date**: the exact date and time the event was recorded.
- **Event**: a text description of the event, including the related resource name and the action performed.

## Event Categories ​

### User Events ​

This category includes actions you performed directly in the panel, such as:

- Creating, powering on/off, or deleting a cloud server
- Creating or deleting a network, and connecting/disconnecting it from a cloud server
- Adding or disabling a public IP, and configuring NAT
- Creating, attaching, or detaching a disk
- Taking or deleting a snapshot
- Creating or deleting a database
- Creating or deleting a Kubernetes cluster
- Logging into your account from an IP address

### System Events ​

This category includes actions performed and recorded automatically by the platform, such as:

- Automatically creating or removing Kubernetes cluster nodes (for example, when a cluster is created or deleted)
- Automatically removing a domain from the panel if Virak Cloud's NS records are not configured within 30 days

::: tip Note
If you notice a change to one of your resources that you didn't make yourself, checking the **System** event type can help clarify why. For example, deleting a Kubernetes cluster also deletes all of its nodes, which are logged as separate system events.
:::

## Security Use Case ​

One of the most important uses of this page is tracking logins to your account. Every login from a new or unusual IP address is logged as a separate event. Reviewing this section regularly helps you spot unauthorized access to your account more quickly.
