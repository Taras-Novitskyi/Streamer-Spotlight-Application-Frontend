
#  Simple Streamer Spotlight Application
This repository contains the code for a simple streamer spotlight website. Users can add their favorite streamers, vote for them (upvote or downvote), and view the profile card of each created streamer.
## Features

- User Registration: When a user visits the website, a user account is automatically created and stored in the local storage.
- Streamer Submission: Users can add their favorite streamers using the "Add Streamer" form. They need to provide the streamer's name, description, and select the streaming platform from a dropdown list.
- Streamer List: The homepage displays a list of all submitted streamers along with the number of upvotes and downvotes. The list is updated in real-time as new streamers are added and votes are cast.
- Profile Cards: Users can view the profile card of each streamer, which includes the streamer's name, description, platform, and an image (static image URL).
- Voting: Users can upvote or downvote streamers to show their preference. Each user is allowed to vote only once for each streamer.
- Real-time Updates: The streamer list and voting counts are updated in real-time using sockets. This ensures that users see the latest information without manually refreshing the page








  ## Usage
On the homepage, you can add your favorite streamer using the "Add Streamer" form. Fill in all the required fields and click the "Add" button.
The list of streamers will be displayed on the homepage. You can view each streamer's profile card and vote (upvote or downvote) for them by clicking the respective buttons.



## Tech Stack

**Client:** React, Redux, Socket

**Server:** Node.js, Express, Socket, MongoDB


