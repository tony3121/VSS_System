from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://vss_user:psuOLUIIM9ycUEK1GFtD7xK0HmBBerjZ@dpg-cuj2pc52ng1s73f4hqr0-a/vss"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
