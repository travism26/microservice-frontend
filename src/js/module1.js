//some module code would be here

//var $ = require('jquery');

//$('h1').html("new text")

var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Louisa",
  "last_name": "Benoit",
  "email": "lcohan0@nhs.uk",
  "gender": "Female",
  "ip_address": "227.74.91.80"
}, {
  "id": 2,
  "first_name": "Benedikt",
  "last_name": "Sugarman",
  "email": "bkun1@adobe.com",
  "gender": "Male",
  "ip_address": "91.17.58.209"
}, {
  "id": 3,
  "first_name": "Chester",
  "last_name": "Gillice",
  "email": "civanyushkin2@dropbox.com",
  "gender": "Male",
  "ip_address": "113.75.127.98"
}, {
  "id": 4,
  "first_name": "Felita",
  "last_name": "Tunnick",
  "email": "ffifield3@si.edu",
  "gender": "Female",
  "ip_address": "187.1.115.81"
}, {
  "id": 5,
  "first_name": "Salomone",
  "last_name": "Maestro",
  "email": "stippetts4@imgur.com",
  "gender": "Male",
  "ip_address": "22.12.164.118"
}, {
  "id": 6,
  "first_name": "Tamas",
  "last_name": "McQuin",
  "email": "tpulteneye5@qq.com",
  "gender": "Male",
  "ip_address": "22.24.236.94"
}, {
  "id": 7,
  "first_name": "Man",
  "last_name": "Hobben",
  "email": "mragate6@youtube.com",
  "gender": "Male",
  "ip_address": "24.67.238.186"
}, {
  "id": 8,
  "first_name": "Shelby",
  "last_name": "Jozsa",
  "email": "sdeighton7@pbs.org",
  "gender": "Female",
  "ip_address": "150.1.246.6"
}, {
  "id": 9,
  "first_name": "Gayle",
  "last_name": "Luard",
  "email": "gskentelbery8@vkontakte.ru",
  "gender": "Female",
  "ip_address": "129.182.46.82"
}, {
  "id": 10,
  "first_name": "Arden",
  "last_name": "Skill",
  "email": "amacgray9@mac.com",
  "gender": "Female",
  "ip_address": "11.167.248.118"
}, {
  "id": 11,
  "first_name": "Brittany",
  "last_name": "Stowte",
  "email": "bburketta@home.pl",
  "gender": "Female",
  "ip_address": "78.82.102.60"
}, {
  "id": 12,
  "first_name": "Ludwig",
  "last_name": "Tomala",
  "email": "lsilvertonb@usatoday.com",
  "gender": "Male",
  "ip_address": "43.168.45.131"
}, {
  "id": 13,
  "first_name": "Karim",
  "last_name": "Accum",
  "email": "ksambrokc@theglobeandmail.com",
  "gender": "Male",
  "ip_address": "13.91.88.62"
}, {
  "id": 14,
  "first_name": "Petra",
  "last_name": "Wilkinson",
  "email": "pellicottd@php.net",
  "gender": "Female",
  "ip_address": "17.102.189.212"
}, {
  "id": 15,
  "first_name": "Mary",
  "last_name": "Abella",
  "email": "mrollingsone@arstechnica.com",
  "gender": "Female",
  "ip_address": "56.100.219.191"
}, {
  "id": 16,
  "first_name": "Veronique",
  "last_name": "Stanman",
  "email": "vvan der waltf@over-blog.com",
  "gender": "Female",
  "ip_address": "178.120.177.243"
}, {
  "id": 17,
  "first_name": "Seamus",
  "last_name": "Simcoe",
  "email": "sgowdridgeg@odnoklassniki.ru",
  "gender": "Male",
  "ip_address": "90.204.142.253"
}, {
  "id": 18,
  "first_name": "Roman",
  "last_name": "Pepin",
  "email": "rpaternosterh@clickbank.net",
  "gender": "Male",
  "ip_address": "10.50.29.112"
}, {
  "id": 19,
  "first_name": "Keith",
  "last_name": "Kershaw",
  "email": "kdulintyi@guardian.co.uk",
  "gender": "Male",
  "ip_address": "67.19.213.54"
}, {
  "id": 20,
  "first_name": "Gannie",
  "last_name": "Bramhill",
  "email": "gadamj@yellowbook.com",
  "gender": "Male",
  "ip_address": "186.27.95.77"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

//alert(femaleCount + " number of females");
console.log(femaleCount + " number of females");
console.log("module1 stuff");