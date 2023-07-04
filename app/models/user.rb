class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }

end
