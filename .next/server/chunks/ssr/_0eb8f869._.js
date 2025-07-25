module.exports = {

"[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "languagesCurriculumData": (()=>languagesCurriculumData),
    "languagesSummaryData": (()=>languagesSummaryData)
});
const languagesCurriculumData = {
    py: {
        name: 'Python',
        topics: [
            {
                id: 't1',
                title: 'Introduction to Python',
                lessons: [
                    {
                        id: 'l1-1',
                        title: 'History and Features of Python',
                        difficulty: 'Beginner',
                        attachments: [
                            {
                                type: 'pdf',
                                url: '#'
                            }
                        ],
                        content: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.\n\n### Key Features:\n*   **Simple and Easy to Learn:** Python has a simple syntax that allows developers to write programs with fewer lines than some other programming languages.\n*   **Free and Open-Source:** You can freely use and distribute Python, even for commercial use.\n*   **High-Level Language:** When you write programs in Python, you never need to worry about low-level details such as managing the memory used by your program.'
                    },
                    {
                        id: 'l1-2',
                        title: 'Setting up Python Environment',
                        difficulty: 'Beginner',
                        attachments: [
                            {
                                type: 'youtube',
                                url: '#'
                            }
                        ],
                        content: 'To start programming in Python, you need to install the Python interpreter.\n\n1.  **Download Python:** Visit the official website [python.org](https://python.org) and download the latest version for your operating system.\n2.  **Installation:** Run the installer. On Windows, make sure to check the box that says "Add Python to PATH".\n3.  **Verify Installation:** Open your terminal or command prompt and type `python --version`. You should see the Python version you installed.\n4.  **Code Editor:** It\'s recommended to use a code editor like VS Code with the Python extension for a better development experience.'
                    },
                    {
                        id: 'l1-3',
                        title: 'Running Your First Python Script',
                        difficulty: 'Beginner',
                        attachments: [
                            {
                                type: 'code',
                                url: '#'
                            }
                        ],
                        content: "Let's write a simple \"Hello, World!\" program.\n\n1.  Open a text editor and create a new file named `hello.py`.\n2.  Add the following code:\n```python\nprint(\"Hello, World!\")\n```\n3. Save the file.\n4. Open a terminal, navigate to the directory where you saved the file, and run the script with the command:\n```bash\npython hello.py\n```\nYou should see `Hello, World!` printed to the console."
                    }
                ]
            },
            {
                id: 't2',
                title: 'Python Basics',
                lessons: [
                    {
                        id: 'l2-1',
                        title: 'Variables and Data Types',
                        difficulty: 'Beginner',
                        attachments: [],
                        content: 'In Python, variables are created when you assign a value to it. Python has various standard data types that are used to define the operations possible on them and the storage method for each of them.\n\n**Example:**\n```python\nx = 5         # integer\ny = "Hello"   # string\nz = 20.5      # float\n```'
                    },
                    {
                        id: 'l2-2',
                        title: 'Operators in Python',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l2-3',
                        title: 'Type Casting in Python',
                        difficulty: 'Beginner',
                        attachments: []
                    }
                ]
            },
            {
                id: 't3',
                title: 'Control Flow',
                lessons: [
                    {
                        id: 'l3-1',
                        title: 'Conditional Statements (if, elif, else)',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l3-2',
                        title: 'for Loops',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l3-3',
                        title: 'while Loops',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l3-4',
                        title: 'break, continue, and pass statements',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't4',
                title: 'Functions and Modules',
                lessons: [
                    {
                        id: 'l4-1',
                        title: 'Defining and Calling Functions',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l4-2',
                        title: 'Function Arguments',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l4-3',
                        title: 'Lambda Functions',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l4-4',
                        title: 'Importing Modules',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't5',
                title: 'Data Structures',
                lessons: [
                    {
                        id: 'l5-1',
                        title: 'Lists',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l5-2',
                        title: 'Tuples',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l5-3',
                        title: 'Sets',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l5-4',
                        title: 'Dictionaries',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't6',
                title: 'Object-Oriented Programming (OOP)',
                lessons: [
                    {
                        id: 'l6-1',
                        title: 'Classes and Objects',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l6-2',
                        title: 'Inheritance',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l6-3',
                        title: 'Polymorphism',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l6-4',
                        title: 'Encapsulation',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't7',
                title: 'File I/O',
                lessons: [
                    {
                        id: 'l7-1',
                        title: 'Reading and Writing Files',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l7-2',
                        title: 'Working with Directories',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't8',
                title: 'Error and Exception Handling',
                lessons: [
                    {
                        id: 'l8-1',
                        title: 'try, except, finally blocks',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l8-2',
                        title: 'Raising Exceptions',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't9',
                title: 'Advanced Python Concepts',
                lessons: [
                    {
                        id: 'l9-1',
                        title: 'Decorators',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l9-2',
                        title: 'Generators and Iterators',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            }
        ]
    },
    js: {
        name: 'JavaScript',
        topics: [
            {
                id: 't10',
                title: 'Introduction to JavaScript',
                lessons: [
                    {
                        id: 'l10-1',
                        title: 'What is JavaScript?',
                        difficulty: 'Beginner',
                        attachments: [],
                        content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.'
                    },
                    {
                        id: 'l10-2',
                        title: 'JavaScript in the Browser',
                        difficulty: 'Beginner',
                        attachments: [],
                        content: "You can add JavaScript to an HTML document in three ways:\n\n*   **Inline:** `onclick=\"alert('Hello')\"` (not recommended)\n*   **Internal:** Using `<script>` tags in the `<head>` or `<body>`.\n*   **External:** Linking to a `.js` file: `<script src=\"myscripts.js\"></script>`",
                        codeSnippet: `console.log("Hello from an interactive script tag!");`
                    },
                    {
                        id: 'l10-3',
                        title: 'Setting up a Development Environment',
                        difficulty: 'Beginner',
                        attachments: []
                    }
                ]
            },
            {
                id: 't11',
                title: 'JavaScript Fundamentals',
                lessons: [
                    {
                        id: 'l11-1',
                        title: 'Variables, Constants, and Data Types',
                        difficulty: 'Beginner',
                        attachments: [],
                        codeSnippet: `let message = "Hello, JavaScript!";\nconst year = 2024;\nlet isLearning = true;\n\nconsole.log(message);\nconsole.log("Current year:", year);\nconsole.log("Are you learning?", isLearning);`
                    },
                    {
                        id: 'l11-2',
                        title: 'Operators',
                        difficulty: 'Beginner',
                        attachments: [],
                        codeSnippet: `let a = 10;\nlet b = 5;\n\nconsole.log('Addition:', a + b);\nconsole.log('Subtraction:', a - b);\nconsole.log('Multiplication:', a * b);\nconsole.log('Division:', a / b);`
                    },
                    {
                        id: 'l11-3',
                        title: 'Control Flow: Conditionals and Loops',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't12',
                title: 'Functions',
                lessons: [
                    {
                        id: 'l12-1',
                        title: 'Function Declarations vs. Expressions',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l12-2',
                        title: 'Arrow Functions',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l12-3',
                        title: 'Scope and Closures',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't13',
                title: 'DOM Manipulation',
                lessons: [
                    {
                        id: 'l13-1',
                        title: 'Selecting Elements',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l13-2',
                        title: 'Modifying the DOM',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l13-3',
                        title: 'Handling Events',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't14',
                title: 'Asynchronous JavaScript',
                lessons: [
                    {
                        id: 'l14-1',
                        title: 'Callbacks',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l14-2',
                        title: 'Promises',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l14-3',
                        title: 'Async/Await',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't15',
                title: 'ES6+ Features',
                lessons: [
                    {
                        id: 'l15-1',
                        title: 'Template Literals',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l15-2',
                        title: 'Destructuring',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l15-3',
                        title: 'Modules',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            }
        ]
    },
    java: {
        name: 'Java',
        topics: [
            {
                id: 't20',
                title: 'Introduction to Java',
                lessons: [
                    {
                        id: 'l20-1',
                        title: 'What is Java?',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l20-2',
                        title: 'JDK, JRE, and JVM',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l20-3',
                        title: 'Your First Java Program',
                        difficulty: 'Beginner',
                        attachments: []
                    }
                ]
            },
            {
                id: 't21',
                title: 'Core Java Concepts',
                lessons: [
                    {
                        id: 'l21-1',
                        title: 'Variables and Data Types',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l21-2',
                        title: 'Operators',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l21-3',
                        title: 'Control Flow Statements',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't22',
                title: 'Object-Oriented Programming',
                lessons: [
                    {
                        id: 'l22-1',
                        title: 'Classes and Objects',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l22-2',
                        title: 'Inheritance, Polymorphism, Abstraction, Encapsulation',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l22-3',
                        title: 'Interfaces and Abstract Classes',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't23',
                title: 'Java Collections Framework',
                lessons: [
                    {
                        id: 'l23-1',
                        title: 'List, Set, Map',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l23-2',
                        title: 'ArrayList, LinkedList, HashSet, HashMap',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't24',
                title: 'Exception Handling',
                lessons: [
                    {
                        id: 'l24-1',
                        title: 'try-catch-finally',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l24-2',
                        title: 'Checked vs. Unchecked Exceptions',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            }
        ]
    },
    cpp: {
        name: 'C++',
        topics: [
            {
                id: 't30',
                title: 'C++ Basics',
                lessons: [
                    {
                        id: 'l30-1',
                        title: 'Introduction to C++',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l30-2',
                        title: 'Basic Syntax and Structure',
                        difficulty: 'Beginner',
                        attachments: []
                    }
                ]
            },
            {
                id: 't31',
                title: 'Variables and Data Types',
                lessons: [
                    {
                        id: 'l31-1',
                        title: 'Primitive Data Types',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l31-2',
                        title: 'Pointers',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't32',
                title: 'Object-Oriented Programming in C++',
                lessons: [
                    {
                        id: 'l32-1',
                        title: 'Classes and Objects',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l32-2',
                        title: 'Constructors and Destructors',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l32-3',
                        title: 'Inheritance and Polymorphism',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't33',
                title: 'Standard Template Library (STL)',
                lessons: [
                    {
                        id: 'l33-1',
                        title: 'Containers (vector, map, set)',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l33-2',
                        title: 'Iterators and Algorithms',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            }
        ]
    },
    go: {
        name: 'Go',
        topics: [
            {
                id: 't40',
                title: 'Getting Started with Go',
                lessons: [
                    {
                        id: 'l40-1',
                        title: 'Why Go?',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l40-2',
                        title: 'Setting up Go environment',
                        difficulty: 'Beginner',
                        attachments: []
                    }
                ]
            },
            {
                id: 't41',
                title: 'Go Fundamentals',
                lessons: [
                    {
                        id: 'l41-1',
                        title: 'Packages, Variables, and Functions',
                        difficulty: 'Beginner',
                        attachments: []
                    },
                    {
                        id: 'l41-2',
                        title: 'Flow Control and Data Structures',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            },
            {
                id: 't42',
                title: 'Concurrency in Go',
                lessons: [
                    {
                        id: 'l42-1',
                        title: 'Goroutines',
                        difficulty: 'Advanced',
                        attachments: []
                    },
                    {
                        id: 'l42-2',
                        title: 'Channels',
                        difficulty: 'Advanced',
                        attachments: []
                    }
                ]
            },
            {
                id: 't43',
                title: 'Packages and Testing',
                lessons: [
                    {
                        id: 'l43-1',
                        title: 'Creating and using packages',
                        difficulty: 'Intermediate',
                        attachments: []
                    },
                    {
                        id: 'l43-2',
                        title: 'Writing tests in Go',
                        difficulty: 'Intermediate',
                        attachments: []
                    }
                ]
            }
        ]
    }
};
let languagesSummaryData = [
    {
        id: 'py',
        name: 'Python',
        icon: 'https://placehold.co/32x32.png',
        topics: 9,
        lessons: 25,
        popularity: 5210,
        difficulty: 'Beginner'
    },
    {
        id: 'js',
        name: 'JavaScript',
        icon: 'https://placehold.co/32x32.png',
        topics: 6,
        lessons: 15,
        popularity: 4890,
        difficulty: 'Beginner'
    },
    {
        id: 'java',
        name: 'Java',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 12,
        popularity: 3120,
        difficulty: 'Intermediate'
    },
    {
        id: 'cpp',
        name: 'C++',
        icon: 'https://placehold.co/32x32.png',
        topics: 4,
        lessons: 9,
        popularity: 2540,
        difficulty: 'Advanced'
    },
    {
        id: 'go',
        name: 'Go',
        icon: 'https://placehold.co/32x32.png',
        topics: 4,
        lessons: 8,
        popularity: 1980,
        difficulty: 'Intermediate'
    }
];
}}),
"[project]/src/services/languageService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0001cd73d14dadd1754434a98d572a0a4ca7da57a9":"getLanguagesSummary","4028abf24394488171fd54b5a64584a4baf0e34539":"deleteLanguageCurriculum","409e24a56fa86aa41a62f80b6c5f29591b55da155f":"getLanguageCurriculum","40b6e692516f133fa1219e0f830fc12102ee6d7e84":"deleteLanguageSummary","40f26c7e086bd00e34f2502d82278fa373c6bb6bed":"addLanguageSummary","6033bfb82fbe56de05f8d6fe432ecd469e142bfd95":"addLanguageCurriculum","60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982":"addTopic","7097593df51f27e4589519f06534c2942706cb9f20":"addLesson"},"",""] */ __turbopack_context__.s({
    "addLanguageCurriculum": (()=>addLanguageCurriculum),
    "addLanguageSummary": (()=>addLanguageSummary),
    "addLesson": (()=>addLesson),
    "addTopic": (()=>addTopic),
    "deleteLanguageCurriculum": (()=>deleteLanguageCurriculum),
    "deleteLanguageSummary": (()=>deleteLanguageSummary),
    "getLanguageCurriculum": (()=>getLanguageCurriculum),
    "getLanguagesSummary": (()=>getLanguagesSummary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getLanguagesSummary() {
    // Simulate async database call
    return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"]);
}
async function addLanguageSummary(summary) {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].push(summary);
    return Promise.resolve();
}
async function deleteLanguageSummary(langId) {
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].findIndex((l)=>l.id === langId);
    if (index > -1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].splice(index, 1);
    }
    return Promise.resolve();
}
async function getLanguageCurriculum(langId) {
    return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId] || null);
}
async function addLanguageCurriculum(langId, curriculum) {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId] = curriculum;
    return Promise.resolve();
}
async function deleteLanguageCurriculum(langId) {
    delete __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId];
    return Promise.resolve();
}
async function addTopic(langId, topic) {
    const curriculum = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId];
    if (curriculum) {
        const newTopic = {
            ...topic,
            id: `t-${Date.now()}`,
            lessons: []
        };
        curriculum.topics.push(newTopic);
        return Promise.resolve(newTopic);
    }
    return Promise.resolve(null);
}
async function addLesson(langId, topicId, lesson) {
    const topic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId]?.topics.find((t)=>t.id === topicId);
    if (topic) {
        const newLesson = {
            ...lesson,
            id: `l-${Date.now()}`
        };
        topic.lessons.push(newLesson);
        return Promise.resolve(newLesson);
    }
    return Promise.resolve(null);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLanguagesSummary,
    addLanguageSummary,
    deleteLanguageSummary,
    getLanguageCurriculum,
    addLanguageCurriculum,
    deleteLanguageCurriculum,
    addTopic,
    addLesson
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLanguagesSummary, "0001cd73d14dadd1754434a98d572a0a4ca7da57a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLanguageSummary, "40f26c7e086bd00e34f2502d82278fa373c6bb6bed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLanguageSummary, "40b6e692516f133fa1219e0f830fc12102ee6d7e84", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLanguageCurriculum, "409e24a56fa86aa41a62f80b6c5f29591b55da155f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLanguageCurriculum, "6033bfb82fbe56de05f8d6fe432ecd469e142bfd95", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLanguageCurriculum, "4028abf24394488171fd54b5a64584a4baf0e34539", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTopic, "60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLesson, "7097593df51f27e4589519f06534c2942706cb9f20", null);
}}),
"[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0001cd73d14dadd1754434a98d572a0a4ca7da57a9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguagesSummary"]),
    "4028abf24394488171fd54b5a64584a4baf0e34539": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLanguageCurriculum"]),
    "409e24a56fa86aa41a62f80b6c5f29591b55da155f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguageCurriculum"]),
    "40b6e692516f133fa1219e0f830fc12102ee6d7e84": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLanguageSummary"]),
    "40f26c7e086bd00e34f2502d82278fa373c6bb6bed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLanguageSummary"]),
    "6033bfb82fbe56de05f8d6fe432ecd469e142bfd95": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLanguageCurriculum"]),
    "60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addTopic"]),
    "7097593df51f27e4589519f06534c2942706cb9f20": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLesson"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0001cd73d14dadd1754434a98d572a0a4ca7da57a9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0001cd73d14dadd1754434a98d572a0a4ca7da57a9"]),
    "4028abf24394488171fd54b5a64584a4baf0e34539": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4028abf24394488171fd54b5a64584a4baf0e34539"]),
    "409e24a56fa86aa41a62f80b6c5f29591b55da155f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["409e24a56fa86aa41a62f80b6c5f29591b55da155f"]),
    "40b6e692516f133fa1219e0f830fc12102ee6d7e84": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40b6e692516f133fa1219e0f830fc12102ee6d7e84"]),
    "40f26c7e086bd00e34f2502d82278fa373c6bb6bed": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40f26c7e086bd00e34f2502d82278fa373c6bb6bed"]),
    "6033bfb82fbe56de05f8d6fe432ecd469e142bfd95": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6033bfb82fbe56de05f8d6fe432ecd469e142bfd95"]),
    "60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982"]),
    "7097593df51f27e4589519f06534c2942706cb9f20": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7097593df51f27e4589519f06534c2942706cb9f20"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$languages$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/languages/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/template.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/template.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/languages/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/languages/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/admin/page-header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageHeader": (()=>PageHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function PageHeader({ title, description, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-headline text-3xl font-bold md:text-4xl text-primary",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/page-header.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/page-header.tsx",
                        lineNumber: 16,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/page-header.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/admin/page-header.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/page-header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-xl font-semibold leading-none tracking-tight md:text-2xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/app/languages/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UserLanguagesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/page-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function UserLanguagesPage() {
    // const { t } = useLanguage(); // useLanguage can only be used in client components
    const languagesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguagesSummary"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$page$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: "Choose a Language",
                description: "Select a language to start your learning journey."
            }, void 0, false, {
                fileName: "[project]/src/app/languages/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: languagesData.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex-row items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: lang.icon,
                                        alt: lang.name,
                                        width: 64,
                                        height: 64,
                                        className: "rounded-lg",
                                        "data-ai-hint": `${lang.name} logo`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/languages/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: lang.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/languages/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                children: "A popular programming language."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/languages/page.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/languages/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/languages/page.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "flex-grow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/languages/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardFooter"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/languages/${lang.id}`,
                                        children: [
                                            "Start Learning ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/languages/page.tsx",
                                                lineNumber: 36,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/languages/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/languages/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/languages/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, lang.id, true, {
                        fileName: "[project]/src/app/languages/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/languages/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/languages/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/languages/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_0eb8f869._.js.map