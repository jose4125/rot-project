docker build -t jose4125/ui-rot:latest -t registry.heroku.com/$HEROKU_APP/web ./ui-rot
# push to docker hub
docker push jose4125/ui-rot:latest
# push to heroku
docker push registry.heroku.com/$HEROKU_APP/web
# new release on heroku
heroku container:release web --app $HEROKU_APP
