#!/bin/bash
source venv/bin/activate
pip install -r requirements.txt
BIND=0.0.0.0:8008
TIMEOUT=1500
BATCH_IMAGES_PATH=/Users/infrrdadmin/Documents/Code/annotation-utility/assets
gunicorn -w 1 -t $TIMEOUT -b $BIND api:app
echo "Annotation Utility Started"s