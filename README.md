# Django Angular Boilerplate Application
This is a sample project based on Django and Angular framework. Frontend is developed in Angular using rest api's from Django application.


## Setup
1. Clone the project
   > git clone git@192.168.2.7:<your username>/django-angular-boilerplate.git
2. Install virtulenv (https://pypi.python.org/pypi/virtualenv)
3. Create and activate virtualenv
   > virtualenv -p python3 env <br/>
   > source env/bin/activate
4. Install required packages
   > pip install -r jely/requirements.txt
5. Settings
   > cd jely <br/>
   copy jely/settings.py.txt to jely/settings.py and update the db credentials
6. Setup database
   > python manage.py migrate
7. Run the server
   > python manage.py runserver
8. Check if application is running correctly
   > http://127.0.0.1:8000/
9. Create superuser for the admin backend
   > python manage.py createsuperuser
10. Login as superuser
   > http://127.0.0.1:8000/admin
   
## Structure
Django application
> Jely folder

Angular application
> website folder

## How to use
You can indepentely develop Angular application and then run below command to deploy angular app to your django application.
> bash deploy.sh
