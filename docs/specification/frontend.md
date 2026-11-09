<SignUp>

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

<Login>

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

<Profile>

State Variables

- displayname
- password
- avatar

API Calls

- Fetch to backend via Patch, to edit chosen values:
  - If successful, display confirmation message
  - If unnsucessful, display unsuccessful message and reasons.

HTML

- display user's
  - username
  - displayname (edit option)
  - avatar (edit option)
- edit password modal

<Chats> 
    <Sidebar>
        <ConversationList/>
        <NewChat/>
        <LogOut/>
    </Sidebar>
    <Main>
        <ConversationThread/>
        <NewMessageInput/>

    </Main>

</Chats>

<Chats/>
<Sidebar/>
    <ConversationList/>
    <NewChat/>
    <LogOut/>

<Main/>
    <ConversationThread/>
    <NewMessageInput/>
