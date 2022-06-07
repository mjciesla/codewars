// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

function vowelIndices(word){
    vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
    result = []
    for (let i = 0; i < word.length; i++) {
      if (vowels.indexOf(word[i]) != -1) {
        result.push(i + 1);
      }
    }
    return result;
  }