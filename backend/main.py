from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

from database import Contact, SessionLocal  # from database.py

# Initialize FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://fardeen-portfolio-iota.vercel.app"],  # 👈 safer than "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency: get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Request body model
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Response model
class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str

    class Config:
        orm_mode = True

# POST /contact - Save message to DB
@app.post("/contact", response_model=ContactResponse)
def submit_contact(form: ContactForm, db: Session = Depends(get_db)):
    contact = Contact(name=form.name, email=form.email, message=form.message)
    db.add(contact)
    db.commit()
    db.refresh(contact)
    return contact

# GET /messages - Return all saved messages
@app.get("/messages", response_model=List[ContactResponse])
def get_messages(db: Session = Depends(get_db)):
    return db.query(Contact).all()
