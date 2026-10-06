mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST "$BASE_URL/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Cloudflare User",
    "startAt": "2026-11-01T09:00:00.000Z",
    "endAt": "2026-11-01T11:00:00.000Z",
    "purpose": "Live API test"
  }'
HTTP/2 201 
date: Tue, 06 Oct 2026 07:38:11 GMT
content-type: application/json
content-length: 197
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5EvAZSPs%2FJSaUwYgg3s%2Ft%2F%2Bf9MI3E3b1rVbjnVgtmQluQKlVIHPcsrFLL2VXw9zTJk9eRc6i4QY4h5H6yfASFK7nLjYedO6bQWNUZfeYGRaDOA6ea1sDrUZvIE5PuCJZtmzCXpX0Ozr%2F%2BrfilddnP8UFVNeUClkDqVERUqzoNg2MUmwHiStCrkJSnQ%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a463014e38e05de4-HKG
alt-svc: h3=":443"; ma=86400

{"id":"8b6d4207-0306-4896-af49-49f877163725","equipmentId":"eq-1","borrowerName":"Cloudflare User","startAt":"2026-11-01T09:00:00.000Z","endAt":"2026-11-01T11:00:00.000Z","purpose":"Live API test"}%    
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i "$BASE_URL/bookings/8b6d4207-0306-4896-af49-49f877163725"
HTTP/2 200 
date: Tue, 06 Oct 2026 07:38:58 GMT
content-type: application/json
content-length: 197
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dRZgZZdKFtDx5G1ONwYEM1PDPeLUooXgG%2Bl%2Bfa2Na2uzYUISEXvcibfBYn7NaNtCYcRhc33N%2Br7UQoNpDXCJJ7sX4OcUzjbjAPq0tbHX5AGrXyYJhcZvJxQTrFf28OQ5PxrVVUNCimLEGNXawXcc%2ByykhuxGjZUgNss53HrtYY2cMRw7AWeGjCufaw%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a4630272adc50399-HKG
alt-svc: h3=":443"; ma=86400

{"id":"8b6d4207-0306-4896-af49-49f877163725","equipmentId":"eq-1","borrowerName":"Cloudflare User","startAt":"2026-11-01T09:00:00.000Z","endAt":"2026-11-01T11:00:00.000Z","purpose":"Live API test"}%    
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X PATCH \
  "$BASE_URL/bookings/8b6d4207-0306-4896-af49-49f877163725" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-1",
    "borrowerName": "Updated Cloudflare User",
    "startAt": "2026-11-01T13:00:00.000Z",
    "endAt": "2026-11-01T15:00:00.000Z",
    "purpose": "Updated live API test"
  }'
HTTP/2 200 
date: Tue, 06 Oct 2026 07:39:23 GMT
content-type: application/json
content-length: 213
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9QBs611ErdGUDroJmtbDGdmQimDZQqtUL92EPdNBIOMPuoWOcGxkbwunynE16MDVbfrpaxTzuZc55X%2F7LE0XSolvSmLHH2SnnPwZrmjTc%2Frs0aPuEWvP8wei90Oc384qlP2x33l7SjuNzg0F80kgB%2BfWlCMPaiU50T%2BksZQaKdolsWK%2FY8hj%2F%2BwB8g%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a463030d4f7487a8-SIN
alt-svc: h3=":443"; ma=86400

{"id":"8b6d4207-0306-4896-af49-49f877163725","equipmentId":"eq-1","borrowerName":"Updated Cloudflare User","startAt":"2026-11-01T13:00:00.000Z","endAt":"2026-11-01T15:00:00.000Z","purpose":"Updated live API test"}%                                                                                         
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X DELETE \
  "$BASE_URL/bookings/8b6d4207-0306-4896-af49-49f877163725"
HTTP/2 204 
date: Tue, 06 Oct 2026 07:39:42 GMT
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=obMG1I6VVetYnzDLv%2FIpdu49Mw%2BVtodO0wI5LMZbLr7YPcShK94Evh%2FDNwLOET2eA%2BvEuUSg4LNlG9XqYa15PCSfr%2F4VeUuHhA75ijrZVXbYIwDc46VNcHEEmWSoyQGBgyg1GdaiuGauBYQN8oMcHhVwQPq6KSO8NjS1tHmbFuRucb6cpldU5Y218A%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a4630386db8d08d1-HKG
alt-svc: h3=":443"; ma=86400

mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i \
  "$BASE_URL/bookings/8b6d4207-0306-4896-af49-49f877163725"
HTTP/2 404 
date: Tue, 06 Oct 2026 07:39:58 GMT
content-type: application/json
content-length: 29
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=adJmXqX4gSabfoDZI1JyPITh4%2F2TqrtivOpUjM%2BPDMw56dUcjTnXJ0CrrsluVgbYry9rD%2FbtlcANE%2BEzkP2S6736m43E4OqsGD5xGE0BHMzAgsj0OqVscoIZ87JVLAebMeOIR3UVm4doQslEJT3P%2Fe3Q0Om2DE8ClHux6jZsvv5B6PRb%2BvOoJYNcew%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46303eb1df5aecd-SIN
alt-svc: h3=":443"; ma=86400

{"error":"Booking not found"}%                                                                       
mac@Macs-MacBook-Air-2 learning-assistant-api % curl -i -X POST \
  "$BASE_URL/bookings" \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentId": "eq-2",
    "borrowerName": "Validation Test",
    "startAt": "2026-12-01T09:00:00.000Z",
    "endAt": "2026-12-01T11:00:00.000Z"
  }'
HTTP/2 400 
date: Tue, 06 Oct 2026 07:42:03 GMT
content-type: application/json
content-length: 34
report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=E9vzMQn%2BWAbjueIeCI%2B2qGf41bT66OcRrmNLknJ1mnPnj%2FLVbnjNsp6qNLUpdkOsqiKdoPe8hiqgTRCpTWSpfcCi7iV6m9rn70wao%2BnegAexbE4C5ZeAQW1qjqs0EpN5DKTAq%2BdFtZ8n3ul2Jih4b8%2BoDjSHKJFbxB7KwbXGYlvceMH1bjd6I6L6UA%3D%3D"}]}
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
server: cloudflare
cf-ray: a46306fa0f6ac8d1-SIN
alt-svc: h3=":443"; ma=86400

{"error":"Missing required field"}%                                                                                                                   
mac@Macs-MacBook-Air-2 learning-assistant-api % 
mac@Macs-MacBook-Air-2 learning-assistant-api % 
mac@Macs-MacBook-Air-2 learning-assistant-api % 