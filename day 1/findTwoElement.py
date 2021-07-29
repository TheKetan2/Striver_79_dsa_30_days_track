# https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1#
class Solution:
    def findTwoElement( self,arr, n):
        zeroArray = [0]*(n+1)
        sol = [0,0]
        count = 0
        for i in range(0, n):
            zeroArray[arr[i]] +=1
        for i in range(1,len(zeroArray)):
            if count ==2:
                break
            if zeroArray[i] ==2:
                sol[0] = i
                count+=1
            elif zeroArray[i] ==0:
                sol[1] = i
                count+=1
        return sol
        # code here
