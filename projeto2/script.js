let message = "Hello, World!";

console.log(message.startsWith("Hello")); // Verifica se a string começa com "Hello"
console.log(message.endsWith("!")); // Verifica se a string termina com "!"
console.log(message.includes("World")); // Verifica se a string contém "World"
console.log(message.toUpperCase()); // Converte a string para maiúsculas
console.log(message.toLowerCase()); // Converte a string para minúsculas
console.log(message.split(", ")); // Divide a string em um array usando ", " como separador
console.log(message.replace("World", "JavaScript")); // Substitui "World" por "JavaScript"
console.log(message.length); // Retorna o comprimento da string
console.log(message.charAt(0)); // Retorna o caractere na posição 0
console.log(message.indexOf("o")); // Retorna a posição da primeira ocorrência de "o"
console.log(message.lastIndexOf("o")); // Retorna a posição da última ocorrência de "o"
console.log(message.substring(0, 5)); // Retorna a substring de índice 0 a 5
console.log(message.trim()); // Remove espaços em branco no início e no final da string
console.log(message.repeat(3)); // Repete a string 3 vezes
console.log(message.padStart(20, "*")); // Preenche a string com "*" no início até atingir o comprimento de 20
console.log(message.padEnd(20, "*")); // Preenche a string com "*" no final até atingir o comprimento de 20

