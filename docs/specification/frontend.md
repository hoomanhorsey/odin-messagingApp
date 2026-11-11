# Component Structure

## Auth Pages Structure

- Signup
- Login
- Profile

## Chats Structure

- Chats
  - Sidebar
    - ConversationList
    - NewChat
    - LogOut
  - /Sidebar
  - Main
    - ConversationThread
    - NewMessageInput
  - /Main
- /Chats

# Component Descriptions

## SignUp Component

State Variables

- username
- displayname
- password
- avatar

API Calls

- Fetch to backend to create new user.
  - If successful, displays success, redirects to login
  - If unsuccessful, displays unsuccesful message and reasons, leaves form to resubmit?

HTML

- Form setting out:
  - username
  - displayname
  - password
  - submit button
  - avatar upload

## Login Component

State Variables

- username
- password

API Calls

- Fetch to backend to login user
  - If successful, redirect to /chat
  - If unsuccessful, display unsuccesful message and reasons, leave form to resubmit

HTML

- Form setting out:
  - username
  - password

## Profile Component

State Variables

- displayname
- password
- avatar

API Calls

- Fetch to backend via PATCH, to edit chosen values:
  - If successful, display confirmation message
  - If unnsucessful, display unsuccessful message and reasons.

HTML

- display user's
  - username
  - displayname (edit option)
  - avatar (edit option)
- edit password modal

## Chats Component (Parent)

State Variables

API Calls

- None

HTML

- Display:
  - Sidebar Component

### Sidebar Component

State Variables

- None

API Calls

- None

HTML

- ConversationaList Component
- NewChat Component
- LogOut button

### ConversationList Component

State Variables

- conversations

API Calls

- Fetch to backend db via GET: - if successs, updated conversations variable with array of conversations from db - if unsuccessful, display error messge -

HTML

- list of conversations -
  - each conversation:
    - avatar to the left
    - header
    - name of contact, or name of group if group
    - 2 line summary of last message
    - new chat button

### NewChat Component

State Variables

- listOfContacts (for user who to start chat with)

API Calls

- Fetch to backend db to GET list of contacts:
  - if success, updated listOfContacts variable
  - if unsuccessful, display error message

HTML

- display contacts in sidebar
- display chat window in main...

## Main Component (Parent)

State Variables

- None

API Calls

- None

HTML

- Display:
  - ConversationThread Component
  - NewMessageInput Component

### ConversationThread Component

State Variables

- Conversation

API Calls

- Fetch to backend db to GET conversation
  - if success, update Conversation variable
  - if unsuccessful, display error message

HTML

- display messges of conversation
  - each message is comprised of:
    - name of contact
    - message text

### NewMessageInput Component

State Variables

- newMessage (sender, recipient, messageText, time)

API Calls

- fetch to backend db via POST to insert new message into existing conversation

HTML

- input element for new message
