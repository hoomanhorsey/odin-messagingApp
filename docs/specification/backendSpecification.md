**\*API Endpoints**

**_Auth_**

POST /api/auth/signup - create User account

POST /api/auth/login - login to account / start a session

POST /api/auth/logout - logout / end a session

**_User_**
GET /api/users/me - get logged in user's profile
PATCH /api/users/me - edit display name and avatar
PUT /api/users/me/password - edit password

**_Conversations_**

GET /api/chats - get sidebar list of user's conversations

POST /api/chats - start new chat with a user (other user's ID goes in request body)

**_Messages_**

GET /api/conversations/:id/messages - get full message thread for a conversation

POST /api/conservations/:id/messages - send a new message in an existing conversation

PATCH /api/messages/:id - edit your own message

DELETE /api/messages/:id - delete your own message.
