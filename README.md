clinic flame --autocannon [ "/signup?payload=foo" -M POST -d 100 -c 500 ] -- node fast-jwt-server.js
clinic flame --autocannon [ "/signup?payload=foo" -M POST -d 100 -c 500 ] -- node jose-server.js
clinic doctor --autocannon [ "/signup?payload=foo" -M POST -d 100 -c 500 ] -- node jsonwebtoken-server.js


clinic doctor --autocannon [ "/signup?payload=foo" -M POST -d 60 -c 500 ] -- node fast-jwt-server.js
clinic doctor --autocannon [ "/signup?payload=foo" -M POST -d 60 -c 500 ] -- node jose-server.js
clinic doctor --autocannon [ "/signup?payload=foo" -M POST -d 60 -c 500 ] -- node jsonwebtoken-server.js






clinic flame --autocannon [ "/me" -d 100 -c 500 --headers="Authorization=Bearer $TOKEN" ] -- node fast-jwt-server.js
clinic flame --autocannon [ "/me" -d 100 -c 500 --headers="Authorization=Bearer $TOKEN" ] -- node jose-server.js