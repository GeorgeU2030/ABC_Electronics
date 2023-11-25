CREATE DATABASE abc_postgres;
CREATE USER adminabc WITH PASSWORD 'abc';

ALTER ROLE adminabc SET client_encoding TO 'utf8';
ALTER ROLE adminabc SET default_transaction_isolation TO 'read committed';
ALTER ROLE adminabc SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE abc_postgres TO adminabc;

ALTER DATABASE abc_postgres OWNER TO adminabc;



