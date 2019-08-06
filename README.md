# motorpark
Mini app to register vehicles.
## screen 1
    the first screen we have a list for vehicles.
    you cand seach by licence Plate or by type of vehicle.

![Alt text](/screenshot/screenshot1.png?raw=true "List")

## screen 2 
    the second it's by create a new insert into the sistem. 
    you should choose a type  vehicle and save
![Alt text](/screenshot/screenshot2.png?raw=true "List")
## screen 3 
    Modal for update the status when client going be out and pay.
    you can filter, and you can click in a vehicle to update
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
    you need update config whit your own credentials config.json
        "development": {
        "username": "your user name",
        "password": "your password"
        }
you can create the database  motopark or import this: in the directory database.
```      
    cd database
        import the database
```
you can run the test into server or the client 
```
    cd the_directory
    yarn run test

```
i hope you like it