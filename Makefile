SHELL := /bin/sh
PACKAGE_MANAGER ?= pnpm

.DEFAULT_GOAL := help

.PHONY: help install check-local-env prepare-local-env format format-check lint typecheck test precommit check verify fix

help:
	@printf '%s\n' \
		'make install              Install dependencies' \
		'make check-local-env     Report whether local CLI configuration is ready' \
		'make prepare-local-env  Create .env.local if it is missing' \
		'make precommit           Fix staged formatting, lint, and type checks' \
		'make check               Run the fast repository checks' \
		'make verify              Run the authoritative handoff gate' \
		'make fix                 Apply safe formatting fixes'

install:
	$(PACKAGE_MANAGER) install

check-local-env:
	$(PACKAGE_MANAGER) run check-local-env

prepare-local-env:
	$(PACKAGE_MANAGER) run prepare-local-env

format:
	$(PACKAGE_MANAGER) run format

format-check:
	$(PACKAGE_MANAGER) run format:check

lint:
	$(PACKAGE_MANAGER) run lint

typecheck:
	$(PACKAGE_MANAGER) run typecheck

test:
	$(PACKAGE_MANAGER) test

precommit:
	$(PACKAGE_MANAGER) run precommit

check: format-check lint typecheck test

verify: check
	@printf '%s\n' 'verify: ok'

fix:
	$(PACKAGE_MANAGER) run format
