# Smallest Integer

# I worked on this challenge [by myself, with: ].
  #by myself
# smallest_integer is a method that takes an array of integers as its input
# and returns the smallest integer in the array
#
# +list_of_nums+ is an array of integers
# smallest_integer(list_of_nums) should return the smallest integer in +list_of_nums+
#
# If +list_of_nums+ is empty the method should return nil

# Your Solution Below

#   #get the smallest num of the int
#   # the nums < other numner
#   # arry empty = nill
# if
#   list_of_nums == [0]
#   return nil
#   end
# end

    #I spelled the method wrong
  def smallest_integer(nums)
    #the input array empty put nil
    min = nil
    #each number needs to check and see smallest
    nums.each do |x|
    # x will do what comes next
    if min.nil? || min > x
    #x will be less min
    min = x
  end
end
  min
end

#Refactor

 def smallest_integer(nums)
  #if smallest nums == nil
    #print nil
  #elsif each nums = nil

  #elsif each nums is > larger then x

