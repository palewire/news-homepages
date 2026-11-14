#
# Colors
#

# Define ANSI color codes
RESET_COLOR   = \033[m

BLUE       = \033[1;34m
YELLOW     = \033[1;33m
GREEN      = \033[1;32m
RED        = \033[1;31m
BLACK      = \033[1;30m
MAGENTA    = \033[1;35m
CYAN       = \033[1;36m
WHITE      = \033[1;37m

DBLUE      = \033[0;34m
DYELLOW    = \033[0;33m
DGREEN     = \033[0;32m
DRED       = \033[0;31m
DBLACK     = \033[0;30m
DMAGENTA   = \033[0;35m
DCYAN      = \033[0;36m
DWHITE     = \033[0;37m

BG_WHITE   = \033[47m
BG_RED     = \033[41m
BG_GREEN   = \033[42m
BG_YELLOW  = \033[43m
BG_BLUE    = \033[44m
BG_MAGENTA = \033[45m
BG_CYAN    = \033[46m

# Name some of the colors
COM_COLOR   = $(DBLUE)
OBJ_COLOR   = $(DCYAN)
OK_COLOR    = $(DGREEN)
ERROR_COLOR = $(DRED)
WARN_COLOR  = $(DYELLOW)
NO_COLOR    = $(RESET_COLOR)

OK_STRING    = "[OK]"
ERROR_STRING = "[ERROR]"
WARN_STRING  = "[WARNING]"

define banner
    @echo "  $(WHITE)__________$(RESET_COLOR)"
    @echo "$(WHITE) |$(DWHITE)@PALEWIRE⚡$(RESET_COLOR)$(WHITE)|$(RESET_COLOR)"
    @echo "$(WHITE) |&&& ======|$(RESET_COLOR)"
    @echo "$(WHITE) |=== ======|$(RESET_COLOR)  $(DWHITE)This is a $(RESET_COLOR)$(DBLACK)$(BG_WHITE)palewire$(RESET_COLOR)$(DWHITE) automation$(RESET_COLOR)"
    @echo "$(WHITE) |=== == %%%|$(RESET_COLOR)"
    @echo "$(WHITE) |[_] ======|$(RESET_COLOR)  $(1)"
    @echo "$(WHITE) |=== ===!##|$(RESET_COLOR)"
    @echo "$(WHITE) |__________|$(RESET_COLOR)"
    @echo ""
endef

#
# Python helpers
#

UV := uv run --all-extras
PYTHON := python -W ignore -m

define python
    @echo "🐍🤖 $(OBJ_COLOR)Executing Python script $(1)$(NO_COLOR)\r";
    @$(PYTHON) $(1)
endef

#
# Commands
#

install: ## Install the development environment
	$(call banner,      🛠️ Installing 🛠️)
	@uv sync --all-extras
	@$(UV) pre-commit install
	@$(UV) python -m playwright install chromium


site: ## Build the site
	$(call banner,    🏗️ Building site 🏗️)
	@$(PYTHON) newshomepages.site latest-screenshots
	@$(PYTHON) newshomepages.site accessibility-ranking
	@$(PYTHON) newshomepages.site performance-ranking
	@$(PYTHON) newshomepages.site openai
	@$(PYTHON) newshomepages.site drudge
	@$(PYTHON) newshomepages.site status-report
	@$(PYTHON) newshomepages.site source-list
	@$(PYTHON) newshomepages.site bundle-list
	@$(PYTHON) newshomepages.site country-list
	@$(PYTHON) newshomepages.site language-list
	@$(PYTHON) newshomepages.site site-detail
	@$(PYTHON) newshomepages.site bundle-detail
	@$(PYTHON) newshomepages.site country-detail
	@$(PYTHON) newshomepages.site language-detail


#
# Tests
#

lint: ## run the linter
	$(call banner,        💅 Linting code 💅)
	@$(UV) ruff check .
	@$(UV) ruff format --check .


typecheck: ## run type checks
	$(call banner,        🔩 Running type checks 🔩)
	@$(UV) ty check


test: ## run all tests
	$(call banner,       🤖 Running tests 🤖)
	@$(UV) pytest


check: lint typecheck test ## run everything CI runs, before opening a pull request

#
# Extras
#

format: ## automatically fix lint problems and format Python code
	$(call banner,       🪥 Cleaning code 🪥)
	@$(UV) ruff check --fix .
	@$(UV) ruff format .


help: ## Show this help. Example: make help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'


# Mark all the commands that don't have a target
.PHONY: all \
        help \
        format \
        lint \
        mypy \
        test \
		install
