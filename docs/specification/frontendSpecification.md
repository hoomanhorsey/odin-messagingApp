**account management**

**/signup**

create user profile with:

- username
- password
- displayname
- avatar (upload image)

**/login**

- login via username and password
- create user session until the earlier of logging out or 2 hours since last activity (server request), user redirected to login

**/profile**

- user profile details
  - edit displayname
  - change password
  - [delete user]

**/chats**

2 pane display - 'sidebar' and 'main'

- sidebar
  - conversation lists on the left
  - new chat option up top
    - find user, create message
  - logout button, redirects user to login
- main
  - selected message thread on the right
  - messages grouped by dates...
  - show message summaries in chronological order, capped at 'n' lines

  - each message includes:
    - message text
    - time of sending
    - 'show more' to expand larger messsages.
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
