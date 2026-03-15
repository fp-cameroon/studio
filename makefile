ENVIRONMENT?=dev

default: cook

cook:
	@echo "-> cooking env to <$(ENVIRONMENT)>"
	@cp .firebaserc-$(ENVIRONMENT) .firebaserc
	@cp app/js/firebase-config-$(ENVIRONMENT).js app/js/firebase-config.js
	@echo 😁 done

switch:
	@echo "-> switching project"
	@firebase use $(ENVIRONMENT)-fp-cameroon
	@echo 😁 done

deploy: cook switch
	@echo "-> deploying to <$(ENVIRONMENT)>"
	@firebase deploy
	@echo 😁 done

