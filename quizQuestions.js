// Comprehensive 240-Question Bank for AI Code Reviewer
// 4 Languages: C, Java, Python, JavaScript
// 3 Difficulties: Easy (20), Medium (20), Difficult (20) per language
// Total = 240 Unique Questions

const allQuizQuestions = [
    // ==========================================
    // C LANGUAGE QUESTIONS (60 Total)
    // ==========================================

    // C - EASY (20)
    {
        question: "Which symbol is used to end a statement in C?",
        answers: [";", ":", ".", ","],
        correct: 0,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which function is used to print output in C?",
        answers: ["print()", "printf()", "display()", "cout"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which header file is commonly used for printf() and scanf()?",
        answers: ["stdlib.h", "string.h", "stdio.h", "math.h"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which data type is used to store a single character in C?",
        answers: ["int", "char", "float", "double"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which operator is used to get the memory address of a variable in C?",
        answers: ["*", "&", "#", "@"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which keyword is used to return a value from a function in C?",
        answers: ["return", "break", "output", "exit"],
        correct: 0,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which format specifier is used for an integer in printf()?",
        answers: ["%c", "%s", "%d", "%f"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "What is the starting index of an array in C?",
        answers: ["0", "1", "-1", "Depends on array size"],
        correct: 0,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which loop is guaranteed to execute at least once in C?",
        answers: ["while", "for", "do-while", "foreach"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which keyword is used to define a constant variable in C?",
        answers: ["const", "final", "static", "var"],
        correct: 0,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which operator is used for logical AND in C?",
        answers: ["&", "&&", "AND", "bit_and"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which header file is needed to use mathematical functions like sqrt() in C?",
        answers: ["stdio.h", "math.h", "stdlib.h", "conio.h"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which keyword is used to exit a loop early in C?",
        answers: ["stop", "exit", "break", "continue"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "What is the output of `printf(\"%d\", 10 % 3);` in C?",
        answers: ["3", "1", "0", "3.33"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which of the following is a valid variable name in C?",
        answers: ["2var", "my_var", "my-var", "int"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "What format specifier is used to print a floating-point number in C?",
        answers: ["%d", "%i", "%f", "%c"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "What is the default initial value of an uninitialized local integer variable in C?",
        answers: ["0", "1", "Garbage value", "NULL"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which statement is used to skip the rest of current iteration and jump to next loop cycle?",
        answers: ["break", "skip", "continue", "goto"],
        correct: 2,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "How do you write a single-line comment in C?",
        answers: ["# Comment", "// Comment", "/* Comment */", "<!-- Comment -->"],
        correct: 1,
        difficulty: "Easy",
        language: "C"
    },
    {
        question: "Which operator is used to access members of a struct variable directly?",
        answers: [".", "->", "*", "&"],
        correct: 0,
        difficulty: "Easy",
        language: "C"
    },

    // C - MEDIUM (20)
    {
        question: "What will `printf(\"%d\", 5 / 2);` output in C?",
        answers: ["2.5", "2", "2.0", "3"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What does the sizeof operator return in C?",
        answers: ["Size of object in bits", "Size of object in bytes", "Number of elements in array", "Address of object"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What is the value of x after: int x = 5; int y = ++x;?",
        answers: ["5", "6", "4", "Undefined"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "How do you declare a pointer to an integer in C?",
        answers: ["int &p;", "int *p;", "pointer int p;", "int p*;"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "Which function is used for dynamic memory allocation in C?",
        answers: ["alloc()", "malloc()", "new()", "memget()"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What will `strlen(\"Hello\\0World\")` return in C?",
        answers: ["11", "10", "5", "6"],
        correct: 2,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What is a structure (struct) in C?",
        answers: [
            "A collection of variables of the same data type",
            "A collection of variables of different data types under one name",
            "A built-in function",
            "A pointer type"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "Which function is used to release dynamically allocated memory in C?",
        answers: ["delete()", "free()", "remove()", "clear()"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What will `int a = 10, b = 20; printf(\"%d\", a > b ? a : b);` print?",
        answers: ["10", "20", "1", "0"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What does the `break` statement do inside a loop in C?",
        answers: [
            "Skips the current iteration",
            "Exits the innermost loop immediately",
            "Restarts the loop from beginning",
            "Terminates the program"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What is the output of `int arr[] = {10, 20, 30}; printf(\"%d\", *(arr + 1));`?",
        answers: ["10", "20", "30", "Address of arr"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What does `calloc()` do compared to `malloc()` in C?",
        answers: [
            "Allocates memory and initializes all bytes to zero",
            "Allocates faster memory",
            "Reallocates existing memory",
            "Frees memory"
        ],
        correct: 0,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What is the result of string concatenation function `strcat(str1, str2)`?",
        answers: [
            "Appends str2 to the end of str1",
            "Appends str1 to str2",
            "Compares str1 and str2",
            "Returns length of combined string"
        ],
        correct: 0,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "How are arrays passed to functions in C?",
        answers: [
            "By value (entire copy)",
            "By reference / as a pointer to the first element",
            "By reference wrapper",
            "Cannot be passed"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What will `strcmp(\"apple\", \"banana\")` return in C?",
        answers: ["0", "A negative value", "A positive value", "1"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What is an enum in C?",
        answers: [
            "A special array",
            "A user-defined data type consisting of named integer constants",
            "A dynamic memory block",
            "A macro function"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What will `int x = 10; printf(\"%d\", x++);` output?",
        answers: ["10", "11", "9", "Undefined"],
        correct: 0,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What does `typedef` do in C?",
        answers: [
            "Creates a new variable",
            "Creates an alias/synonym for an existing data type",
            "Defines a macro",
            "Allocates dynamic memory"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What is the scope of a static variable declared inside a function in C?",
        answers: [
            "Global across files",
            "Local to the function, but retains its value across function calls",
            "Local to loop only",
            "Destroyed when function finishes"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },
    {
        question: "What will `printf(\"%d\", !0);` print in C?",
        answers: ["0", "1", "-1", "False"],
        correct: 1,
        difficulty: "Medium",
        language: "C"
    },

    // C - DIFFICULT (20)
    {
        question: "What does `int (*ptr)[10];` declare in C?",
        answers: [
            "An array of 10 integer pointers",
            "A pointer to an array of 10 integers",
            "A function returning a pointer to 10 integers",
            "A pointer to a function taking 10 integers"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What happens when realloc(NULL, size) is called in C?",
        answers: [
            "Segmentation fault",
            "It behaves identically to malloc(size)",
            "It returns NULL always",
            "Undefined behavior"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What happens when modifying a string literal like `char *str = \"Hello\"; str[0] = 'h';`?",
        answers: [
            "String changes to 'hello'",
            "Undefined behavior / Segmentation fault at runtime",
            "No change occurs",
            "Compilation Error"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What does the `volatile` keyword inform the C compiler?",
        answers: [
            "Variable can never change",
            "Variable may be modified by external hardware/threads, so do not optimize access",
            "Variable is stored in fast CPU registers",
            "Variable is global"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is the size of an empty struct in standard C (GCC implementation)?",
        answers: ["0 bytes", "1 byte", "4 bytes", "Compilation error"],
        correct: 0,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is the result of the bitwise XOR operation `5 ^ 5` in C?",
        answers: ["5", "10", "0", "1"],
        correct: 2,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is a 'dangling pointer' in C?",
        answers: [
            "A pointer pointing to NULL",
            "A pointer pointing to a memory location that has been freed/deallocated",
            "An uninitialized pointer",
            "A double pointer"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What will `printf(\"%d\", sizeof('A'));` output in standard C?",
        answers: ["1", "4 (size of int)", "2", "8"],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "When does macro expansion occur in C?",
        answers: [
            "During compilation",
            "During preprocessing before compilation",
            "At runtime",
            "During linking"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is the output of `int a = 5; printf(\"%d %d %d\", a, a++, ++a);` in C?",
        answers: ["5 5 7", "7 6 7", "Undefined behavior due to multiple unsequenced modifications", "5 6 7"],
        correct: 2,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is struct padding (alignment) in C?",
        answers: [
            "Adding extra bytes to align data members to word boundaries in memory",
            "Compressing struct members",
            "Initializing struct fields to zero",
            "Encryption of struct data"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What does `int *f();` declare in C?",
        answers: [
            "A pointer to a function returning int",
            "A function returning a pointer to int",
            "An array of integer functions",
            "A macro function"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is the output of `int a = 1; printf(\"%d\", a << 3);`?",
        answers: ["1", "3", "8", "16"],
        correct: 2,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What happens if a function in C is called recursively without a base case?",
        answers: [
            "Loop executes 100 times then stops",
            "Stack overflow / Segmentation fault",
            "Returns 0 automatically",
            "Compiler error"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What does the `register` storage class hint to the compiler?",
        answers: [
            "Store variable in CPU register for faster access",
            "Store variable on disk",
            "Store variable in global heap",
            "Make variable read-only"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What will `int x = -1; x = x >> 1;` produce on most two's complement systems?",
        answers: ["0", "-1 (arithmetic right shift preserves sign)", "1", "INT_MAX"],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is the difference between `const char *p` and `char * const p`?",
        answers: [
            "First is pointer to const char, second is const pointer to char",
            "First is const pointer, second is pointer to const",
            "They are identical",
            "Both are invalid in C"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What will `printf(\"%s\", __FILE__);` print in C?",
        answers: [
            "Name of current executable",
            "Name of current C source file",
            "Current directory path",
            "Compiler version"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is a flexible array member in C99 struct?",
        answers: [
            "An array of variable size declared as last member `struct foo { int n; int arr[]; };`",
            "An array that resizes automatically at runtime",
            "A pointer to an array",
            "A dynamic vector"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "C"
    },
    {
        question: "What is the purpose of `setjmp` and `longjmp` in C?",
        answers: [
            "Thread creation",
            "Non-local jumps / exception handling across functions",
            "Sorting arrays",
            "Allocating virtual memory"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "C"
    },

    // ==========================================
    // JAVA QUESTIONS (60 Total)
    // ==========================================

    // JAVA - EASY (20)
    {
        question: "Which keyword is used to create a class in Java?",
        answers: ["class", "struct", "object", "define"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which method is the entry point of a Java program?",
        answers: ["start()", "run()", "main()", "execute()"],
        correct: 2,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which keyword is used for inheritance in Java?",
        answers: ["inherits", "extends", "implements", "super"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which data type stores true or false in Java?",
        answers: ["boolean", "bool", "logical", "bit"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which keyword is used to instantiate an object in Java?",
        answers: ["new", "create", "object", "make"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which keyword is used to import packages in Java?",
        answers: ["include", "import", "using", "require"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which method is used to find the length of a String in Java?",
        answers: ["len()", "length()", "size()", "count()"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "What is the default value of a boolean instance variable in Java?",
        answers: ["true", "false", "null", "0"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which keyword makes a variable constant (unmodifiable) in Java?",
        answers: ["const", "final", "static", "immutable"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which package is automatically imported into every Java program?",
        answers: ["java.util", "java.io", "java.lang", "java.net"],
        correct: 2,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which operator is used for string concatenation in Java?",
        answers: ["+", ".", "&", "concat"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which statement is used to execute code conditionally in Java?",
        answers: ["for", "if", "switch", "both if and switch"],
        correct: 3,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "What is the extension of compiled Java bytecode files?",
        answers: [".java", ".class", ".exe", ".jar"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which primitive type is used to store decimal numbers in Java by default?",
        answers: ["float", "double", "decimal", "real"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which method prints output to console with a newline in Java?",
        answers: ["System.out.print()", "System.out.println()", "console.log()", "print()"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "What is the default value of an uninitialized int instance variable in Java?",
        answers: ["0", "1", "null", "garbage"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which keyword is used to refer to the current object in Java?",
        answers: ["this", "self", "me", "current"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which keyword is used to define an interface in Java?",
        answers: ["interface", "implements", "abstract", "trait"],
        correct: 0,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "What is the size of an `int` primitive in Java?",
        answers: ["16 bits", "32 bits (4 bytes)", "64 bits", "Varies by OS"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },
    {
        question: "Which exception is thrown when accessing an array index out of bounds in Java?",
        answers: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IndexError", "ArrayException"],
        correct: 1,
        difficulty: "Easy",
        language: "Java"
    },

    // JAVA - MEDIUM (20)
    {
        question: "What is the difference between `==` and `.equals()` when comparing Java Strings?",
        answers: [
            "== checks value equality, .equals() checks reference equality",
            "== checks reference equality, .equals() checks content equality",
            "They are identical in Java",
            "== works only for numbers"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is the output of `\"Java\".substring(1, 3)` in Java?",
        answers: ["Jav", "av", "ava", "a"],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "Which of the following is NOT a valid Java access modifier?",
        answers: ["private", "protected", "friend", "public"],
        correct: 2,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What happens when an uncaught exception occurs in Java?",
        answers: [
            "Program continues silently",
            "The current thread terminates and stack trace is printed",
            "Operating system crashes",
            "Compiler warning is raised"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "Which collection class in Java allows duplicates and maintains insertion order?",
        answers: ["HashSet", "TreeSet", "ArrayList", "HashMap"],
        correct: 2,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is method overriding in Java?",
        answers: [
            "Defining multiple methods with same name but different parameters in same class",
            "Redefining a superclass method in a subclass with exact same signature",
            "Calling a method recursively",
            "Overloading operators"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is the purpose of the `super` keyword in Java?",
        answers: [
            "To access static members",
            "To refer to the immediate parent class object or constructor",
            "To create a global variable",
            "To exit a function"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is an interface in Java?",
        answers: [
            "A class that cannot have methods",
            "A blueprint of a class containing abstract methods and constants",
            "A GUI component",
            "A pointer type"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What will `Math.floor(3.7)` return in Java?",
        answers: ["3.0", "4.0", "3", "3.5"],
        correct: 0,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "Which block in Java exception handling ALWAYS executes whether exception occurs or not?",
        answers: ["try", "catch", "finally", "throw"],
        correct: 2,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is Method Overloading in Java?",
        answers: [
            "Methods in different classes with same signature",
            "Multiple methods in same class with same name but different parameter list",
            "Overriding parent class method",
            "Passing variable number of arguments"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What does `StringBuilder` provide over immutable `String` in Java?",
        answers: [
            "Thread safety",
            "Mutable sequence of characters for efficient string manipulation",
            "Automatic encryption",
            "Lower memory overhead for static strings"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "Which interface must be implemented to sort objects using `Collections.sort(list)` directly?",
        answers: ["Comparator", "Comparable", "Serializable", "Cloneable"],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is the default initial capacity of an `ArrayList` in Java?",
        answers: ["5", "10", "16", "20"],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What will `String.valueOf(123)` return in Java?",
        answers: ["Integer 123", "String \"123\"", "Character '1'", "boolean true"],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is an abstract class in Java?",
        answers: [
            "A class that cannot be extended",
            "A class declared with 'abstract' keyword that cannot be instantiated directly",
            "A class with no methods",
            "An interface subclass"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is the result of `5 + 2 + \"Java\"` in Java?",
        answers: ["52Java", "7Java", "Java7", "Error"],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is the purpose of `throw` keyword in Java?",
        answers: [
            "To declare an exception in method signature",
            "To explicitly throw an exception instance",
            "To handle caught exceptions",
            "To exit a loop"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "Which Map implementation in Java maintains key-value pairs sorted by keys?",
        answers: ["HashMap", "LinkedHashMap", "TreeMap", "Hashtable"],
        correct: 2,
        difficulty: "Medium",
        language: "Java"
    },
    {
        question: "What is wrapper class for primitive `int` in Java?",
        answers: ["Int", "Integer", "Number", "IntWrapper"],
        correct: 1,
        difficulty: "Medium",
        language: "Java"
    },

    // JAVA - DIFFICULT (20)
    {
        question: "What will `String s1 = \"hello\"; String s2 = new String(\"hello\"); System.out.println(s1 == s2);` output?",
        answers: ["true", "false", "Compilation error", "NullPointerException"],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What happens if a class constructor in Java is declared `private`?",
        answers: [
            "Class cannot be compiled",
            "Class cannot be instantiated from outside the class",
            "Class becomes abstract",
            "Subclasses inherit it automatically"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is returned by a method with `try { return 1; } finally { return 2; }` in Java?",
        answers: ["1", "2", "Compilation error", "Runtime Exception"],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is Garbage Collection in Java?",
        answers: [
            "Manual memory deallocation using free()",
            "Automatic process of reclaiming unused heap memory",
            "Cleaning temporary disk files",
            "Clearing stack frames"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What happens when a Fail-Fast iterator detects concurrent modification in Java?",
        answers: [
            "Throws ConcurrentModificationException",
            "Ignores modification silently",
            "Retries iteration",
            "Deadlocks the thread"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "Can a static method be overridden in Java?",
        answers: [
            "Yes, fully polymorphic",
            "No, static methods are hidden (method hiding), not overridden",
            "Yes, using super keyword",
            "Only if abstract"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is the size of primitive `char` in Java?",
        answers: ["1 byte (8-bit ASCII)", "2 bytes (16-bit Unicode)", "4 bytes", "Platform dependent"],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "Where are Java object instances stored in memory?",
        answers: ["Stack Memory", "Heap Memory", "Code Segment", "Register Memory"],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What does the `transient` keyword signify for a field in Java?",
        answers: [
            "Field is saved during serialization",
            "Field should NOT be serialized during object persistence",
            "Field is read-only",
            "Field is shared across threads"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What will `System.out.println(1.0 / 0.0);` output in Java?",
        answers: ["ArithmeticException: / by zero", "Infinity", "NaN", "0.0"],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is the Java String Pool?",
        answers: [
            "A pool of dynamic thread objects",
            "A special memory region in Heap where String literals are stored and reused",
            "A collection of string buffers",
            "A database connection pool"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is the difference between `final`, `finally`, and `finalize` in Java?",
        answers: [
            "final is keyword/modifier, finally is exception block, finalize is Object cleanup method",
            "They are synonyms",
            "finally is modifier, final is method, finalize is block",
            "All three handle garbage collection"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is Type Erasure in Java Generics?",
        answers: [
            "Deleting generic classes during execution",
            "Process where compiler removes generic type parameters and replaces them with bounds/Object at compile time",
            "Runtime type safety checking",
            "Converting objects to primitives"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is the output of `Integer a = 100, b = 100; System.out.println(a == b);` vs `Integer c = 200, d = 200; System.out.println(c == d);`?",
        answers: [
            "true and true",
            "true and false (due to Integer Cache -128 to 127)",
            "false and false",
            "false and true"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is volatile keyword effect on variables in Java memory model?",
        answers: [
            "Makes variable final",
            "Ensures reads/writes go directly to main memory (visibility guaranteed across threads)",
            "Synchronizes entire object methods",
            "Prevents garbage collection"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is a Functional Interface in Java 8+?",
        answers: [
            "An interface with no methods",
            "An interface with exactly one abstract method",
            "An interface extending Collection",
            "An interface with only static methods"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is the difference between `HashMap` and `ConcurrentHashMap`?",
        answers: [
            "HashMap is thread-safe, ConcurrentHashMap is not",
            "ConcurrentHashMap allows concurrent reads and segment/bucket-level locking for writes without locking entire map",
            "ConcurrentHashMap allows null keys",
            "They have identical performance"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What happens if `main` method is declared `public void main(String[] args)` (without `static`) in Java?",
        answers: [
            "Compiles and runs normally",
            "Compiles but throws NoSuchMethodError / Main method not found at runtime",
            "Compilation error",
            "Runs asynchronously"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is Reflection API in Java?",
        answers: [
            "GUI rendering engine",
            "Feature allowing inspection/modification of classes, interfaces, fields, methods at runtime",
            "Garbage collection monitor",
            "Bytecode compiler"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },
    {
        question: "What is a PhantomReference in Java `java.lang.ref`?",
        answers: [
            "Strong memory reference",
            "Reference enqueued after object has been finalized, used for post-mortem cleanup",
            "Soft cache reference",
            "Unused pointer"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Java"
    },

    // ==========================================
    // PYTHON QUESTIONS (60 Total)
    // ==========================================

    // PYTHON - EASY (20)
    {
        question: "Which keyword is used to define a function in Python?",
        answers: ["function", "define", "def", "fun"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which function is used to display output in Python?",
        answers: ["echo()", "print()", "display()", "write()"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which symbol is used for single-line comments in Python?",
        answers: ["//", "/*", "#", "--"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which data structure stores key-value pairs in Python?",
        answers: ["List", "Tuple", "Dictionary", "Set"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which keyword is used to create a loop over a sequence in Python?",
        answers: ["loop", "for", "repeat", "iterate"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "What is the output of `type([])` in Python?",
        answers: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
        correct: 0,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which function returns the length of a list or string in Python?",
        answers: ["count()", "size()", "len()", "length()"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which operator is used for exponentiation (power) in Python?",
        answers: ["^", "**", "pow", "^^"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "What data type is returned by `input()` by default in Python 3?",
        answers: ["int", "str", "float", "auto"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "How do you create an empty set in Python?",
        answers: ["{}", "set()", "[]", "empty_set()"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which operator is used for integer floor division in Python?",
        answers: ["/", "//", "%", "\\"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which keyword is used to import modules in Python?",
        answers: ["include", "import", "using", "require"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "What is the output of `bool(0)` in Python?",
        answers: ["True", "False", "None", "Error"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which method converts a string to uppercase in Python?",
        answers: ["toUpper()", "uppercase()", "upper()", "cap()"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which keyword is used for conditional branching in Python?",
        answers: ["if", "then", "case", "where"],
        correct: 0,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "How do you add an element to the end of a list in Python?",
        answers: ["add()", "push()", "append()", "insert()"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "What is the index of the last element in a Python list `my_list`?",
        answers: ["len(my_list)", "-1", "last", "0"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which statement exits a loop prematurely in Python?",
        answers: ["stop", "break", "exit", "return"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "What is the output of `str(123)` in Python?",
        answers: ["123", "'123'", "Integer 123", "TypeError"],
        correct: 1,
        difficulty: "Easy",
        language: "Python"
    },
    {
        question: "Which keyword is used to check if an item exists inside a container in Python?",
        answers: ["has", "contains", "in", "exists"],
        correct: 2,
        difficulty: "Easy",
        language: "Python"
    },

    // PYTHON - MEDIUM (20)
    {
        question: "What will `print(\"Python\"[1:4])` output in Python?",
        answers: ["Pyt", "yth", "ytho", "pyt"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is the key difference between a Tuple and a List in Python?",
        answers: [
            "List is immutable, Tuple is mutable",
            "Tuple is immutable, List is mutable",
            "Tuples store strings only",
            "Lists cannot be nested"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is the output of `list(range(2, 8, 2))` in Python?",
        answers: ["[2, 4, 6]", "[2, 4, 6, 8]", "[2, 3, 4, 5, 6, 7]", "[4, 6, 8]"],
        correct: 0,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What does the `zip()` function do in Python?",
        answers: [
            "Compresses files into zip format",
            "Pairs elements from multiple iterables into tuples",
            "Sorts a list",
            "Unpacks dictionary keys"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is the result of `bool(\"\")` in Python?",
        answers: ["True", "False", "None", "Error"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is a lambda function in Python?",
        answers: [
            "A method inside a class",
            "An anonymous single-expression function",
            "An exception handler",
            "A recursive function"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What does `*args` allow in Python function definitions?",
        answers: [
            "A dictionary of keyword arguments",
            "An arbitrary number of positional arguments as a tuple",
            "A single list argument",
            "An integer count"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is list comprehension in Python?",
        answers: [
            "A debugging utility",
            "A concise syntax for building lists from existing iterables",
            "A list sorting function",
            "A memory compression method"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What will `print(3 * \"ABC\")` output in Python?",
        answers: ["ABCABCABC", "3ABC", "Error", "ABC3"],
        correct: 0,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "Which clause in Python try-except block ALWAYS executes?",
        answers: ["else", "finally", "catch", "always"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What does `**kwargs` allow in Python function parameters?",
        answers: [
            "Arbitrary positional arguments",
            "Arbitrary keyword arguments passed as a dictionary",
            "List of pointers",
            "Keyword arguments as tuple"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What does `map(func, iterable)` return in Python 3?",
        answers: ["A list", "A map object (iterator)", "A tuple", "A dictionary"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What will `set([1, 2, 2, 3, 3, 3])` return in Python?",
        answers: ["{1, 2, 2, 3, 3, 3}", "{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What does `dict.get(key, default)` do in Python?",
        answers: [
            "Deletes key from dictionary",
            "Returns value for key if key is in dict, else returns default without throwing KeyError",
            "Adds key with default value",
            "Raises KeyError if key is missing"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What will `\"hello world\".title()` return in Python?",
        answers: ["Hello world", "HELLO WORLD", "Hello World", "hello World"],
        correct: 2,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is the output of `''.join(['a', 'b', 'c'])`?",
        answers: ["a,b,c", "abc", "['a', 'b', 'c']", "a b c"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What does `enumerate(sequence)` return in Python?",
        answers: [
            "Reversed sequence",
            "Tuples containing index and value (0, seq[0]), (1, seq[1])...",
            "Count of items",
            "Sorted list"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "Which statement is used to raise an exception manually in Python?",
        answers: ["throw", "raise", "error", "catch"],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What will `sorted([3, 1, 2], reverse=True)` return?",
        answers: ["[3, 2, 1]", "[1, 2, 3]", "[2, 1, 3]", "[3, 1, 2]"],
        correct: 0,
        difficulty: "Medium",
        language: "Python"
    },
    {
        question: "What is docstring in Python?",
        answers: [
            "A configuration file",
            "A string literal written as first statement in a function/class for documentation",
            "A comment starting with #",
            "A type hint"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "Python"
    },

    // PYTHON - DIFFICULT (20)
    {
        question: "What happens when `def foo(a=[]): a.append(1); return a` is called twice: `foo(); print(foo())`?",
        answers: ["[1]", "[1, 1]", "[1, 1, 1]", "SyntaxError"],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is GIL (Global Interpreter Lock) in CPython?",
        answers: [
            "A lock preventing multiple Python instances",
            "A mutex allowing only one thread to execute Python bytecode at a time",
            "A security lock on global variables",
            "A memory leak prevention system"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What will `a = [1, 2, 3]; b = a; b.append(4); print(a)` output?",
        answers: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is the difference between `is` and `==` in Python?",
        answers: [
            "'is' checks value, '==' checks memory address",
            "'is' checks identity (memory address), '==' checks value equality",
            "They are identical",
            "'is' works only for strings"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What will `print([x for x in range(5) if x % 2 == 0])` output?",
        answers: ["[0, 1, 2, 3, 4]", "[0, 2, 4]", "[1, 3]", "[2, 4]"],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is a decorator in Python?",
        answers: [
            "A GUI theme component",
            "A function that takes another function as argument and extends its behavior without modifying it",
            "A code formatter",
            "A class constructor"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is the output of `print(type(type))` in Python?",
        answers: ["<class 'type'>", "<class 'class'>", "<class 'object'>", "<class 'function'>"],
        correct: 0,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What does the `__init__` method do in Python classes?",
        answers: [
            "Destroys an instance",
            "Initializes newly created object attributes",
            "Imports modules",
            "Defines class inheritance"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What will `print(round(2.5) == round(3.5))` output in Python 3 (banker's rounding)?",
        answers: [
            "True (both round to 2)",
            "True (both round to 4)",
            "False",
            "Error"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is a generator function in Python?",
        answers: [
            "A function that generates database tables",
            "A function using 'yield' to return an iterator yielding values lazily",
            "A random number generator",
            "A compiler utility"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is the difference between `copy.copy()` and `copy.deepcopy()` in Python?",
        answers: [
            "copy() is deep, deepcopy() is shallow",
            "copy() creates shallow copy (compounds references), deepcopy() recursively copies nested objects",
            "They are identical",
            "copy() is for lists, deepcopy() for dicts"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What does `__slots__` do when defined in a Python class?",
        answers: [
            "Prevents class inheritance",
            "Restricts dynamic attribute creation and saves memory by skipping __dict__",
            "Creates database slots",
            "Protects private methods"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is MRO (Method Resolution Order) in Python multiple inheritance?",
        answers: [
            "Order in which functions are compiled",
            "The order in which Python searches parent classes for a method/attribute (C3 linearization)",
            "Memory deallocation sequence",
            "Order of script execution"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What will `print(list(filter(None, [0, 1, False, 2, '', 3])))` output?",
        answers: ["[0, 1, False, 2, '', 3]", "[1, 2, 3]", "[0, False, '']", "[1, 3]"],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is a Context Manager in Python (`with` statement)?",
        answers: [
            "A module logger",
            "An object defining __enter__() and __exit__() methods for runtime resource management",
            "A thread lock manager",
            "A virtual environment"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is the output of `a = (1,); type(a)` vs `b = (1); type(b)`?",
        answers: ["both tuple", "a is tuple, b is int", "a is int, b is tuple", "both int"],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is metaclass in Python?",
        answers: [
            "An instance of a class",
            "The class of a class; a blueprint for creating class objects (inheriting from type)",
            "An abstract base class",
            "A scope decorator"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What will `a = {1, 2}; a.add((3, 4)); print(len(a))` output?",
        answers: ["3", "4", "2", "TypeError"],
        correct: 0,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is the output of `print(all([True, 1, \"yes\"]))` and `print(any([0, False, \"\"]))`?",
        answers: ["True and False", "True and True", "False and False", "False and True"],
        correct: 0,
        difficulty: "Difficult",
        language: "Python"
    },
    {
        question: "What is monkey patching in Python?",
        answers: [
            "Writing unit tests",
            "Dynamically updating or overriding attributes/methods of a module or class at runtime",
            "Fixing syntax errors automatically",
            "Profiling code speed"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "Python"
    },

    // ==========================================
    // JAVASCRIPT QUESTIONS (60 Total)
    // ==========================================

    // JAVASCRIPT - EASY (20)
    {
        question: "Which keyword can be used to declare a variable in JavaScript?",
        answers: ["var", "variable", "int", "define"],
        correct: 0,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which function displays a message in the browser console?",
        answers: ["print()", "console.log()", "display()", "write()"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        answers: ["#", "//", "<!--", "**"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        answers: ["constant", "fixed", "const", "static"],
        correct: 2,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which method adds an item to the end of an array in JavaScript?",
        answers: ["add()", "push()", "insert()", "append()"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What is the output of `typeof \"Hello\"` in JavaScript?",
        answers: ["string", "String", "text", "char"],
        correct: 0,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answers: ["==", "===", "=", "equals"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "How do you display an alert box in JavaScript?",
        answers: ["msg()", "alert()", "popup()", "toast()"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which keyword declares a block-scoped variable in modern JS?",
        answers: ["var", "let", "dim", "set"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What is the output of `2 + \"2\"` in JavaScript?",
        answers: ["4", "22", "NaN", "TypeError"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which event occurs when a user clicks an HTML element in JS?",
        answers: ["onchange", "onclick", "onmouseover", "onhover"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What method removes the last element from an array in JavaScript?",
        answers: ["pop()", "shift()", "remove()", "delete()"],
        correct: 0,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "How do you find the length of array `arr` in JavaScript?",
        answers: ["arr.size()", "arr.length", "arr.count", "len(arr)"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which symbol is used for template literals in ES6?",
        answers: ["'", "\"", "` (backtick)", "/"],
        correct: 2,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What will `Boolean(1)` return in JavaScript?",
        answers: ["true", "false", "1", "undefined"],
        correct: 0,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "Which operator is used for logical OR in JavaScript?",
        answers: ["&&", "||", "OR", "|"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What keyword is used to define a function in JavaScript?",
        answers: ["def", "function", "func", "fn"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "How do you create an empty object in JavaScript?",
        answers: ["{}", "[]", "Object()", "Both {} and Object()"],
        correct: 3,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What is the output of `Math.round(4.7)`?",
        answers: ["4", "5", "4.5", "4.7"],
        correct: 1,
        difficulty: "Easy",
        language: "JavaScript"
    },
    {
        question: "What will `Array.isArray([1, 2])` return?",
        answers: ["true", "false", "array", "object"],
        correct: 0,
        difficulty: "Easy",
        language: "JavaScript"
    },

    // JAVASCRIPT - MEDIUM (20)
    {
        question: "What will `console.log(typeof NaN)` output in JavaScript?",
        answers: ["NaN", "number", "undefined", "object"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What does `Array.prototype.map()` do in JavaScript?",
        answers: [
            "Modifies array in-place",
            "Creates a new array populated with results of calling a provided function on every element",
            "Filters array elements by condition",
            "Combines array elements into string"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is the output of `console.log(1 + -\"1\" + \"2\")` in JavaScript?",
        answers: ["02", "1-12", "22", "NaN"],
        correct: 0,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is event bubbling in the DOM?",
        answers: [
            "Event triggers only on window",
            "Event propagates upward from target element to ancestor elements",
            "Event triggers repeatedly in a loop",
            "Event cancels default behavior"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "Which method parses a JSON string into a JavaScript object?",
        answers: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "Object.parse()"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is the purpose of `Promise.all()` in JavaScript?",
        answers: [
            "Runs promises sequentially",
            "Takes an iterable of promises and returns a single Promise that resolves when all input promises resolve",
            "Cancels running promises",
            "Converts promises to callbacks"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What will `console.log([1, 2, 3] + [4, 5, 6])` output in JavaScript?",
        answers: ["[1, 2, 3, 4, 5, 6]", "1,2,34,5,6", "NaN", "TypeError"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What does `document.getElementById('id')` return if element is NOT found?",
        answers: ["undefined", "null", "false", "0"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "Which syntax represents ES6 Arrow Function?",
        answers: ["function => ()", "() => {}", "def () -> {}", "function() => {}"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What does destructuring assignment allow in JavaScript?",
        answers: [
            "Deleting object properties",
            "Unpacking values from arrays or properties from objects into distinct variables",
            "Compiling JS to WebAssembly",
            "Creating private variables"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is the difference between `let` and `var` in JavaScript?",
        answers: [
            "var is block-scoped, let is function-scoped",
            "let is block-scoped, var is function-scoped",
            "let cannot be reassigned",
            "var is read-only"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What does `Array.prototype.filter()` return?",
        answers: [
            "The first matching element",
            "A new array containing all elements that pass the test function",
            "A boolean",
            "Index of matching element"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is the output of `console.log(\"5\" - 3)` in JavaScript?",
        answers: ["2", "53", "NaN", "TypeError"],
        correct: 0,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What does `setTimeout(fn, 1000)` do?",
        answers: [
            "Runs fn every 1 second continuously",
            "Executes fn once after a delay of 1000 milliseconds",
            "Pauses code execution for 1 sec synchronously",
            "Stops fn after 1 sec"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(1 == '1')` vs `console.log(1 === '1')` output?",
        answers: ["true and true", "true and false", "false and true", "false and false"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is the purpose of `localStorage` in browser JavaScript?",
        answers: [
            "Stores session data cleared when tab closes",
            "Stores key-value data in browser with no expiration date",
            "Stores server database tables",
            "Caches HTTP images"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What method removes the first element of an array in JavaScript?",
        answers: ["pop()", "shift()", "unshift()", "splice()"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What does `spread operator (...)` do when used on an array `[...arr1, ...arr2]`?",
        answers: [
            "Multiplies array elements",
            "Expands array elements into a new merged array",
            "Deletes duplicates",
            "Sorts combined array"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What will `Object.keys({a: 1, b: 2})` return?",
        answers: ["[1, 2]", "['a', 'b']", "[['a', 1], ['b', 2]]", "{a, b}"],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },
    {
        question: "What is `async/await` in JavaScript?",
        answers: [
            "A multithreading library",
            "Syntactic sugar built on top of Promises for writing asynchronous code sequentially",
            "A DOM animation framework",
            "A compiler option"
        ],
        correct: 1,
        difficulty: "Medium",
        language: "JavaScript"
    },

    // JAVASCRIPT - DIFFICULT (20)
    {
        question: "What is a closure in JavaScript?",
        answers: [
            "A method to close browser tab",
            "A function bundled together with references to its surrounding lexical environment",
            "A syntax error handler",
            "A DOM modal dialog"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(0.1 + 0.2 === 0.3)` output in JavaScript?",
        answers: [
            "true",
            "false (due to floating point precision 0.30000000000000004)",
            "undefined",
            "TypeError"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is hoisting in JavaScript?",
        answers: [
            "Moving DOM elements to top of page",
            "JS mechanism where variable and function declarations are moved to top of scope before execution",
            "Lifting state in React",
            "Sorting array elements"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log([] == ![])` evaluate to in JavaScript?",
        answers: ["true", "false", "TypeError", "NaN"],
        correct: 0,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What does `Function.prototype.bind()` do in JavaScript?",
        answers: [
            "Executes function immediately",
            "Creates a new function that, when called, has its 'this' keyword set to provided value",
            "Binds two arrays together",
            "Prevents function invocation"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(typeof null)` output in JavaScript?",
        answers: ["null", "object", "undefined", "boolean"],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is the output of `(function(){ var a = b = 3; })(); console.log(typeof a, typeof b);` in non-strict mode?",
        answers: ["number number", "undefined number", "undefined undefined", "number undefined"],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is the difference between Microtask and Macrotask queues in JS Event Loop?",
        answers: [
            "Microtasks (Promises) execute before next Macrotask (setTimeout)",
            "Macrotasks execute before microtasks",
            "Microtasks execute only in web workers",
            "There is no difference"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)` output in JS?",
        answers: [
            "true and true",
            "true and false (3 > 2 is true -> true > 1 -> 1 > 1 is false)",
            "false and false",
            "false and true"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What does `Object.freeze()` do to an object in JavaScript?",
        answers: [
            "Prevents new properties from being added and existing properties from being modified or deleted",
            "Converts object to string",
            "Deletes all properties",
            "Makes object private"
        ],
        correct: 0,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is the difference between `call()`, `apply()`, and `bind()`?",
        answers: [
            "call() takes array of args, apply() takes comma args, bind() executes immediately",
            "call() invokes with comma args, apply() invokes with array of args, bind() returns a new bound function",
            "They are identical",
            "bind() is synchronous, call() is async"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is a WeakMap in JavaScript?",
        answers: [
            "A Map with smaller capacity",
            "A collection of key/value pairs where keys MUST be objects and are held weakly (garbage collectable)",
            "A Map that sorts keys automatically",
            "A deprecated object"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(typeof (async () => {}))` output?",
        answers: ["async", "promise", "function", "object"],
        correct: 2,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is the Prototype Chain in JavaScript?",
        answers: [
            "A chain of DOM nodes",
            "Mechanism by which JS objects inherit features/properties from one another via __proto__",
            "A security pipeline",
            "An array iterator"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(parseInt(\"08\"))` vs `console.log(parseInt(\"08\", 10))` output in ES5+?",
        answers: ["0 and 8", "8 and 8", "NaN and 8", "Error"],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What does `Symbol` data type represent in ES6?",
        answers: [
            "A string variable",
            "A primitive data type representing a unique, immutable identifier",
            "A class decorator",
            "A math symbol"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What happens when `Object.seal(obj)` is called on an object?",
        answers: [
            "Freezes all property values to read-only",
            "Prevents adding/deleting properties, but existing writable properties can still be changed",
            "Deletes object",
            "Encrypts object"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(3 + 4 + \"5\")` vs `console.log(\"3\" + 4 + 5)` output?",
        answers: ["75 and 345", "345 and 345", "75 and 75", "12 and 12"],
        correct: 0,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What is a Generator function in JavaScript (`function*`)?",
        answers: [
            "A function that creates HTML elements",
            "A function that can yield control back and forth, pausing execution via 'yield'",
            "A random generator",
            "A service worker"
        ],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    },
    {
        question: "What will `console.log(Math.max())` and `console.log(Math.min())` return?",
        answers: ["0 and 0", "-Infinity and Infinity", "Infinity and -Infinity", "NaN and NaN"],
        correct: 1,
        difficulty: "Difficult",
        language: "JavaScript"
    }
];