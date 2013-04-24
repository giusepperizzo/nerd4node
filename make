REPORTER = dot
TESTS = test/*.js

test: 
  @NODE_ENV=test ./node_modules/.bin/mocha \
    --reporter $(REPORTER) \
    --timeout 50000 \
    $(TESTS)

.PHONY: test