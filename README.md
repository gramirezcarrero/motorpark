# Motorpark
Mini app to register vehicles.
## screen 1
    1. In the first screen we have a list of vehicles.
You can seach by licence plate or by type of vehicle.

![Alt text](/screenshot/screenshot1.png?raw=true "List")

## screen 2 
    2. The second screen is to create a new item into the system. You can choose a type of vehicle and saved.

![Alt text](/screenshot/screenshot2.png?raw=true "List")
## screen 3 
    Modal for update the status. When client is going out and paid. You can filter and click in a vehicle to update the status.

![Alt text](/screenshot/screenshot3.png?raw=true "List")
# TO INIT THE APP
The app Contain 3 folders for server and client and database.
commands:
```
    cd client
    yarn && yarn start
    cd ../server
    yarn && yarn start
```
### update the config
    You need change the credentials in config.json:
        "development": {
        "username": "your user name",
        "password": "your password"
        }
You can create the database motopark or import this: in the directory database.
```      
    cd database
        import the database
```
You can run the test into server or the client.
```
    cd the_directory
    yarn run test

```
I hope you like it.