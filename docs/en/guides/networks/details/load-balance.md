# Load Balancing

The load balancing feature allows traffic to be sent to internal network services in a distributed manner using `Round Robin` and `Least Connection` algorithms.

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/add-loadbalance.webp"
  light-src="/images/guides/en/light/networks/add-loadbalance.webp"
  alt="Create LoadBalance"
/>

## Creating Load Balancing
This feature works by adding load balancing and selecting the following components, which adds a new entry for it:
- Name
- Algorithm
- Public IP
- Public Port: User-selected
- Private Port: Set by the user on the main service

<DarkModeImage
  dark-src="/images/guides/en/dark/networks/loadbalance-entry.webp"
  light-src="/images/guides/en/light/networks/loadbalance-entry.webp"
  alt="LoadBalance Entry"
/>

After adding load balancing, you can select your desired instances based on the IP that provides our main service through the load balancer rule creation menu.
After completion, incoming traffic to the public IP will be distributed to the instances behind it.

<!-- todo: also we can explain about rules of load-balance  -->

## Live Report
In the live report menu, you can monitor the performance of the load balancing service and the instances providing the service behind the load balancing service in real-time, along with measuring incoming and outgoing traffic and response codes.

## History
The history menu also keeps a historical record of the services' performance.
