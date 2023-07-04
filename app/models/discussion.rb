class Discussion < ApplicationRecord
  belongs_to :user
  belongs_to :channel
  has_many :replies

  def formatted_likes
    "#{likes} Likes"
  end
end
