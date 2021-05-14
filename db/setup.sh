psql -f install.sql -U postgres
PGPASSWORD=12345 psql -d league -f structure.sql -U user_league