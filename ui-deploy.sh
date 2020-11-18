docker build -t jose4125/ui-rot:latest -f ./ui-rot/Dockerfile ./ui-rot
docker tag jose4125/ui-rot:latest registry.heroku.com/$HEROKU_APP/web
# push to docker hub
docker push jose4125/ui-rot:latest
# push to heroku
docker push registry.heroku.com/$HEROKU_APP/web
# new release on heroku
heroku container:release web --app $HEROKU_APP
