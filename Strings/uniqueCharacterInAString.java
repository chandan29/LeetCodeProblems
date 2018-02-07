//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.



class Solution {
    public int firstUniqChar(String s) {
         Map<Character,Integer> x = new HashMap<Character,Integer>();
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            int count = x.containsKey(c) ? x.get(c) : 0;
            x.put(c,++count);
        }


        for(int i=0;i<s.length();i++){
            int cnt=x.get(s.charAt(i));
           if(cnt==1){
               return i;
           }
            else{
                continue;
            }
        }
        return -1;
    }
}
