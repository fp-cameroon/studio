const API = "http://localhost:8000"

async function register() {

    const email = document.getElementById("email").value

    const uid = crypto.randomUUID()

    await fetch(API + "/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            uid: uid,
            email: email
        })
    })

    alert("user created")
}

async function login() {
    window.location = "dashboard.html"
}

async function createWorkspace(){

    const name = document.getElementById("workspace_name").value

    await fetch(API + "/workspace/create?owner_uid=test&name="+name,{
        method:"POST"
    })

    alert("workspace created")
}