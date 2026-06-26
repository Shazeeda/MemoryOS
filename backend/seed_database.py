from app.database.database import SessionLocal
from app.models.memory import Memory

from seed_data.engineering import ENGINEERING_ENTRIES
from seed_data.finance import FINANCE_ENTRIES
from seed_data.hr import HR_ENTRIES
from seed_data.it import IT_ENTRIES
from seed_data.legal import LEGAL_ENTRIES
from seed_data.marketing import MARKETING_ENTRIES
from seed_data.operations import OPERATIONS_ENTRIES
from seed_data.sales import SALES_ENTRIES


ALL_ENTRIES = (
    ENGINEERING_ENTRIES
    + HR_ENTRIES
    + FINANCE_ENTRIES
    + OPERATIONS_ENTRIES
    + MARKETING_ENTRIES
    + LEGAL_ENTRIES
    + IT_ENTRIES
    + SALES_ENTRIES
)


def seed_database():
    db = SessionLocal()

    try:
        created_count = 0
        skipped_count = 0

        for entry in ALL_ENTRIES:
            existing_entry = (
                db.query(Memory)
                .filter(Memory.title == entry["title"])
                .first()
            )

            if existing_entry:
                skipped_count += 1
                continue

            memory = Memory(
                title=entry["title"],
                content=entry["content"],
                category=entry["category"],
                tags=entry["tags"],
            )

            db.add(memory)
            created_count += 1

        db.commit()

        print("")
        print("────────────────────────────────")
        print("MemoryOS Seed Complete")
        print("────────────────────────────────")
        print(f"Departments Loaded: 8")
        print(f"Total Entries Available: {len(ALL_ENTRIES)}")
        print(f"Knowledge Entries Added: {created_count}")
        print(f"Duplicates Skipped: {skipped_count}")
        print("Database Ready")
        print("────────────────────────────────")
        print("")

    finally:
        db.close()


if __name__ == "__main__":
    seed_database()