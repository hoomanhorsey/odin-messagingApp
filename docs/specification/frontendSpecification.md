**account management**

**/signup**

- Full page display
- Publicly accessible
- Redirects to /login on success

create user profile with:

- username
- password
- displayname
- avatar (upload image)

**/login**

- Full page display
- Publicly accessible
- Redirects to /chats on success

- login via username and password
- create user session that expires 2 hours since last activity (server request) or when user logs out

**/profile**

- Full page display
- Requires active session to access
- Redirects to /chats on exit, redirects to /signup on deleting user

- user profile details
  - edit displayname
  - change password
  - [delete user]

**/chats**

- Full page display
- Requires active session to access
- Redirects to /login when user logs out and session expiry

2 pane display - 'sidebar' and 'main'

- sidebar
  - conversation lists on the left
  - new chat option up top
    - find user, create message
  - logout button
- main
  - selected message thread on the right
  - messages grouped by dates...
  - show message summaries in chronological order, capped at 'n' lines

  - each message includes:
    - message text
    - time of sending
    - 'show more' to expand larger messages.
    - [hover over options]:
      - reply
      - emoticon
      - dropdown menu
        - delete
        - forward

  - new message input box, including emoticons

  **Out of scope**
  - create groups
  - add users to group
  - delete user from group
  - delete group
