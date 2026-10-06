mac@Macs-MacBook-Air-2 learning-assistant-api % 
mac@Macs-MacBook-Air-2 learning-assistant-api % BASE_URL=https://learning-assistant-api.my-project-6731503091.workers.dev/api
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i "$BASE_URL/bookings"
HTTP/2 200 
date: Tue, 06 Oct 2026 08:01:47 GMT
content-type: application/json
content-length: 595
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AMRXpNKviFFECimamdt4BHm4v26augFOZ6MvdekhZFDMyhwwLL6ijRg35xtLjyH6jB9AG4AzJs36ihXyLxoVCngTT150BT3DiKyirZhX%2FUIruT%2FdBH7LCDsAN7%2FWD81zL7dLzMaPQo6%2FhTLa8LOwhABmHF%2BJqAU7j4nKC9IdNxC7PTbSK29FvT5Eyw%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46323dbfa28d521-NRT
alt-svc: h3=":443"; ma=86400

[{"id":"34d998fe-d6f5-40bf-bc0f-0bc9d0c51847","equipmentId":"eq-2","borrowerName":"Jaidee","startAt":"2026-10-20T09:00:00.000Z","endAt":"2026-10-20T11:00:00.000Z","purpose":"Class presentation"},{"id":"b1d997b2-945e-4af8-95df-9f804e3018fc","equipmentId":"eq-1","borrowerName":"Somchai Jaidee","startAt":"2026-10-20T09:00:00.000Z","endAt":"2026-10-20T11:00:00.000Z","purpose":"Class presentation"},{"id":"5d7a060d-0027-4079-8662-03686c3a9528","equipmentId":"eq-1","borrowerName":"Cloudflare User","startAt":"2026-10-22T09:00:00.000Z","endAt":"2026-10-22T11:00:00.000Z","purpose":"Live API test"}]%    
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Evidence User",
    "startAt": "2027-01-10T09:00:00.000Z",
    "endAt": "2027-01-10T11:00:00.000Z",
    "purpose": "Live API evidence test"
  }'
HTTP/2 201 
date: Tue, 06 Oct 2026 08:02:01 GMT
content-type: application/json
content-length: 204
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fUCu6SgwINSLObIGcAIkdoDORsj%2FJJbbZ68z7tLQGRPn6q5jPJN3NtwV1CLQvYGit9Wob2QdxxQgmL9nIUMba5hiwS1jRuwPGWIQzcSJsAjm%2F3u6WV4oYPMtagvF%2FeXTlVMWL9u6tFb4xUrZ9wpbsU%2BwFsXytC7wbgxu0EXYjzOFWPWxHXRaWGuIuw%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46324345ea607a9-HKG
alt-svc: h3=":443"; ma=86400

{"id":"6bab5658-c964-4ee6-a111-df943f7a5d96","equipmentId":"eq-1","borrowerName":"Evidence User","startAt":"2027-01-10T09:00:00.000Z","endAt":"2027-01-10T11:00:00.000Z","purpose":"Live API evidence test"}%                                                                                               
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings/BOOKING_ID"
HTTP/2 404 
date: Tue, 06 Oct 2026 08:02:17 GMT
content-type: application/json
content-length: 29
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Nbt0gCnS6fm1TEsMxU9EvXgh56u4tW3P3wDhHOlXV%2BbVoRV1t3iqvGAjGuoP0tCx%2Bx3NyYoDssWgySO8rLjSFG%2F1Et6zbPfRJz2i9eLnt12A8fV9cicGlFwjRuwKjn57NFmEgz4ntuZeSa7Bw4fqRnwpnwNH36UG9Z2ru6MrB8VJxipI8Wild1sQMA%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46324984fa38936-SIN
alt-svc: h3=":443"; ma=86400

{"error":"Booking not found"}%                                                                                                                        
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-2",
    "borrowerName": "Evidence User",
    "startAt": "2027-01-11T09:00:00.000Z",
    "endAt": "2027-01-11T11:00:00.000Z",
    "purpose": "Live API evidence test"
  }'
HTTP/2 201 
date: Tue, 06 Oct 2026 08:02:44 GMT
content-type: application/json
content-length: 204
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XqTV84D5DDTW3ffEFbPHCeCFrC0cOPLuj%2Fbg3HDlHIJ9zai22Yydh2GXOrt%2BvMS%2FyDXi8NuyXAZrVgSt8yqmxVudZOeaxo9owoQ%2BvVnhnCIDl%2FczngMw6ksMChfZ9Dx3tiQptfeFmSA6Rk8pX%2FYi%2BMY8hx9x5OMdIIYNUSLB%2FNhfvbfGTlNvMWCzbQ%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a4632543787584ba-HKG
alt-svc: h3=":443"; ma=86400

