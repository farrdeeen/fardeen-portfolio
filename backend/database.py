from sqlalchemy import create_engine, Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://fardeen_contacts_db_user:XsNFw0BYTRqvCpYnjSssESgrgtgoI5Sx@dpg-d1bvfm2dbo4c73ce74a0-a/fardeen_contacts_db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(Text, nullable=False)

# Create the table if it doesn't exist
Base.metadata.create_all(bind=engine)
