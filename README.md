## Google Calendar - Set Appointment Application 

#  Description 

What my application does ?

my Application allow Users to 

1 ) Set a Date 
2 ) Get all Dates for Specific Time-Region 
3 ) Update on Existing Date 
4 ) Delete Existing Date 


Why i used the technologies i used ? 

1 ) Node.js     : suitful JavaScript environment for creating and   managing APIs
2 ) Express.js  : create a Server 
3 ) googleapis  : connect with Google Calendar and Integrate with its apis
4 ) dotenv      : save Local Environment Variables 

Some of the challenges i faced and features i hope to implement in the future ?

-   PROBLEMS    =>      SOLUTIONS 

-   i faced Challenge in integrate my app with Google-Calendar       =>   i read many documents about this tobic 

-   i faced Challenge in knowing where is my error exactly           =>   i made Error Handling

-   i faced Challenge in difficulity of maintain my project in future =>  i followed Object Oriented Programming Paradigm ( OOP )


# How to Install and Run the Project ?

## Integration

- [ Follow tis video to install your environment variables for integrate project with Google-Calendar ](https://youtu.be/dFaV95gS_0M?si=MwbLEHpssQK-WvCR)

## Local environment

1 ) Clone the Repository 
2 ) run  { npm init } to initialize your Node environment
3 ) run  { npm i dotenv express googleapis } to install require dependencies 
4 ) OPTIONAL : run  { npm i nodemon } to install devDependency of monitoring changes in your code
5 ) run node app.js (if you installed nodemon run npm start) to start your server 

## Set [.env] Variables

PORT        = your port 
CREDENTIALS = your CREDENTIALS
CALENDAR_ID = your CALENDAR_ID


# How to Use the Project ?

 => [ PROJECT DEMO ](https://youtu.be/1aOIglninzY)

## BOOK EVENTS 

1 ) You Can BOOK an EVENTS , by following Google-apis for calendar Format 

{
    "summary" : "{{HERE IS SUMMARY}}" ,
    "description" : "{{HER IS DESCRIPTION}}" ,
    "start" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
    "end" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
}


## GET EVENTS  

2 ) You Can GET all Events in specific time-region , by following Google-apis for calendar Format 

{
    "eventTimeStart" : "{{TIME}}",
    "eventTimeEnd" : "{{TIME}}",
    "timeZone" : "{TIMEZONE}"
}

## UPDATE SPECEFIC EVENT 

3 ) You Can UPDATE an Appointment , by insert eventId in the URL then follow Google-apis for calendar Format 

{
    "summary" : "{{HERE IS SUMMARY}}" ,
    "description" : "{{HER IS DESCRIPTION}}" ,
    "start" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
    "end" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
}


## DELETE SPECEFIC EVENT 

4 ) You Can DELETE an Event , just insert eventId in the URL  



# License

- This project is licensed under the ([GPL License](https://choosealicense.com/licenses/gpl-3.0/)) - see the [LICENSE](LICENSE) file for details.
