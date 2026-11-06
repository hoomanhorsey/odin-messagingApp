**\*API Endpoints**

**_Auth_**

POST /api/auth/signup - create User account

POST /api/auth/login - login to account

**_User_**
GET /api/users/me - get logged in user's profile
PATCH /api/users/me - edit display name and avatar
PUT /api/users/me/password - edit password

**_Conversations_**

GET /api/chats - get sidebar list of user's conversations

POST /api/chats - start new chat with a user (other user's ID goes in request body)

GET /api/chats/:id/messages - get full message thread for a conversation

POST /api/chats/:id/messages - send a new message in an existing conversation

APIs:

contacts management

- address book
- search contacts
-

messages

- retrieve message list

- draft message

- send message
- get messages
