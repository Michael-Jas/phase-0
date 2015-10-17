# A Nested Array to Model a Bingo Board SOLO CHALLENGE

# I spent [#] hours on this challenge.

# Release 0: Pseudocode
# Outline:

# Create a method to generate a letter ( b, i, n, g, o) and a number (1-100)
  #Method 1 call
  # The letters we are going to need a sample letter from(bingo)
  #- The numbers will be random number within the range (1-99)

# Method 2 Check the called column for the number called.
  #look to see if the number given is in column
  #This should go to the corsponding letter and look if number is there.

# If the number is in the column, replace with an 'x'
  #If the bord has the number we will replace it with an x
  #We are going to have to look over the  entire array to find the called number

# Display a column to the console
  #We will print out the column to the console stacked on top of one another.

# Display the board to the console (prettily)
  #Print the new to the console so it lays out like a board.. remove the brackets.

# Initial Solution
class BingoBoard

  def initialize(board)
    @bingo_board = board
    @bingo_letter = ['B', 'I', 'N', 'G', 'O']
  end
  def next_letter
    p @bingo_letter.sample
  end
  def next_number
    p @next_number = rand(21..23)
  end
  def bingo_ball
    @aaa = next_letter
    @bbb = next_number
  end
#Display for Users Bingo Card_________________________________________________
   def user_card_letters
     p @bingo_letter
   end
   def user_card_numbers
    @bingo_board.map{|index| p index }
  end

#Check the board______________________________________________________________
#Create a method Check the card
#method will test if letter and number match in the same column
# does card have the letter called... it better have
# if the card has letter
# then check if number falls under the column by iterating over specific index

  def finder
    # col = 0
    # j = @bbb
    if @bingo_letter[0] == @aaa
     @bingo_board[0].include?(@bbb)  #if column index 0 incld the next number print
      p true
    else
      p false
    end
  end
end
#DRIVER CODE (I.E. METHOD CALLS) GO BELOW THIS LINE____________________________
board =  [[47, 44, 71, 8, 88],
          [22, 69, 75, 65, 73],
          [83, 85, 97, 89, 57],
          [25, 31, 96, 68, 51],
          [75, 70, 54, 80, 83]]

# letter_opt = ['B', 'I', 'N', 'G', 'O'].sample
# numbers = rand(1..99)

new_game = BingoBoard.new(board)
# p new_game.next_letter
# p new_game.next_number
# p "And the next ball number is #{new_game.bingo_ball}".to_s
new_game.bingo_ball
new_game.finder
new_game.user_card_letters
new_game.user_card_numbers





#Reflection
