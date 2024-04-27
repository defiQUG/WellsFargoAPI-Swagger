#!/bin/bash
echo "Setting up the environment for the Wire Payment API..."
# Creating a Python virtual environment
python3 -m venv venv
echo "Virtual environment created."

# Activating the virtual environment
source venv/bin/activate
echo "Virtual environment activated."

# Installing necessary Python packages from setup.py
pip install -e ./interfaces/sdk_python/
echo "Dependencies installed from setup.py."

echo "Environment setup complete."