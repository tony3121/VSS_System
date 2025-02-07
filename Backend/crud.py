from sqlalchemy.orm import Session
import models

def get_candidates(db: Session):
    return db.query(models.Candidate).all()
