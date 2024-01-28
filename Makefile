# Variables
LOG_FOLDER = ./logs
# - Eslint
ESLINT_CONFIG = ./.eslintrc.json
ESLINT_TARGET = ./src

# - DoIUse
DOIUSE_BROWSERS = ">0.3%, last 5 versions and not dead, not op_mini all"
DOIUSE_TARGET = ./src 

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
dev: install ## Run the `next dev` environnement.
	@npm run dev

# - Utilities
install: ## Install all needed stuff for the project to run (doesn't include dependencies).
	@npm install

eslint: ## Run Eslint and autofix all files in `./src/`.
	@mkdir -p $(LOG_FOLDER)/$$(date "+%Y-%m-%d")/
	@npx eslint --config $(ESLINT_CONFIG) --fix $(ESLINT_TARGET) | tee -a $(LOG_FOLDER)/$$(date "+%Y-%m-%d")/eslint.$$(date "+%Y-%m-%d.%H:%M:%S").log

doiuse: ## Run DoIUse to check CSS Compatibility
	@mkdir -p $(LOG_FOLDER)/$$(date "+%Y-%m-%d")/
	@npx doiuse -b $(DOIUSE_BROWSERS) $$(find $(DOIUSE_TARGET) -name "*.css" -type f) | tee -a $(LOG_FOLDER)/$$(date "+%Y-%m-%d")/doiuse.$$(date "+%Y-%m-%d.%H:%M:%S").log
