import os
import subprocess
import time

CURRENT_DIRECTORY = os.getcwd()
directories = os.listdir(CURRENT_DIRECTORY)
NON_ANGULAR_DIRS = ['static', 'templates', 'venv']

# for directory in directories:
#     if "." not in directory and directory not in NON_ANGULAR_DIRS:
#         ANGULAR_PROJECT_PATH = os.path.join(CURRENT_DIRECTORY, directory)
#         DIST_PATH = os.path.join(ANGULAR_PROJECT_PATH, 'dist', directory)
#         print(DIST_PATH)
