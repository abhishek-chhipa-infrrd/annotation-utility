import os
class Config(object):
    IMAGE_PATH = os.environ.get("BATCH_IMAGES_PATH","/Users/infrrdadmin/Documents/Code/annotation-utility/assets")
    ENV = "development"
    DEBUG = False
    TESTING = False
    HOST = "mongodb://admin:a23sdfr!14@127.0.0.1:27017/admin"
    DB_NAME = "CorrectionUIdb2"
    DEBUG=True
    SECRET_KEY="secret"
    SESSION_COOKIE_HTTPONLY=True
    REMEMBER_COOKIE_HTTPONLY=True
    SESSION_COOKIE_SECURE=True
    SESSION_COOKIE_SAMESITE="None"
    ALLOWED_EXTENTIONS = ".zip"

class ProductionConfig(Config):
    HOST = "mongodb://admin:a23sdfr!1@127.0.0.1:27017/admin"
    DEBUG = False
    DB_NAME = "CorrectionUIdb2"
    ENV = 'production'

class DevelopmentConfig(Config):
    HOST = "mongodb://admin:a23sdfr!1@127.0.0.1:27017/admin"
    DEBUG = True
    DB_NAME = "CorrectionUIdb2"
    ENV = 'development'

class TestingConfig(Config):
     TESTING = True
     DB_NAME = "CorrectionUI_Testing"
     
         

