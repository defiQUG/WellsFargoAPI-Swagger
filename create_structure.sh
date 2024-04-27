#!/bin/bash

# Create the main project directory
mkdir wire-payment-api

# Create subdirectories
mkdir -p wire-payment-api/app
mkdir -p wire-payment-api/models
mkdir -p wire-payment-api/services
mkdir -p wire-payment-api/validations
mkdir -p wire-payment-api/tests
mkdir -p wire-payment-api/interfaces/sdk_python
mkdir -p wire-payment-api/interfaces/sdk_java
mkdir -p wire-payment-api/interfaces/sdk_js
mkdir -p wire-payment-api/docs
mkdir -p wire-payment-api/scripts

# Create Python __init__.py files for making directories as packages
touch wire-payment-api/app/__init__.py
touch wire-payment-api/models/__init__.py
touch wire-payment-api/services/__init__.py
touch wire-payment-api/validations/__init__.py
touch wire-payment-api/tests/__init__.py
touch wire-payment-api/interfaces/__init__.py

# Create main application files
touch wire-payment-api/app/main.py
touch wire-payment-api/app/config.py

# Create model files
touch wire-payment-api/models/payment.py
touch wire-payment-api/models/user.py

# Create service files
touch wire-payment-api/services/authentication.py
touch wire-payment-api/services/authorization.py

# Create validation files
touch wire-payment-api/validations/validate_payment.py

# Create test files
touch wire-payment-api/tests/test_payments.py
touch wire-payment-api/tests/test_validation.py

# Create SDK setup files
touch wire-payment-api/interfaces/sdk_python/setup.py
touch wire-payment-api/interfaces/sdk_java/pom.xml
touch wire-payment-api/interfaces/sdk_js/package.json

# Create documentation and scripts
touch wire-payment-api/docs/index.md
touch wire-payment-api/scripts/deploy.sh
touch wire-payment-api/scripts/setup_env.sh

# Create project root files
touch wire-payment-api/.gitignore
touch wire-payment-api/README.md
touch wire-payment-api/requirements.txt

echo "Project directories and files created successfully."