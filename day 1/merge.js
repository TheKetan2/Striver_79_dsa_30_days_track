class Solution {
    //Function to merge the arrays.
    merge(arr1, arr2, n, m)
    {
        //your code here
        let arr = [...arr1, ...arr2]
        arr.sort((a,b)=> parseInt(a)-parseInt(b))
        let i,j;
        for(i=0;i<arr1.length;i++){
            arr1[i] = arr[i]
        }
        
        for(j=0;j<arr2.length; j++,i++){
            arr2[j] = arr[i]
        }
    }
}