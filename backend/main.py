from fastapi import FastAPI
from auth import router as auth_router
from workspace import router as workspace_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(workspace_router)

@app.get("/")
def root():
    return {"status": "API running"}