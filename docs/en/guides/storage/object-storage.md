# Object Storage

## Introduction

The **Object Storage** service, provided by the cloud platform, is a powerful and scalable solution for storing and managing data in the cloud. Designed to handle various types of data, including images, videos, documents, and backups, this service offers a user-friendly interface and versatile features to effectively meet users' needs. This documentation provides a comprehensive overview of its features, usage instructions, and key tips.

## Features and Capabilities

### 1. Bucket Management

Buckets are the primary storage units in the Object Storage service. Users can easily create, delete, or manage buckets.
- **Create New Bucket**: Create buckets with custom names.
- **Delete Bucket**: Quickly delete buckets with a single click.
- **Advanced Settings**: Rename, manage access, and more via the actions menu.


### 2. Creating a New Bucket
<br/>
<DarkModeImage
  dark-src="/images/guides/en/dark/storage/object-storage/create-object-storage.webp"
  light-src="/images/guides/en/light/storage/object-storage/create-object-storage.webp"
  alt="Create Bucket"
/>

Creating a new bucket involves the following options:
- **Bucket Name**: A unique name to identify the bucket (e.g., `test`).
- **Change access level**:
    1. public: This option allows anyone with the link to access the object.
    2. private: This option restricts access to the vault only to authorized users.


### 3. File Management
<br/>
<DarkModeImage
  dark-src="/images/guides/en/dark/storage/object-storage/details-object-storage.webp"
  light-src="/images/guides/en/light/storage/object-storage/details-object-storage.webp"
  alt="Details of Buckets"
/>

Users can manage files within their buckets:
- **Upload File**: Add new files (e.g., `sample.zip` with a size of 103.32 KB).
- **Creating and Managing Folders**: This feature allows users to create new folders in object storage, enabling them to manage their content in a more organized manner. With this capability, users can easily categorize their files and data into different folders, facilitating easier access and management.
- **Download and Delete**: Options to download or delete files using respective icons.
- **File Details**: View information such as size and upload date (e.g., 1401/0/10 - 01:01).

### 4. Access Management

Control access to buckets and files:
- **Public or Private**: Set buckets or files as Public or Private:
    1. public: This option allows anyone with the link to access the object.
    2. private: This option restricts access to the vault only to authorized users.

### 5. Access Information

Information required to connect to the service:
- **URL**: The bucket access endpoint (e.g., `https://s3.dev.virakcloud.net/test-m09i`).
- **Access Key**: Authentication identifier (e.g., `vrk-01K15b79kahpm1jbgfv9445`).
- **Secret Key**: Security key for signing requests (hidden).

## How to Use

#### 1. Creating a New Bucket
- Go to the [object storage section](https://panel.virakcloud.com/storage/bucket/list) and click "Create New Bucket."
- Determine the bucket name and the access level.
- Click "Confirm."

#### 2. Uploading a File or Creating Folder
- Select the desired bucket.
- Click on "Upload File" button and upload a file.

#### 3. Managing Access
- In bucket settings, change access to Public or Private.

#### 4. Connecting with Access Keys
- Copy the URL, Access Key, and Secret Key from the panel.
- Use them in S3-compatible tools (e.g., AWS CLI):
  ```bash
  aws configure
  ```
  - Access Key: `vrk-01K15b79kahpm1jbgfv9445`
  - Secret Key: `[Your Secret Key]`
  - Region: `us-east-1`
  - Output: `json`
  - Upload a file:
    ```bash
    aws s3 cp myfile.txt s3://test-m09i/myfile.txt --endpoint-url https://s3.dev.virakcloud.net
    ```

## Tips and Recommendations

- **Security**: Keep access keys confidential and avoid sharing them.

## Conclusion

The Object Storage service, with its simple interface, advanced features, and S3 compatibility, offers an ideal cloud storage solution, enabling users to securely and scalably manage their data.
