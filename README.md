# AcadVerify - Modelling Blockchain for Universities
It is a decentralized academic credential verification platform to address issues of data tampering and verification delays in traditional academic credit systems, enabling secure, tamper-proof validation of university certificates across institutions.

This project uses-
1) Solidity smart contracts on Ethereum
2) Ganache and Truffle suite
3) Backend: Node.js
4) Frontend: React
5) MetaMask for wallet integration
6) IPFS for decentralized file storage

# Architecture

![image](https://github.com/user-attachments/assets/5e9ef470-115f-4397-b8a9-72ba7b48a156)

# Application Design

![image](https://github.com/user-attachments/assets/b7a57abd-0c81-40a2-a5b6-9fb0db6f70ec)

![image](https://github.com/user-attachments/assets/59b857e6-fbcc-4a58-a188-ddaddf894de1)

![image](https://github.com/user-attachments/assets/fc3f57eb-a158-4f55-8f07-f3dae21428a9)

# Implementation screenshots

AcadVerify broadly has three types of users: the student (requester), the institute (the verifier) and a third party (potential employer).
 
Homepage for accessing various sections on the platform

![image](https://github.com/user-attachments/assets/b4dae632-3ea8-4e7c-8892-ece1b80f27c0)

The students (requester) and the institutes (verifier) have to register themselves on the platform. If the user is a verifier, they have to set a verification price which will be paid to them by the requester on successful verification of any document. Institutes have the liberty to set their own verification price. While registering, the student gets an option to select their current institute from a list of supported institutions on the platform. The avatar or profile image of the user is also stored on IPFS.

Connecting the account to Metamask wallet

![image](https://github.com/user-attachments/assets/58e8f704-d42a-430e-ad79-4f733bceb4a7)

Registering a new institute as a verifier

![image](https://github.com/user-attachments/assets/cf116d65-71da-47f8-b975-e0ae9cb9afcb)

Institute registration successful with profile image hosted on IPFS

![image](https://github.com/user-attachments/assets/c2986973-023e-4cc7-b664-cfea618ce722)

Student registration successful with profile image hosted on IPFS

![image](https://github.com/user-attachments/assets/9a741c6b-4888-4a93-89b6-0ffcc8765246)

The requester, typically a student, uploads their certificate on the platform. An electronic version of the certificate along with a hash value of the document is generated. The certificate is uploaded to the InterPlanetary File System (IPFS), and all data related to the certificate and IPFS link along with the hash value of the document is stored on the blockchain. The verifier is the current institute the student is registered with. The verifier can then verify or reject the document by checking its authenticity. The requester pays up the verification fee to the platform while uploading the certificate. The verifier receives this fee as a reward for verifying the documents.

Certificate upload page for student

![image](https://github.com/user-attachments/assets/a6b95e64-559d-40b5-8087-ffd07512f887)

Metamask transaction for certificate upload

![image](https://github.com/user-attachments/assets/c108d591-4a3e-4967-b95b-0637f2ed1e34)

Document verification status page

![image](https://github.com/user-attachments/assets/c6efbb2b-7d26-4f38-a365-b9f65263492d)

Detailed Document description section

![image](https://github.com/user-attachments/assets/8398e17d-d385-4205-ab80-53d12be62b5a)

Viewing uploaded certificate on IPFS 

![image](https://github.com/user-attachments/assets/25f24a42-0bdd-42d3-b945-a95beaf8a8b4)

Verifier can Verify or Reject the pending requests

![image](https://github.com/user-attachments/assets/15283129-80f4-41cd-83d6-f1ddf94a849d)

Metamask transaction for document verification

![image](https://github.com/user-attachments/assets/5337e191-e7bb-4ae3-a49d-c2573effaeab)

Document verification status after institute approval

![image](https://github.com/user-attachments/assets/aa74fd20-f610-4f93-949f-115ccfd89ec6)

The job applicant/ student can send the address of his learning records and certificates to the HR of the potential employer or to any institute where he wants to join for further education. The employer HR can access the learning records using the address and verify its authenticity on the platform.
 
Checking certificate verification status using document address

![image](https://github.com/user-attachments/assets/f7fde756-74d6-44b7-a61d-e6f97548b3fd)

The student can initiate a credit transfer request to their current institution for transferring their entire academic data and profile to their new institute. The new institute must be a cooperative institution and also registered on the platform. The student has to fill the Institute change form which sends a request to their current institution. The student can upload a file which contains the approval of admission by the new institution. The current institute can view the document and verify the credit transfer request accordingly.

Registering a second institute

![image](https://github.com/user-attachments/assets/738becbf-c58c-4013-83cd-54de9a256110)

Institute change request form for student

![image](https://github.com/user-attachments/assets/7afd9396-696a-4120-ba56-3e5cd14e5cd3)

Metamask transaction for Institute change request

![image](https://github.com/user-attachments/assets/7eea108e-d64c-4456-b0b2-3165ed257e07)

Current Institute receives the request from student 

![image](https://github.com/user-attachments/assets/93803cf9-9043-4e90-8f67-0cc2fdb1ab55)

# To install this project on your local PC, follow the steps
1)	Clone the project to your local environment using “Git clone” Command.
2)	Make sure you have node version ^8.11.4
3)	Make sure you have npm version ^5.6.0
4)	Open Terminal and run the following command : “npm install -g ganache-cli truffle@v4.1.14”
5)	Open a new terminal and keep it alive by running the command : “ganache-cli”
6)	Run solidity unit tests to check if the environment is ready by using the command : “truffle test”
7)	Install node modules 
8)	Compile and migrate the smart contracts using the command : “truffle compile” & “truffle migrate”
9)	Run the project using the command : “npm run start”


