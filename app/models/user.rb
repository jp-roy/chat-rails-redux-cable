class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :trackable, :validatable#, :recoverable

  validates :username, :email, presence: true

  has_many :messages

  def admin?
    true
  end
end
