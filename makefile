ENVIRONMENT?=staging

default: cook

cook:
	@echo "-> cooking env to <$(ENVIRONMENT)>"
	@cp .firebaserc-$(ENVIRONMENT) .firebaserc
	@cp app/js/firebase-config-$(ENVIRONMENT).js app/js/firebase-config.js
	@echo 😁 done

deploy: cook
	@echo "-> deploying to <$(ENVIRONMENT)>"
	@firebase deploy
