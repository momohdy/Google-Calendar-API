Google Calendar - Set Appointment Application 

Modules => node_modules 

Custom Modules => User Model 

Paradigm ....
Application is OOP Paradigm 

# Video Description ==>>  https://drive.google.com/file/d/1OcU-7DAsdO6EbbsdLbSrzGESip4MNzAx/view?usp=sharing

1 ) You Can BOOK an Appointment 

by following Google-apis for calendar Format 

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

///////////////////

2 ) You Can GET all Appointments in specific time region  

by following Google-apis for calendar Format 

{
    "eventTimeStart" : "{{TIME}}",
    "eventTimeEnd" : "{{TIME}}",
    "timeZone" : "{TIMEZONE}"
}



//////////////////////////

3 ) You Can UPDATE an Appointment 

by following Google-apis for calendar Format 

{
    "start" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
    "end" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
    "summary" : "{{HERE IS SUMMARY}}" ,
    "description" : "{{HER IS DESCRIPTION}}" ,
}

//////////////////////////

4 ) You Can DELETE an Appointment 

by following Google-apis for calendar Format 

{
    "start" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
    "end" : " {
        "dateTime": "{{TIME}}",
        "timeZone": "{TIMEZONE}"
    }" ,
    "summary" : "{{HERE IS SUMMARY}}" ,
    "description" : "{{HER IS DESCRIPTION}}" ,
}
