docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kyrs6/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kyrs6/app ../..
