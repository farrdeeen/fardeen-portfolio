from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Load environment variables from a .env file (useful for local dev)
load_dotenv()

# Fetch the DATABASE_URL from environment
DATABASE_URL = os.environ.get("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in environment variables")

# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Session and Base setup
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Define the Contact model
class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(Text, nullable=False)

# Create tables if they don’t exist
Base.metadata.create_all(bind=engine)
