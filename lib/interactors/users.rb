module Interactors
  class Users

    def self.where(query, page)
      users = User.where("first_name LIKE '%#{query}%' OR last_name LIKE '%#{query}%'").limit(50).offset(50 * page)
      users = users.map { |user| {id: user.id, text: "#{user.first_name} #{user.last_name}"} }
      count = User.where("first_name LIKE '%#{query}%' OR last_name LIKE '%#{query}%'").count

      {results: users, more: count > (users.count + (50 * page))}
    end

  end
end
