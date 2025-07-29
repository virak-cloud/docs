# Create Kubernetes Cluster

## Introduction
The [Kubernetes cluster](https://panel.virakcloud.com/kubernetes/cluster/create) is a container management platform that allows users to manage their applications in a scalable and automated manner. With Kubernetes, users can easily distribute their workloads across multiple nodes and benefit from scalability and self-healing capabilities. This product is specifically designed for developers and operations teams to manage their infrastructure easily and confidently.

## Features of the Creation Page
- **Cluster Name Selection:** Users must choose a unique name for their cluster.
- **Version Selection:** Users can select the Kubernetes version for the cluster, allowing them to benefit from new features and security improvements.
- **Number of Worker Nodes:** Users can specify the number of worker nodes that will run the workloads.
- **Number of Master Nodes:** Determine the number of master nodes for cluster management and ensuring high availability.
- **Hardware Selection (Offering):** Users can choose the type of hardware required for the nodes, which includes various options in terms of processing power and memory.
- **Network Selection:** Users can select the network to be used for the cluster.
- **SSH Key in Kubernetes Cluster:** To ensure the security of the Kubernetes cluster, users must enter their public SSH key. This process is important for the following reasons:
    - **Secure Access:** The public SSH key enables secure connections to the cluster nodes and prevents unauthorized access.
    - **Easy Management:** By entering the public key, users can easily connect to the nodes and make necessary configurations.
    - **Reduced Security Risks:** Using SSH keys instead of passwords enhances security and reduces potential risks.
    - By entering the public SSH key, users can ensure the security and easy management of the Kubernetes cluster.

- **Create Cluster Button:** After filling in all the required fields, users can launch their new cluster by clicking the "Create" button.


## Steps to Create a Cluster

<DarkModeImage
  dark-src="/images/guides/en/dark/k8s/create-cluster.webp"
  light-src="/images/guides/en/light/k8s/create-cluster.webp"
  alt="Create Cluster"
/>

1. **Select Cluster Name:** Enter a unique name for your cluster.
2. **Select Version:** Choose the desired Kubernetes version from the dropdown menu.
3. **Number of Worker Nodes:** Specify the number of worker nodes.
4. **Number of Master Nodes:** Determine the number of master nodes.
5. **Select Hardware:** Choose the type of hardware required for the nodes.
6. **Select Network:** Select the network you want to use for the cluster.

::: danger Note
Having a Layer 3 network (virtual router) is mandatory for cluster creation.
:::

::: info Create New Network:
 It is recommended to create a new network before creating the Kubernetes cluster. Avoid using pre-existing networks to prevent conflicts with system roles. Otherwise, the cluster creation process may fail.
:::

7. **Enter SSH Key:** Please enter your desired public key and select it if it exists.

::: danger Having at least one public SSH key
An SSH authentication key is essential for cluster creation.
:::

8. **Click on the Create Button:** After ensuring all fields are filled, click the "Create" button.

After creating the cluster, it may take a few minutes for your cluster to be ready.
