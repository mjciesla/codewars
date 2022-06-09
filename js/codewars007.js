//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.


const quarterOf = m => m ==1||m==2||m== 3 ? 1 : m==4||m==5||m==6 ? 2 : m==7||m==8||m==9 ? 3 : m==10||m==11||m==12 ? 4 : undefined