{"id":"b552eaa9-6eb6-4837-b889-c7b9a925f2be","equipmentId":"eq-2","borrowerName":"Evidence User","startAt":"2027-01-11T09:00:00.000Z","endAt":"2027-01-11T11:00:00.000Z","purpose":"Live API evidence test"}%                                                                                               
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings/b552eaa9-6eb6-4837-b889-c7b9a925f2be"
HTTP/2 200 
date: Tue, 06 Oct 2026 08:03:07 GMT
content-type: application/json
content-length: 204
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VuDqN7JuUbMBkuDfaSyhRCkeQTSbyy8NCs9DA%2FxACge7GJET0eD3SSIN5JYgDRBAHlseYEn2MeHuG3tYZaGU6b%2FexItLe04v7MGG0AgHWGsGmMkQ93z3J0LXWYTKe2t5A1N%2BQU2wkTb9Qlypi2WFdHTWGxJHZAeay7pBALwZBQaCvdeKpsFwQWWqtg%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46325d46f73b4b4-HKG
alt-svc: h3=":443"; ma=86400

{"id":"b552eaa9-6eb6-4837-b889-c7b9a925f2be","equipmentId":"eq-2","borrowerName":"Evidence User","startAt":"2027-01-11T09:00:00.000Z","endAt":"2027-01-11T11:00:00.000Z","purpose":"Live API evidence test"}%                                                                                               
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X PATCH \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings/b552eaa9-6eb6-4837-b889-c7b9a925f2be" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-2",
    "borrowerName": "Updated Evidence User",
    "startAt": "2027-01-11T13:00:00.000Z",
    "endAt": "2027-01-11T15:00:00.000Z",
    "purpose": "Updated live evidence test"
  }'
HTTP/2 200 
date: Tue, 06 Oct 2026 08:03:39 GMT
content-type: application/json
content-length: 216
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tTOdVQpy1%2BcScbV2j4jqKgvGRit9DBmBTmyeXmYPUnserR1ww%2BiXZ0xGkHWagjwnE40StJZQ2RQOD2alxhY6EPGHHXQ%2F1575%2FxKAOmzt2oSWmgZeEukEAQ4jJymsswQl9yGVyCIt8MI3OaxV3Xc7P%2Fj0UScGlnrGa3qTU2zdMUJHnZDN0cOJPfk1KA%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46326985e7002a9-HKG
alt-svc: h3=":443"; ma=86400

{"id":"b552eaa9-6eb6-4837-b889-c7b9a925f2be","equipmentId":"eq-2","borrowerName":"Updated Evidence User","startAt":"2027-01-11T13:00:00.000Z","endAt":"2027-01-11T15:00:00.000Z","purpose":"Updated live evidence test"}%                                                                                   
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X DELETE \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings/b552eaa9-6eb6-4837-b889-c7b9a925f2be"
HTTP/2 204 
date: Tue, 06 Oct 2026 08:03:54 GMT
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QLpMaTYKpvYK6WzjcK5IqslSGCxTVm4kwvZpASpoymiVwi5tRwC2WD2DvUVNWNY9Jkn3%2BvEhSRZQgOvNNem%2BXZqDnzK7TAN18J%2BzJRrmIp2t5LLMoXGqBOUzoeMAtHnyDhPp2Kru3MpT8rEdMtCIzx0pM%2Fw481aI0Cd3mhXJL3Obd4W553QdqYXr%2Fg%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46326fa88a5819c-SIN
alt-svc: h3=":443"; ma=86400

mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings/b552eaa9-6eb6-4837-b889-c7b9a925f2be"
HTTP/2 404 
date: Tue, 06 Oct 2026 08:04:08 GMT
content-type: application/json
content-length: 29
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nXYKtEryNE5QIlUUGykEs1%2BA2lnGylvRfdGcG8dRoZCjzCHEznjt8vf0mpyyNhE14lMOij1UBaOGCaXP3HcEVEVel02jatGg0X9Wor6id%2BquoDZcZ5AUI1eBZ%2BZSZG%2FdOhaVVceAuTQkuL2WolAyBaOMoN%2F0SEszlVO%2FBEokfpB7l21Gkn4Dq%2FFOYA%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a463274e098a35f2-SIN
alt-svc: h3=":443"; ma=86400

