# Web Services & Tokens

The Virak Cloud Web Services allows developers to integrate with our platform programmatically.
You can use the API to manage instances, networks, storage, and more.


## 1. Authentication

All requests to the Web Services require authentication using an **API token**.
Include your token in the `Authorization` header:

```http
Authorization: Bearer YOUR_TOKEN
```

> ⚠️ For security reasons, the token value is shown **only once** when it is created.


## 2. API Tokens List

<DarkModeImage
  dark-src="/images/guides/en/dark/public-api/tokens-list.webp"
  light-src="/images/guides/en/light/public-api/tokens-list.webp"
  alt="Web Services - Token List"
/>

On the **Tokens** page, you will see all tokens you have generated.
The list contains the following information:

| Name           | Last Used        | Expiration Date | Abilities                                                   |
| -------------- | ---------------- | --------------- | ----------------------------------------------------------- |
| My First Token | 2025-08-05 14:22 | 2025-12-31      | `dns:domain:list, instance:create, kubernetes:cluster:list` |
| Backup Token   | 2025-08-07 09:10 | Never           | `object_storage:bucket:create, network:firewall:ipv4:list`  |


* **Name** – The label you assigned to the token when creating it.
* **Last Used** – The last time this token was used in an API request.
* **Expiration Date** – The date when the token becomes invalid.
* **Abilities** – The set of actions the token can perform.


## 3. Creating a Token

<DarkModeImage
  dark-src="/images/guides/en/dark/public-api/create-token.webp"
  light-src="/images/guides/en/light/public-api/create-token.webp"
  alt="Web Services - Token List"
/>

To create a new API token:

1. From the left sidebar, select **Web Service**.
2. On the **Web Service** page, click **Create Token**.
3. Provide a **Name**, select an **Expiration Date**, and choose **Scopes**.
4. After creating, copy the token and store it securely — it will not be shown again.


### Example API Request – Create Token

```bash
curl -X POST https://api.virakcloud.com/v1/tokens \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My API Token",
    "expires_at": "2025-12-31",
    "scopes": ["read", "write"]
  }'
```


## 4. Full API Reference

For the complete API documentation (including all endpoints and parameters),
visit the **Web Services Reference**:

<div style="text-align: left;">
    <a href="https://api-docs.virakcloud.com">https://api-docs.virakcloud.com</a>
</div>
