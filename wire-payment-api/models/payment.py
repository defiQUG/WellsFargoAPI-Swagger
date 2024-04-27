from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime, timezone
import logging

log = logging.getLogger(__name__)

class Payment:
    id = Column(Integer, primary_key=True)
    amount = Column(Integer)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))

    def save(self):
        try:
            # Assuming session is defined elsewhere
            session.add(self)
            session.commit()
        except Exception as e:
            log.error(f"Database error: {e}")
            raise