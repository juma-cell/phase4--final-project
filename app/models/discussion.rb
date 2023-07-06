class Discussion < ApplicationRecord
  belongs_to :user
 
  has_many :replies

  def formatted_likes
    "#{likes} Likes"
  end
end
