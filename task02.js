 function reverseWords(kata) {
     let split = kata.split(' ')
     let reverse = split.reverse('')
     let join = reverse.join(" ")
     return join
    }
 console.log(reverseWords('apakah sudah malam'))