{"error":"Booking not found"}%                                                                                                                        
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-2",
    "borrowerName": "Validation User",
    "startAt": "2027-02-01T12:00:00.000Z",
    "endAt": "2027-02-01T10:00:00.000Z",
    "purpose": "Invalid time test"
  }'
HTTP/2 400 
date: Tue, 06 Oct 2026 08:04:22 GMT
content-type: application/json
content-length: 40
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zB6NVGkOzqoNRN17zSM1OVOJUGaQ5MjHu%2Fg3wuiT4hehftPL5cFeugxpZjHX4C8eAl6rTu8ZWdOgu8ZZlhwN6vMze4ReL%2FSh61MVVNxXrfur1fENFRDBGujaNIwBL0Tk1b7q%2F8b7JrHrQOnh8l5lhJcFYZrklgcyI7Ek5kP8PHbmLpVr4gqWs7Ps3w%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46327a59d88445e-SIN
alt-svc: h3=":443"; ma=86400

{"error":"startAt must be before endAt"}%                                                                                                             
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-999",
    "borrowerName": "Unknown Equipment",
    "startAt": "2027-02-02T09:00:00.000Z",
    "endAt": "2027-02-02T10:00:00.000Z",
    "purpose": "Not found test"
  }'
HTTP/2 404 
date: Tue, 06 Oct 2026 08:04:36 GMT
content-type: application/json
content-length: 31
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=axavHZtc%2FCvbAfUPAcQBWOE9HIuVxiVZRYUv2KSKKsNGjTCENRCDXXPE9nzYbhyt4AMG3NDFAtRxadVvDng52nYnoh9eTQDbrh88RytESyJix%2FYx2aVOw6emZBtf7FszeUtNVyMRXpWJYiSvsRyWV%2BxsRdMTabNfMJFViMh3zxTHqATkQYpf1GOpzA%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a4632802b86881f0-SIN
alt-svc: h3=":443"; ma=86400

{"error":"Equipment not found"}%                                                                                                                      
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-2",
    "borrowerName": "First Booking",
    "startAt": "2027-02-03T09:00:00.000Z",
    "endAt": "2027-02-03T11:00:00.000Z",
    "purpose": "Conflict base test"
  }'
HTTP/2 201 
date: Tue, 06 Oct 2026 08:04:50 GMT
content-type: application/json
content-length: 200
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=c4GzNjM8870ltLIomi4UAtQhXgclZstskcf1fPLpfTCZzdkcusoAF2MNEpIeMcwsDKOaZZ5crSQAcFfH9U9pLGXCDbS5tyqyRDUTU%2FP2tf5h02nVr5JMWZI%2FHdhqT%2B2xNtb0SXH9Nh04jJrc%2BKR8nn5sztDqedxiBYmeTOyRLXeCUnbzJk0Jx2gDEQ%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a4632852d90a75ea-NRT
alt-svc: h3=":443"; ma=86400

{"id":"c2ac111b-a63b-47e1-8b1d-c9be9dc30f95","equipmentId":"eq-2","borrowerName":"First Booking","startAt":"2027-02-03T09:00:00.000Z","endAt":"2027-02-03T11:00:00.000Z","purpose":"Conflict base test"}%                                                                                                   
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "https://learning-assistant-api.my-project-6731503091.workers.dev/api/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-2",
    "borrowerName": "First Booking",
    "startAt": "2027-02-03T09:00:00.000Z",
    "endAt": "2027-02-03T11:00:00.000Z",
    "purpose": "Conflict base test"
  }'
HTTP/2 409 
date: Tue, 06 Oct 2026 08:05:23 GMT
content-type: application/json
content-length: 53
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PrbO4AMNiDutZM9qS6IYSh7Ee%2BV4lHM05%2B1y8RLjkwQvFj7wNhXXGa%2BM09%2BvUglau2UNPd8zZp6BXSZ8EgePw%2FMeWsWdqlm2J2FGEJz5Hitehdm39XjCBzcflDDYvZgJYOyXDd0rNm7wBMUj5ymXZUpUjOLv8MKHtfK0PLr34sxadQm8jou98tSYUQ%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46329256aec84c6-HKG
alt-svc: h3=":443"; ma=86400

{"error":"Equipment is already booked for this time"}%                                                                                                
mac@Macs-MacBook-Air-2 learning-assistant-api % 