The boiler plate for this application is taken from https://github.com/war-turtle/Obscura_5.5_backend.

This is the code for backend of inkers.ai assignment for summer internship.
The backend is currently hosted on aws ec2 using nginx and pm2 (to keep it live) at https://war-turtle.tk
This backend use mysql and cronjob to update password daily at midnight.
It's difficult to run cron job on heroku as there server sleeps after some time of inactivity.
I am not currently using docker or kubernetes to host the backend as the code is too simple.