import os
  
class Config:
      SECRET_KEY = os.getenv('SECRET_KEY', 'default_secret_key')
      DATABASE_URI = os.getenv('DATABASE_URI', 'default_database_uri')
