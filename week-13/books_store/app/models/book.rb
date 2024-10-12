class Book < ApplicationRecord
  belongs_to :author
  has_one_attached :cover

  validates :author, :name, :price, presence: true
  validates :name, uniqueness: { scope: :author_id }
end
