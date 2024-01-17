# Variables
# - Eslint
ESLINT_CONFIG = ./.eslintrc.json
ESLINT_TARGET = ./src/

# Rules
# - Mandatory
.PHONY: all help help-md autophony

all: help

# - Misc.
help: ## Show this help.
	@grep "##" $(MAKEFILE_LIST) | grep -v "grep" | sed 's/:.*##\s*/:@\t/g' | column -t -s "@"

help-md: ## Show this help but in a markdown styled way. This can be used when updating the Makefile to generate documentation and simplify README.md's 'Make rules' section update.
	@grep "##" $(MAKEFILE_LIST) | grep -v "grep" | sed -E 's/([^:]*):.*##\s*/- ***\1***:@\t/g' | column -t -s "@"

autophony: ## Generate a .PHONY rule for your Makefile using all rules in the Makefile(s).
	@grep -oE "^[a-zA-Z-]*\:" $(MAKEFILE_LIST) | sed "s/://g" | xargs echo ".PHONY:"

# - Simple Workflow
dev: ## Run the `next dev` environnement.
	@npm run dev

# - Utilities
install: ## Install all needed stuff for the project to run (doesn't include dependencies).
	@npm install

lint: ## Run Eslint and autofix all files in `./src/`.
	@npx eslint --config $(ESLINT_CONFIG) --fix $(ESLINT_TARGET)
