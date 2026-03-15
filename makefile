ENVIRONMENT ?=dev
DN ?= studio-$(ENVIRONMENT).fp-cameroon.com
CDN_ZONE ?= e12a5207c887608d69a76c72c0c22346
CDN_API_TOKEN ?=

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

purge:
	@echo "-> purge cache of <$(DN)>"
	@curl -X POST "https://api.cloudflare.com/client/v4/zones/$(CDN_ZONE)/purge_cache" \
			-H "Authorization: Bearer $(CDN_API_TOKEN)" \
			-H "Content-Type: application/json" \
			--data '{"files":["https://$(DN)/"]}'


