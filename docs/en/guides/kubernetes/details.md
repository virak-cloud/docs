# Kubernetes - Cluster Details

## Introduction

This page displays information related to your Kubernetes cluster. Here, you can view the status of the cluster, its settings, and how to connect to the cluster nodes.

<DarkModeImage
  dark-src="/images/guides/en/dark/k8s/cluster-details.webp"
  light-src="/images/guides/en/light/k8s/cluster-details.webp"
  alt="Cluster Details"
/>

## Cluster Details

In this section, you can see the general information about your cluster:

*   **Cluster Name:** The name you have chosen for your cluster.
*   **Status:** The current status of the cluster (e.g., `Running`).
*   **Number of Worker Nodes:** The number of Worker nodes present in the cluster (for when auto-scaling is turned off).
*   **Minimum Number of Worker Nodes:** The minimum number of Worker nodes that must always be available (for when auto-scaling is turned on).
*   **Maximum Number of Worker Nodes:** The maximum number of Worker nodes that the cluster can have (for when auto-scaling is turned on).
*   **Creation Date:** The date the cluster was created.
*   **Kubernetes Version:** The version of Kubernetes that your cluster is running.

## Service Information

Here, you can view the hardware information of your cluster, such as the number of CPU cores, memory size, disk space, processor speed, network rate, and disk IOPS.

## List of Cluster Nodes

In this section, a list of the nodes present in the cluster is displayed, along with their names, statuses, and creation dates.

*   **Name:** Node name.
*   **Status:** The current status of the node (e.g., `Ready`).
*   **Creation Date:** The date the node was created.

You can click the "View Details" button to enter the page related to the specific node and see more details.

## Scale Cluster

Using the cluster scale feature, you can change the settings related to auto-scaling and the number of Worker nodes.

1.  Click on the "Scale" button.
2.  In the opened window, you can change the following settings:
    *   **Auto Scaling:** Enable or disable auto-scaling for the cluster.
    ::: info Note
    Once auto-scaling is enabled, it cannot be disabled in the future.
    :::
    *   **Number of Worker Nodes:** Specify the number of nodes required for your cluster (this is for when auto-scaling is turned off).
    *   **Minimum Number of Worker Nodes:** The minimum number of Worker nodes that must always be available (for when auto-scaling is turned on).
    *   **Maximum Number of Worker Nodes:** The maximum number of Worker nodes that the cluster can have (for when auto-scaling is turned on).

    ::: info Note
    Please note that the maximum number of Worker nodes must be greater than the minimum number of Worker nodes.
    :::
3.  Click on the "Confirm" button.

## Access Keys and Connecting to Cluster Nodes

In this section, the necessary information for connecting to your Kubernetes cluster nodes is provided:

*   **Username:** `cloud`
*   **IPv4:** The IPv4 address of one of the cluster nodes (note that ports are dynamically generated, and you can extract them from the port forwarding tab in the Kubernetes cluster network details).
*   **SSH Public Key:** The SSH public key for connecting to the nodes.
*   **Kubernetes Configuration File:** The Kubernetes configuration file for using `kubectl`.

### Connecting Using Username `cloud` and SSH Access Key

To connect, use the following details:

*   Username: `cloud`
*   Access Key: The private key corresponding to the public key
*   Address: IPv4
*   Port: Ports are dynamically generated, and you can extract them from the port forwarding tab in the Kubernetes cluster network details.

### Using the `kubectl` Command and Configuration File

After downloading the desired configuration file, you can use the `kubectl` command set to communicate with the cluster:

#### **Sample Commands:**

* **Pods List:**
    ```bash
    kubectl --kubeconfig /custom/path/kube.conf get pods --all-namespaces
    ```
* **Nodes List:**
    ```bash
    kubectl --kubeconfig /custom/path/kube.conf get nodes --all-namespaces
    ```
* **Services List:**
    ```bash
    kubectl --kubeconfig /custom/path/kube.conf get services --all-namespaces
    ```
