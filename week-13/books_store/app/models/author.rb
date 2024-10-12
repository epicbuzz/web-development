class Author < ApplicationRecord
  # validation, association, callbacks, and scope code will go here

  has_many :books

  def to_s
    name
  end
end
