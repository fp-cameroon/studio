from fastapi import APIRouter
from pydantic import BaseModel
from firebase_init import db

router = APIRouter()

class User(BaseModel):
    uid: str
    email: str

@router.post("/register")
def register(user: User):
    db.collection("users").document(user.uid).set({
        "email": user.email
    })
    return {"status": "user created"}