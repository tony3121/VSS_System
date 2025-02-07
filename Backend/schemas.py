from pydantic import BaseModel

class Candidate(BaseModel):
    id: int
    full_name: str
    email: str
    phone: str
    years_of_experience: int
    skills: str  # Comma-separated skills

    class Config:
        orm_mode = True
