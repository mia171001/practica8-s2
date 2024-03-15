1. let: Se utiliza para declarar variables que pueden ser reasignadas. Es decir, puedes cambiar el valor de una variable declarada con let en cualquier momento.

2. const: Se utiliza para declarar variables que no pueden ser reasignadas una vez que se les ha asignado un valor inicial. El valor de una variable constante no puede cambiar después de su inicialización. Es importante tener en cuenta que aunque el valor de una variable const no puede cambiar, los objetos a los que hace referencia pueden ser modificados.

3. var: En JavaScript, "var" se usa para declarar variables y asignarles valores. Estas variables pueden tener un alcance de función o global. Sin embargo, "var" carece de alcance de bloque, lo que puede conducir a problemas de alcance inesperados. Es recomendable usar "let" y "const" en lugar de "var" para evitar estos problemas.

. length: Este método se utiliza para obtener la longitud de una cadena de texto, es decir, cuántos caracteres hay en total en esa cadena.

. trim(): Este método elimina los espacios en blanco al principio y al final de una cadena de texto. Esto es útil cuando queremos limpiar una cadena de texto de espacios adicionales.

. toUpperCase(): Este método convierte todos los caracteres de una cadena de texto en letras mayúsculas. Es útil cuando necesitamos trabajar con texto en mayúsculas independientemente de cómo esté originalmente escrito.

. toLowerCase(): Este método convierte todos los caracteres de una cadena de texto en letras minúsculas. Al igual que toUpperCase(), es útil cuando necesitamos trabajar con texto en minúsculas independientemente de cómo esté originalmente escrito.

. Math.floor(): Este método se utiliza para redondear un número hacia abajo al entero más cercano. Por ejemplo, Math.floor(4.7) devolverá 4. Es útil cuando necesitas asegurarte de que un número sea un entero sin decimales.

. Math.ceil(): Este método se utiliza para redondear un número hacia arriba al entero más cercano. Por ejemplo, Math.ceil(4.3) devolverá 5. Es útil cuando necesitas asegurarte de que un número sea un entero sin decimales.

. Math.round(): Este método se utiliza para redondear un número al entero más cercano. Si el número está exactamente a la mitad del entero más cercano, redondeará hacia arriba. Por ejemplo, Math.round(4.5) devolverá 5, mientras que Math.round(4.3) devolverá 4. Es útil cuando necesitas redondear un número a su valor entero más cercano.

. Math.random(): Esta función se utiliza para generar un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusivo). Es útil cuando necesitas generar números aleatorios en un rango específico, por ejemplo, para simular un lanzamiento de dados o para generar datos de prueba.
