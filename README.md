This is the frontend part of the technical assessment. In as much as it did deploy successfully, I advise using it locally for the purpose of interacting with backend, for the following reason;
 - The backend service provides resources over HTTP, and the frontend content such as initial pages are loaded over HTTPS connection. This is blocked by the browser causing a mixed content error.
 - Well the issue can be resolved by loading all resources over a secure HTTPS connection; but for my case I dont have a domain that I can use to map to  my server public ip; and for this reason I am access my backend service via htpp://public_server_ip/api/
 I did develop my backend service using django and django restframework, the service is hosted on an aws ec2 instance.

 It was my great desire to provide all the code(frontend, and backend) under one repository but some issues with github actions used for deployment of the frontend app made me to resolve to creating a repo specifically for the frontend code. I'll provide the link to the initial repo containing the backend code and the setups to setup it up.

 For the sake of this tenchical assesment, I'll have my env file with the API address in this repo.

 ## Getting started
  - Clone the frontend repo using this link https://github.com/Amakoye/savannah-info-frontend.git
  - Inside the root project directory Run ``` yarn install``` or ```npm install``` to install dependencies
  - Run ```yarn dev``` or ```npm run dev``` to start the development server, the app will run on  http://localhost:4200
  - Run ```yarn build && yarn start``` or ```npm run build && npm  start``` to run the app in production mode, this will run on   http://localhost:3000

## Setting up the backend service locally
 - Clone the initial repo I started working with at https://github.com/Amakoye/savannah-informatics-test.git
 - Change directory into backend folder
 - Setup docker if not installed and run ```docker compose up -d```. This is responsible for starting our database service. I am using a postgress database with postgres docker image. -d flag makes the service run in detachable mode
 - Create a python environment using ```python3 -m venv env```
 - Activate the environment using ```source /env/bin/activate```
 - Install project dependecince using ```pip install -r requirements.txt```
 - Run migrations using ```python manage.py makemigrations && python manage.py migrate```
 - Start the server using ```python manage.py runserver```