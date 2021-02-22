class Note < ApplicationRecord
    # instance method
    def say_hello
      puts "Note:"
    end
  
    # class method
    def self.say_hi
      puts "hi class"
    end
  
end
