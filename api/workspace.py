from fastapi import APIRouter
from firebase_init import db

router = APIRouter()

@router.post("/workspace/create")
def create_workspace(owner_uid: str, name: str):

    ref = db.collection("workspaces").document()

    ref.set({
        "name": name,
        "owner": owner_uid,
        "members": [owner_uid]
    })

    return {"workspace_id": ref.id}