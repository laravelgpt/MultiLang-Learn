export type Attachment = { type: 'pdf' | 'youtube' | 'code' | 'link'; url: string };
export type Lesson = { id: string; title: string; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; attachments: Attachment[]; content?: string };
export type Topic = { id: string; title: string; lessons: Lesson[] };
export type LanguageCurriculum = { name: string; topics: Topic[] };
export type LanguageSummary = { id: string; name: string; icon: string; topics: number; lessons: number; popularity: number; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; }

export const languagesCurriculumData: Record<string, LanguageCurriculum> = {
  py: {
    name: 'Python',
    topics: [
      { id: 't1', title: 'Introduction to Python', lessons: [
          { 
            id: 'l1-1', 
            title: 'History and Features of Python', 
            difficulty: 'Beginner', 
            attachments: [{ type: 'pdf', url: '#' }],
            content: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.\n\n### Key Features:\n*   **Simple and Easy to Learn:** Python has a simple syntax that allows developers to write programs with fewer lines than some other programming languages.\n*   **Free and Open-Source:** You can freely use and distribute Python, even for commercial use.\n*   **High-Level Language:** When you write programs in Python, you never need to worry about low-level details such as managing the memory used by your program.'
          },
          { 
            id: 'l1-2', 
            title: 'Setting up Python Environment', 
            difficulty: 'Beginner', 
            attachments: [{ type: 'youtube', url: '#' }],
            content: 'To start programming in Python, you need to install the Python interpreter.\n\n1.  **Download Python:** Visit the official website [python.org](https://python.org) and download the latest version for your operating system.\n2.  **Installation:** Run the installer. On Windows, make sure to check the box that says "Add Python to PATH".\n3.  **Verify Installation:** Open your terminal or command prompt and type `python --version`. You should see the Python version you installed.\n4.  **Code Editor:** It\'s recommended to use a code editor like VS Code with the Python extension for a better development experience.'
          },
          { id: 'l1-3', title: 'Running Your First Python Script', difficulty: 'Beginner', attachments: [{ type: 'code', url: '#' }], content: "Let's write a simple \"Hello, World!\" program.\n\n1.  Open a text editor and create a new file named `hello.py`.\n2.  Add the following code:\n```python\nprint(\"Hello, World!\")\n```\n3. Save the file.\n4. Open a terminal, navigate to the directory where you saved the file, and run the script with the command:\n```bash\npython hello.py\n```\nYou should see `Hello, World!` printed to the console." },
      ]},
      { id: 't2', title: 'Python Basics', lessons: [
          { id: 'l2-1', title: 'Variables and Data Types', difficulty: 'Beginner', attachments: [], content: 'In Python, variables are created when you assign a value to it. Python has various standard data types that are used to define the operations possible on them and the storage method for each of them.\n\n**Example:**\n```python\nx = 5         # integer\ny = "Hello"   # string\nz = 20.5      # float\n```' },
          { id: 'l2-2', title: 'Operators in Python', difficulty: 'Beginner', attachments: [] },
          { id: 'l2-3', title: 'Type Casting in Python', difficulty: 'Beginner', attachments: [] },
      ]},
      { id: 't3', title: 'Control Flow', lessons: [
          { id: 'l3-1', title: 'Conditional Statements (if, elif, else)', difficulty: 'Beginner', attachments: [] },
          { id: 'l3-2', title: 'for Loops', difficulty: 'Intermediate', attachments: [] },
          { id: 'l3-3', title: 'while Loops', difficulty: 'Intermediate', attachments: [] },
          { id: 'l3-4', title: 'break, continue, and pass statements', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't4', title: 'Functions and Modules', lessons: [
          { id: 'l4-1', title: 'Defining and Calling Functions', difficulty: 'Intermediate', attachments: [] },
          { id: 'l4-2', title: 'Function Arguments', difficulty: 'Intermediate', attachments: [] },
          { id: 'l4-3', title: 'Lambda Functions', difficulty: 'Advanced', attachments: [] },
          { id: 'l4-4', title: 'Importing Modules', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't5', title: 'Data Structures', lessons: [
          { id: 'l5-1', title: 'Lists', difficulty: 'Beginner', attachments: [] },
          { id: 'l5-2', title: 'Tuples', difficulty: 'Beginner', attachments: [] },
          { id: 'l5-3', title: 'Sets', difficulty: 'Intermediate', attachments: [] },
          { id: 'l5-4', title: 'Dictionaries', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't6', title: 'Object-Oriented Programming (OOP)', lessons: [
          { id: 'l6-1', title: 'Classes and Objects', difficulty: 'Intermediate', attachments: [] },
          { id: 'l6-2', title: 'Inheritance', difficulty: 'Advanced', attachments: [] },
          { id: 'l6-3', title: 'Polymorphism', difficulty: 'Advanced', attachments: [] },
          { id: 'l6-4', title: 'Encapsulation', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't7', title: 'File I/O', lessons: [
          { id: 'l7-1', title: 'Reading and Writing Files', difficulty: 'Intermediate', attachments: [] },
          { id: 'l7-2', title: 'Working with Directories', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't8', title: 'Error and Exception Handling', lessons: [
          { id: 'l8-1', title: 'try, except, finally blocks', difficulty: 'Intermediate', attachments: [] },
          { id: 'l8-2', title: 'Raising Exceptions', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't9', title: 'Advanced Python Concepts', lessons: [
          { id: 'l9-1', title: 'Decorators', difficulty: 'Advanced', attachments: [] },
          { id: 'l9-2', title: 'Generators and Iterators', difficulty: 'Advanced', attachments: [] },
      ]},
    ]
  },
  js: { 
    name: 'JavaScript',
    topics: [
      { id: 't10', title: 'Introduction to JavaScript', lessons: [
        { id: 'l10-1', title: 'What is JavaScript?', difficulty: 'Beginner', attachments: [], content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.' },
        { id: 'l10-2', title: 'JavaScript in the Browser', difficulty: 'Beginner', attachments: [], content: "You can add JavaScript to an HTML document in three ways:\n\n*   **Inline:** `onclick=\"alert('Hello')\"` (not recommended)\n*   **Internal:** Using `<script>` tags in the `<head>` or `<body>`.\n*   **External:** Linking to a `.js` file: `<script src=\"myscripts.js\"></script>`" },
        { id: 'l10-3', title: 'Setting up a Development Environment', difficulty: 'Beginner', attachments: [] },
      ]},
      { id: 't11', title: 'JavaScript Fundamentals', lessons: [
          { id: 'l11-1', title: 'Variables, Constants, and Data Types', difficulty: 'Beginner', attachments: [] },
          { id: 'l11-2', title: 'Operators', difficulty: 'Beginner', attachments: [] },
          { id: 'l11-3', title: 'Control Flow: Conditionals and Loops', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't12', title: 'Functions', lessons: [
          { id: 'l12-1', title: 'Function Declarations vs. Expressions', difficulty: 'Intermediate', attachments: [] },
          { id: 'l12-2', title: 'Arrow Functions', difficulty: 'Intermediate', attachments: [] },
          { id: 'l12-3', title: 'Scope and Closures', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't13', title: 'DOM Manipulation', lessons: [
          { id: 'l13-1', title: 'Selecting Elements', difficulty: 'Intermediate', attachments: [] },
          { id: 'l13-2', title: 'Modifying the DOM', difficulty: 'Intermediate', attachments: [] },
          { id: 'l13-3', title: 'Handling Events', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't14', title: 'Asynchronous JavaScript', lessons: [
          { id: 'l14-1', title: 'Callbacks', difficulty: 'Intermediate', attachments: [] },
          { id: 'l14-2', title: 'Promises', difficulty: 'Advanced', attachments: [] },
          { id: 'l14-3', title: 'Async/Await', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't15', title: 'ES6+ Features', lessons: [
          { id: 'l15-1', title: 'Template Literals', difficulty: 'Beginner', attachments: [] },
          { id: 'l15-2', title: 'Destructuring', difficulty: 'Intermediate', attachments: [] },
          { id: 'l15-3', title: 'Modules', difficulty: 'Advanced', attachments: [] },
      ]},
    ]
  },
  java: { 
    name: 'Java', 
    topics: [
      { id: 't20', title: 'Introduction to Java', lessons: [
        { id: 'l20-1', title: 'What is Java?', difficulty: 'Beginner', attachments: [] },
        { id: 'l20-2', title: 'JDK, JRE, and JVM', difficulty: 'Beginner', attachments: [] },
        { id: 'l20-3', title: 'Your First Java Program', difficulty: 'Beginner', attachments: [] },
      ]},
      { id: 't21', title: 'Core Java Concepts', lessons: [
        { id: 'l21-1', title: 'Variables and Data Types', difficulty: 'Beginner', attachments: [] },
        { id: 'l21-2', title: 'Operators', difficulty: 'Beginner', attachments: [] },
        { id: 'l21-3', title: 'Control Flow Statements', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't22', title: 'Object-Oriented Programming', lessons: [
        { id: 'l22-1', title: 'Classes and Objects', difficulty: 'Intermediate', attachments: [] },
        { id: 'l22-2', title: 'Inheritance, Polymorphism, Abstraction, Encapsulation', difficulty: 'Advanced', attachments: [] },
        { id: 'l22-3', title: 'Interfaces and Abstract Classes', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't23', title: 'Java Collections Framework', lessons: [
        { id: 'l23-1', title: 'List, Set, Map', difficulty: 'Intermediate', attachments: [] },
        { id: 'l23-2', title: 'ArrayList, LinkedList, HashSet, HashMap', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't24', title: 'Exception Handling', lessons: [
        { id: 'l24-1', title: 'try-catch-finally', difficulty: 'Intermediate', attachments: [] },
        { id: 'l24-2', title: 'Checked vs. Unchecked Exceptions', difficulty: 'Advanced', attachments: [] },
      ]},
    ]
  },
  cpp: { 
    name: 'C++', 
    topics: [
      { id: 't30', title: 'C++ Basics', lessons: [
        { id: 'l30-1', title: 'Introduction to C++', difficulty: 'Beginner', attachments: [] },
        { id: 'l30-2', title: 'Basic Syntax and Structure', difficulty: 'Beginner', attachments: [] },
      ]},
      { id: 't31', title: 'Variables and Data Types', lessons: [
        { id: 'l31-1', title: 'Primitive Data Types', difficulty: 'Beginner', attachments: [] },
        { id: 'l31-2', title: 'Pointers', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't32', title: 'Object-Oriented Programming in C++', lessons: [
        { id: 'l32-1', title: 'Classes and Objects', difficulty: 'Intermediate', attachments: [] },
        { id: 'l32-2', title: 'Constructors and Destructors', difficulty: 'Intermediate', attachments: [] },
        { id: 'l32-3', title: 'Inheritance and Polymorphism', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't33', title: 'Standard Template Library (STL)', lessons: [
        { id: 'l33-1', title: 'Containers (vector, map, set)', difficulty: 'Intermediate', attachments: [] },
        { id: 'l33-2', title: 'Iterators and Algorithms', difficulty: 'Advanced', attachments: [] },
      ]},
    ]
  },
  go: { 
    name: 'Go', 
    topics: [
       { id: 't40', title: 'Getting Started with Go', lessons: [
        { id: 'l40-1', title: 'Why Go?', difficulty: 'Beginner', attachments: [] },
        { id: 'l40-2', title: 'Setting up Go environment', difficulty: 'Beginner', attachments: [] },
      ]},
      { id: 't41', title: 'Go Fundamentals', lessons: [
        { id: 'l41-1', title: 'Packages, Variables, and Functions', difficulty: 'Beginner', attachments: [] },
        { id: 'l41-2', title: 'Flow Control and Data Structures', difficulty: 'Intermediate', attachments: [] },
      ]},
      { id: 't42', title: 'Concurrency in Go', lessons: [
        { id: 'l42-1', title: 'Goroutines', difficulty: 'Advanced', attachments: [] },
        { id: 'l42-2', title: 'Channels', difficulty: 'Advanced', attachments: [] },
      ]},
      { id: 't43', title: 'Packages and Testing', lessons: [
        { id: 'l43-1', title: 'Creating and using packages', difficulty: 'Intermediate', attachments: [] },
        { id: 'l43-2', title: 'Writing tests in Go', difficulty: 'Intermediate', attachments: [] },
      ]},
    ]
  },
};

export let languagesSummaryData: LanguageSummary[] = [
  { id: 'py', name: 'Python', icon: 'https://placehold.co/32x32.png', topics: 9, lessons: 25, popularity: 5210, difficulty: 'Beginner' },
  { id: 'js', name: 'JavaScript', icon: 'https://placehold.co/32x32.png', topics: 6, lessons: 15, popularity: 4890, difficulty: 'Beginner' },
  { id: 'java', name: 'Java', icon: 'https://placehold.co/32x32.png', topics: 5, lessons: 12, popularity: 3120, difficulty: 'Intermediate' },
  { id: 'cpp', name: 'C++', icon: 'https://placehold.co/32x32.png', topics: 4, lessons: 9, popularity: 2540, difficulty: 'Advanced' },
  { id: 'go', name: 'Go', icon: 'https://placehold.co/32x32.png', topics: 4, lessons: 8, popularity: 1980, difficulty: 'Intermediate' },
];
