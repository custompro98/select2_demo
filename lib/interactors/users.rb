module Interactors
  class Users

    def self.where(query)
      users = User.where("first_name LIKE '%#{query}%' OR last_name LIKE '%#{query}%'").limit(50).map { |user| {id: user.id, text: "#{user.first_name} #{user.last_name}"} }

      {results: users}
    end

  end
end
