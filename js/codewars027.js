// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. 
// It should default to English if the language is not in the database, or in the event of an invalid input.


function greet(language) {
	switch(language){
      
case 'czech': return 'Vitejte'
case 'danish': return 'Velkomst'
case 'dutch': return 'Welkom'
case 'estonian': return 'Tere tulemast'
case 'finnish': return 'Tervetuloa'
case 'flemish': return 'Welgekomen'
case 'french': return 'Bienvenue'
case 'german': return 'Willkommen'
case 'irish': return 'Failte'
case 'italian': return 'Benvenuto'
case 'latvian': return 'Gaidits'
case 'lithuanian': return 'Laukiamas'
case 'polish': return 'Witamy'
case 'spanish': return 'Bienvenido'
case 'swedish': return 'Valkommen'
case 'welsh':  return 'Croeso'
default : return 'Welcome'
  }
}