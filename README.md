clinic flame --autocannon [ "/signup?payload=foo" -M POST -d 100 -c 500 ] -- node .
clinic flame --autocannon [ "/me" -d 100 -c 500 --headers="Authorization=Bearer $TOKEN" ] -- node .