class Discussion < ApplicationRecord
  belongs_to :user
 
  has_many :replies, dependent: :destroy

  def formatted_likes
    "#{likes} Likes"
  end
end
