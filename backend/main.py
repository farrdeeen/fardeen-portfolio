from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List

from database import Contact, SessionLocal  # SQLAlchemy model and DB session

# Initialize FastAPI app
app = FastAPI()

# CORS setup for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://fardeen-portfolio-iota.vercel.app",
        "https://fardeen-portfolio-mpyr2im5k-fardeens-projects-8d92f3b5.vercel.app",   # Your deployed Vercel frontend
        "http://localhost:5173",                     # Local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Request model for incoming contact form
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Response model for returning saved contacts
class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str

    class Config:
        from_attributes = True  # Pydantic v2 compatible (replaces orm_mode=True)

# Route: POST /contact - Save message to DB
@app.post("/contact", response_model=ContactResponse)
def submit_contact(form: ContactForm, db: Session = Depends(get_db)):
    contact = Contact(name=form.name, email=form.email, message=form.message)
    db.add(contact)
    db.commit()
    db.refresh(contact)
    return contact

# Route: GET /messages - Get all saved messages
@app.get("/messages", response_model=List[ContactResponse])
def get_messages(db: Session = Depends(get_db)):
    return db.query(Contact).all()
