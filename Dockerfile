FROM cypress/base:12.1.0
#ENV cucumber-tag ui-tests
RUN mkdir /app
WORKDIR /app
COPY . /app
#RUN npm install --save-dev cypress
RUN npm install
#RUN $(npm bin)/cypress verify
#CMD ["/bin/sh", "entrypoint.sh"]
#CMD npm run lint -- -e="$ENVIRONMENT" -t="$TESTS"
#CMD npm run node_modules/.bin/cypress-tags run -e TAGS="@rest-tests"
CMD ls
