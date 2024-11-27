
# Scaling Guide for Virtual Machines and Kubernetes Clusters in Virak Panel

The Virak Panel offers advanced scaling capabilities, enabling you to manage server resources flexibly and efficiently according to your business needs. Below is a comprehensive guide to these features.

## Scaling Virtual Machines (VMs)

### Vertical Scaling

- **In Live Mode:** 
  - **Scale Up:** Increase resources like CPU and RAM without shutting down the machine.
  - **Scale Down:** Not possible. To reduce resources, the machine must be stopped.

- **In Stopped Mode:** 
  - You can fully increase or decrease resources.

### Horizontal Scaling
By creating instance groups and utilizing a Load Balancer, you can increase the number of virtual machines and distribute traffic evenly.

## Scaling Kubernetes Clusters

### Vertical Scaling
- **In Live Mode:** 
  Resource adjustments for cluster nodes are not possible.
- **In Stopped Mode:** 
  You can increase or decrease the resources for each node.

### Horizontal Scaling
- **In Live Mode:** 
  Adjust the number of cluster nodes to meet capacity needs.

## Summary Table of Scaling in Virak Panel

| Service Type      | Scaling Type       | In Live Mode                   | In Stopped Mode                 |
|--------------------|--------------------|---------------------------------|----------------------------------|
| Virtual Machines   | Vertical          | Scale Up (Scale Down not possible) | Full resource scaling available |
|                    | Horizontal         | Adjust the number of machines  | Adjust the number of machines   |
| Kubernetes Clusters| Vertical          | Not possible                   | Adjust node resources           |
|                    | Horizontal         | Adjust the number of nodes     | Adjust the number of nodes      |

## Key Points for Decision-Making

- **Quickly Increase Resources Without Downtime:**
  - Virtual Machines: Scale up resources in live mode.
  - Kubernetes Clusters: Increase the number of nodes.

- **Reducing Resources or Major Changes:**
  - Requires stopping the service for both virtual machines and clusters.

- **Load Distribution and High Availability:**
  - Use horizontal scaling to increase the number of machines or nodes, distributing traffic efficiently.

## Practical Examples

### Virtual Machines (VMs)
- **Scaling Up in Live Mode:** Quickly increase CPU and RAM resources during traffic spikes.
- **Scaling Down:** Reduce costs by stopping the machine and decreasing resources during low-traffic periods.

### Kubernetes Clusters
- **Adding Nodes:** Increase the number of nodes in live mode to handle higher workloads.
- **Changing Node Resources:** Stop the cluster to adjust resources for each node.

## Best Practices for Efficient Use

1. **Resource Planning:** Manage resources based on traffic patterns and workloads.
2. **Load Balancer Usage:** Distribute traffic among machines or nodes for improved performance and availability.
3. **Continuous Monitoring:** Monitor server and cluster performance to identify scaling needs promptly.

## FAQs

1. **Can I decrease VM resources without stopping it?**
   No, reducing VM resources requires stopping the machine.

2. **How can I add nodes to a Kubernetes cluster?**
   In the Virak Panel, go to the cluster management section and adjust the node count in live mode.

3. **Does adding nodes require additional configuration?**
   No, the Virak Panel automatically integrates new nodes into the cluster.

## Contact Support
For further assistance, contact the Virak support team. We are always ready to help.

---

Virak Panel, empowering your business growth and scalability.
