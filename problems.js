// 13. Roman to Integer - Solution

var romanToInt = function(s) {
    
      const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;

};


// 14. Longest Common Prefix - Solution

var longestCommonPrefix = function(strs) {
    let i = 1;
     let prf = strs[0];
     while(i < strs.length){
         if(!strs[i].startsWith(prf)){
             prf = prf.slice(0, -1)
         }else{
             i++
         }
     }
     return prf;
};


// 20. Valid Parentheses - Solution

var isValid = function(s) {
    if (s.length <=1) return false
    
    let stack = []
    let hash = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    for(let i = 0; i < s.length; i++){
        if (hash[s[i]]) stack.push(hash[s[i]])
        else if (s[i] !== stack.pop()) return false
    }
    return !stack.length;
};


// 28. Find the Index of the First Occurrence in a String - solution

var strStr = function(haystack, needle) {
    if (needle === "") {
    return 0;
  }

  if (!haystack || !needle) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    const temp = haystack.slice(i, i + needle.length);

    if (temp === needle) {
      return i;
    }
  }

  return -1;

};


// 58. Length of Last Word - solution

var lengthOfLastWord = function(s) {
    let count = 0
    
    for(let i = s.length - 1; i >= 0; --i) {
        if(s[i] !== ' ')
            ++count
        
        if(s[i] === ' ' && count)
            break
    }
    
    return count;
};