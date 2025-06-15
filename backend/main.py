from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import math

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://test-web-nu-nine.vercel.app"],  # Allows all origins, adjust as needed
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods, adjust as needed
    allow_headers=["*"],  # Allows all headers, adjust as needed
)

@app.get("/evaluate")
def evaluate(expr: str, x: float = 0):
    try:
        result = eval(expr, {"__builtins__": None, "x": x, "sin": math.sin, "cos": math.cos, "tan": math.tan, "sqrt": math.sqrt})
        return {"result": result}
    except Exception as e:
        return {"error": str(e)}
