"""Change User model

Revision ID: b23ac74a352b
Revises: bec924bfe199
Create Date: 2021-06-03 01:39:30.491294

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b23ac74a352b'
down_revision = 'bec924bfe199'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('firstName', sa.String(length=40), nullable=False))
    op.add_column('users', sa.Column('lastName', sa.String(length=40), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'lastName')
    op.drop_column('users', 'firstName')
    # ### end Alembic commands ###
