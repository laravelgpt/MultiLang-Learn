module.exports = {

"[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "challengesData": (()=>challengesData),
    "languagesCurriculumData": (()=>languagesCurriculumData),
    "languagesSummaryData": (()=>languagesSummaryData),
    "quickQuestionsData": (()=>quickQuestionsData),
    "submissionsData": (()=>submissionsData)
});
let challengesData = [
    {
        id: 1,
        title: "Reverse a String",
        description: "Write a function that takes a string as input and returns the string reversed. For example, 'hello' should become 'olleh'.",
        difficulty: "Easy",
        points: 10,
        tests: 5,
        language: "js",
        timeLimitMinutes: 5
    },
    {
        id: 2,
        title: "Palindrome Checker",
        description: "Create a function that checks if a given string is a palindrome. A palindrome is a word that reads the same forwards and backward.",
        difficulty: "Easy",
        points: 15,
        tests: 8,
        language: "js"
    },
    {
        id: 3,
        title: "FizzBuzz",
        description: "Implement the classic FizzBuzz problem. Print numbers from 1 to 100, but for multiples of 3 print 'Fizz' and for multiples of 5 print 'Buzz'.",
        difficulty: "Easy",
        points: 10,
        tests: 3,
        language: "py"
    },
    {
        id: 4,
        title: "Find Maximum Subarray",
        description: "Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        difficulty: "Medium",
        points: 25,
        tests: 12,
        language: "py",
        timeLimitMinutes: 15
    },
    {
        id: 5,
        title: "Two Sum",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        difficulty: "Medium",
        points: 20,
        tests: 7,
        language: "js"
    },
    {
        id: 6,
        title: "Valid Anagram",
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another.",
        difficulty: "Medium",
        points: 30,
        tests: 15,
        language: "py"
    },
    {
        id: 7,
        title: "Binary Search",
        description: "Given a sorted array of integers, write a function that searches for a target value. If the target exists, return its index; otherwise, return -1.",
        difficulty: "Medium",
        points: 25,
        tests: 10,
        language: "java"
    },
    {
        id: 8,
        title: "Longest Common Prefix",
        description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
        difficulty: "Easy",
        points: 15,
        tests: 9,
        language: "go",
        timeLimitMinutes: 10
    },
    {
        id: 9,
        title: "Linked List Cycle",
        description: "Given a linked list, determine if it has a cycle in it. To represent a cycle, we use an integer `pos` which denotes the position.",
        difficulty: "Hard",
        points: 40,
        tests: 11,
        language: "cpp"
    },
    {
        id: 10,
        title: "Implement Queue using Stacks",
        description: "Implement a first in, first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue.",
        difficulty: "Hard",
        points: 45,
        tests: 18,
        language: "js",
        timeLimitMinutes: 25
    },
    {
        id: 11,
        title: "Fibonacci Number",
        description: "Write a function to compute the nth Fibonacci number. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.",
        difficulty: "Easy",
        points: 10,
        tests: 6,
        language: "py"
    },
    {
        id: 12,
        title: "Merge Two Sorted Lists",
        description: "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
        difficulty: "Medium",
        points: 30,
        tests: 14,
        language: "java"
    },
    {
        id: 13,
        title: "Maximum Depth of Binary Tree",
        description: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path.",
        difficulty: "Easy",
        points: 15,
        tests: 8,
        language: "py"
    },
    {
        id: 14,
        title: "Container With Most Water",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
        difficulty: "Medium",
        points: 35,
        tests: 10,
        language: "js"
    },
    {
        id: 15,
        title: "Trapping Rain Water",
        description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        difficulty: "Hard",
        points: 50,
        tests: 20,
        language: "go",
        timeLimitMinutes: 30
    }
];
const submissionsData = [
    {
        id: 1,
        challengeTitle: "Reverse a String",
        language: "js",
        status: "Accepted",
        date: "2024-07-28"
    },
    {
        id: 2,
        challengeTitle: "FizzBuzz",
        language: "py",
        status: "Accepted",
        date: "2024-07-27"
    },
    {
        id: 3,
        challengeTitle: "Two Sum",
        language: "js",
        status: "Wrong Answer",
        date: "2024-07-26"
    },
    {
        id: 4,
        challengeTitle: "Palindrome Checker",
        language: "js",
        status: "Accepted",
        date: "2024-07-25"
    }
];
let quickQuestionsData = {
    js: [
        "What is the difference between `let`, `const`, and `var`?",
        "Explain closures in JavaScript.",
        "Show an example of an async/await function.",
        "What is the event loop?",
        "Explain prototypes in JS."
    ],
    py: [
        "What are decorators in Python?",
        "Explain list comprehensions with an example.",
        "How does garbage collection work in Python?",
        "What are Python's data models?",
        "Difference between a list and a tuple?"
    ],
    go: [
        "What is a goroutine?",
        "Explain the difference between a slice and an array.",
        "How do channels work in Go?",
        "What is the `defer` statement used for?",
        "Explain interfaces in Go."
    ],
    java: [
        "What is the difference between an interface and an abstract class?",
        "Explain the Java Virtual Machine (JVM).",
        "Show an example of exception handling.",
        "What are Java Generics?",
        "What is the difference between `==` and `.equals()`?"
    ],
    csharp: [
        "What is the purpose of LINQ?",
        "Explain the difference between `struct` and `class`.",
        "Show an example of using `async` and `await` in C#.",
        "What is the .NET Common Language Runtime (CLR)?",
        "How does garbage collection work in .NET?"
    ],
    typescript: [
        "What are generics in TypeScript?",
        "Explain the difference between an `interface` and a `type`.",
        "What is a `never` type?",
        "How do you use utility types like `Partial` and `Pick`?",
        "What are decorators in TypeScript?"
    ],
    cpp: [
        "Explain pointers vs. references in C++.",
        "What is RAII (Resource Acquisition Is Initialization)?",
        "Show an example of a simple class with a constructor.",
        "What is the difference between `new`/`delete` and `malloc`/`free`?",
        "Explain virtual functions and polymorphism."
    ],
    rust: [
        "What is the borrow checker?",
        "Explain ownership in Rust.",
        "Show an example of using the `match` control flow operator.",
        "What are traits in Rust?",
        "Explain lifetimes in Rust."
    ]
};
const generateLessonsForTopic = (langId, topicTitle, topicIndex)=>{
    const lessonTitles = [
        `Getting Started with ${topicTitle}`,
        `Core Concepts in ${topicTitle}`,
        `Practical Example: ${topicTitle}`,
        `Deep Dive into ${topicTitle} Options`,
        `${topicTitle} Best Practices`,
        `Advanced ${topicTitle} Techniques`,
        `Common Pitfalls with ${topicTitle}`,
        `${topicTitle} and Performance`,
        `Debugging ${topicTitle} Issues`,
        `Project: Applying ${topicTitle}`
    ];
    return lessonTitles.map((title, lessonIndex)=>{
        const difficulties = [
            'Beginner',
            'Intermediate',
            'Advanced'
        ];
        const difficulty = difficulties[Math.floor(lessonIndex / 3.4)]; // Distribute difficulty
        return {
            id: `l-${langId}-${topicIndex}-${lessonIndex}`,
            title: title,
            difficulty: difficulty,
            attachments: [],
            content: `Content for ${title} is coming soon. This lesson covers the essentials of ${topicTitle}, providing a foundational understanding. We will explore key concepts through clear explanations and practical examples. By the end of this lesson, you will be able to apply these principles in your own projects.`,
            codeSnippet: `// Code for ${title}\nconsole.log("Hello, ${topicTitle}!");`
        };
    });
};
const createCurriculum = (name, topicsList)=>{
    const langId = name.toLowerCase().replace(/#/g, 'sharp').replace(/\+/g, 'plus').replace(/\s/g, '');
    return {
        name: name,
        topics: topicsList.map((topicTitle, i)=>({
                id: `t-${langId}-${i}`,
                title: topicTitle,
                lessons: generateLessonsForTopic(langId, topicTitle, i)
            }))
    };
};
const languagesCurriculumData = {
    py: createCurriculum('Python', [
        'Introduction',
        'Basics',
        'Control Flow',
        'Functions',
        'Data Structures',
        'OOP',
        'File I/O',
        'Exception Handling'
    ]),
    js: createCurriculum('JavaScript', [
        'Introduction',
        'Fundamentals',
        'Functions',
        'DOM Manipulation',
        'Async JS',
        'ES6+ Features'
    ]),
    java: createCurriculum('Java', [
        'Introduction',
        'Core Concepts',
        'OOP',
        'Collections Framework',
        'Exception Handling'
    ]),
    cpp: createCurriculum('C++', [
        'Basics',
        'Variables & Types',
        'OOP in C++',
        'Standard Template Library (STL)'
    ]),
    go: createCurriculum('Go', [
        'Getting Started',
        'Fundamentals',
        'Concurrency',
        'Packages & Testing'
    ]),
    csharp: createCurriculum('C#', [
        'Introduction to .NET',
        'Variables & Data Types',
        'Control Flow',
        'Classes & Objects (OOP)',
        'LINQ'
    ]),
    typescript: createCurriculum('TypeScript', [
        'Intro to TypeScript',
        'Basic Types',
        'Interfaces & Classes',
        'Generics',
        'Modules'
    ]),
    swift: createCurriculum('Swift', [
        'Swift Basics',
        'Control Flow',
        'Data Structures',
        'Classes & Structs',
        'Protocol-Oriented Programming'
    ]),
    kotlin: createCurriculum('Kotlin', [
        'Kotlin Basics',
        'Control Flow',
        'Functions & Lambdas',
        'Kotlin for Android',
        'Coroutines'
    ]),
    php: createCurriculum('PHP', [
        'PHP Syntax',
        'Variables & Types',
        'Control Structures',
        'Functions',
        'Working with Forms'
    ]),
    ruby: createCurriculum('Ruby', [
        'Ruby Basics',
        'Control Structures',
        'Methods & Blocks',
        'Classes & Objects',
        'Ruby on Rails Intro'
    ]),
    rust: createCurriculum('Rust', [
        'Getting Started',
        'Common Concepts',
        'Ownership',
        'Structs & Enums',
        'Error Handling'
    ]),
    dart: createCurriculum('Dart', [
        'Dart Fundamentals',
        'Control Flow',
        'Functions',
        'Classes',
        'Asynchronous Dart'
    ]),
    scala: createCurriculum('Scala', [
        'Scala Basics',
        'Functional Programming',
        'Object-Oriented Scala',
        'Case Classes & Pattern Matching',
        'Collections'
    ]),
    perl: createCurriculum('Perl', [
        'Perl Syntax',
        'Variables',
        'Control Structures',
        'Subroutines',
        'Regular Expressions'
    ]),
    haskell: createCurriculum('Haskell', [
        'Basic Syntax',
        'Types and Typeclasses',
        'Functions',
        'Monads',
        'Input/Output'
    ]),
    lua: createCurriculum('Lua', [
        'Basic Concepts',
        'Control Structures',
        'Functions',
        'Tables',
        'Metatables'
    ]),
    r: createCurriculum('R', [
        'R Basics',
        'Data Structures',
        'Data Import/Export',
        'Control Structures',
        'Data Visualization with ggplot2'
    ]),
    sql: createCurriculum('SQL', [
        'Basic Queries',
        'Joining Tables',
        'Aggregation',
        'Subqueries',
        'Data Modification'
    ]),
    bash: createCurriculum('Bash', [
        'Shell Basics',
        'Scripting Fundamentals',
        'Variables & Operators',
        'Control Flow',
        'Functions & Command-Line Arguments'
    ])
};
const summaryMetadata = {
    py: {
        popularity: 5210,
        difficulty: 'Beginner',
        progress: 80,
        description: 'Versatile language for data science and web.'
    },
    js: {
        popularity: 4890,
        difficulty: 'Beginner',
        progress: 65,
        description: 'Dynamic language for web development.'
    },
    java: {
        popularity: 3120,
        difficulty: 'Intermediate',
        progress: 40,
        description: 'Robust language for enterprise applications.'
    },
    cpp: {
        popularity: 2540,
        difficulty: 'Advanced',
        progress: 25,
        description: 'High-performance language for systems programming.'
    },
    go: {
        popularity: 1980,
        difficulty: 'Intermediate',
        progress: 35,
        description: 'Modern language for concurrent programming.'
    },
    csharp: {
        popularity: 3500,
        difficulty: 'Intermediate',
        progress: 55,
        description: 'Flexible language for Windows and web apps.'
    },
    typescript: {
        popularity: 4200,
        difficulty: 'Intermediate',
        progress: 70,
        description: 'JavaScript that scales.'
    },
    swift: {
        popularity: 2800,
        difficulty: 'Intermediate',
        progress: 30,
        description: 'Modern, safe language for Apple platforms.'
    },
    kotlin: {
        popularity: 2600,
        difficulty: 'Intermediate',
        progress: 45,
        description: 'The official language for Android development.'
    },
    php: {
        popularity: 2300,
        difficulty: 'Beginner',
        progress: 10,
        description: 'Popular language for server-side web development.'
    },
    ruby: {
        popularity: 1800,
        difficulty: 'Intermediate',
        progress: 20,
        description: 'A dynamic, open source programming language.'
    },
    rust: {
        popularity: 1530,
        difficulty: 'Advanced',
        progress: 15,
        description: 'A language empowering everyone to build reliable software.'
    },
    dart: {
        popularity: 1200,
        difficulty: 'Intermediate',
        progress: 5,
        description: 'Client-optimized language for fast apps on any platform.'
    },
    scala: {
        popularity: 900,
        difficulty: 'Advanced',
        progress: 2,
        description: 'A hybrid functional/object-oriented language.'
    },
    perl: {
        popularity: 400,
        difficulty: 'Advanced',
        progress: 0,
        description: 'A highly capable, feature-rich programming language.'
    },
    haskell: {
        popularity: 750,
        difficulty: 'Advanced',
        progress: 0,
        description: 'An advanced, purely functional programming language.'
    },
    lua: {
        popularity: 1100,
        difficulty: 'Beginner',
        progress: 0,
        description: 'A powerful, efficient, lightweight, embeddable scripting language.'
    },
    r: {
        popularity: 1400,
        difficulty: 'Intermediate',
        progress: 0,
        description: 'A language and environment for statistical computing.'
    },
    sql: {
        popularity: 4500,
        difficulty: 'Beginner',
        progress: 0,
        description: 'A standard language for storing and retrieving data.'
    },
    bash: {
        popularity: 2100,
        difficulty: 'Intermediate',
        progress: 0,
        description: 'The GNU Project\'s shell—the Bourne Again SHell.'
    }
};
let languagesSummaryData = Object.keys(languagesCurriculumData).map((langId)=>{
    const curriculum = languagesCurriculumData[langId];
    const metadata = summaryMetadata[langId] || {};
    const totalLessons = curriculum.topics.reduce((sum, topic)=>sum + topic.lessons.length, 0);
    return {
        id: langId,
        name: curriculum.name,
        icon: 'https://placehold.co/32x32.png',
        topics: curriculum.topics.length,
        lessons: totalLessons,
        popularity: metadata.popularity || 0,
        difficulty: metadata.difficulty || 'Beginner',
        progress: metadata.progress || 0,
        description: metadata.description || `A programming language.`
    };
});
}}),
"[project]/src/services/languageService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0001cd73d14dadd1754434a98d572a0a4ca7da57a9":"getLanguagesSummary","00035e06d9703fd744301cc22bf4def569234beda9":"getSubmissions","006acf43ded3b8954aed227081a982fd20808cd23b":"getChallenges","4026537a89566521df14d67b2f6da7d88bf9bf9dcc":"addChallenge","4028abf24394488171fd54b5a64584a4baf0e34539":"deleteLanguageCurriculum","4036d0dad3d7e05b0d23575b891896c3f202d1a45f":"deleteChallenge","4074b1f68ea5d629f32da905e2e63aad7ee5297684":"getQuickQuestions","409e24a56fa86aa41a62f80b6c5f29591b55da155f":"getLanguageCurriculum","40b6e692516f133fa1219e0f830fc12102ee6d7e84":"deleteLanguageSummary","40c2bdf4266b2eb3ac7f500435141c83d6248251cc":"getChallengeById","40f26c7e086bd00e34f2502d82278fa373c6bb6bed":"addLanguageSummary","6011905a2da491a14dce79a04355ce35e1f8187740":"deleteTopic","6033bfb82fbe56de05f8d6fe432ecd469e142bfd95":"addLanguageCurriculum","6045cd0e10ce8e9e5b870f54ba21cc1780018ccdda":"updateChallenge","606aeb759bd933c9acdca5b27d7a74c5f4acbadcae":"addQuickQuestions","60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982":"addTopic","70006557e195a794f370043fd3ab7ada4218579165":"deleteLesson","7097593df51f27e4589519f06534c2942706cb9f20":"addLesson","709830fb52fc836e28e0f36143f84346b597891860":"updateTopic","78923aef60212cc627c33cd7da472e23c750883496":"updateLesson"},"",""] */ __turbopack_context__.s({
    "addChallenge": (()=>addChallenge),
    "addLanguageCurriculum": (()=>addLanguageCurriculum),
    "addLanguageSummary": (()=>addLanguageSummary),
    "addLesson": (()=>addLesson),
    "addQuickQuestions": (()=>addQuickQuestions),
    "addTopic": (()=>addTopic),
    "deleteChallenge": (()=>deleteChallenge),
    "deleteLanguageCurriculum": (()=>deleteLanguageCurriculum),
    "deleteLanguageSummary": (()=>deleteLanguageSummary),
    "deleteLesson": (()=>deleteLesson),
    "deleteTopic": (()=>deleteTopic),
    "getChallengeById": (()=>getChallengeById),
    "getChallenges": (()=>getChallenges),
    "getLanguageCurriculum": (()=>getLanguageCurriculum),
    "getLanguagesSummary": (()=>getLanguagesSummary),
    "getQuickQuestions": (()=>getQuickQuestions),
    "getSubmissions": (()=>getSubmissions),
    "updateChallenge": (()=>updateChallenge),
    "updateLesson": (()=>updateLesson),
    "updateTopic": (()=>updateTopic)
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
async function getQuickQuestions(langId) {
    return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quickQuestionsData"][langId]);
}
async function addQuickQuestions(langId, questions) {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["quickQuestionsData"][langId] = questions;
    return Promise.resolve();
}
async function addTopic(langId, topic) {
    const curriculum = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId];
    if (curriculum) {
        const newTopic = {
            ...topic,
            id: `t-${langId}-${Date.now()}`,
            lessons: []
        };
        curriculum.topics.push(newTopic);
        const summary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].find((s)=>s.id === langId);
        if (summary) {
            summary.topics = curriculum.topics.length;
        }
        return Promise.resolve(newTopic);
    }
    return Promise.resolve(null);
}
async function updateTopic(langId, topicId, topicData) {
    const topic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId]?.topics.find((t)=>t.id === topicId);
    if (topic) {
        Object.assign(topic, topicData);
        return Promise.resolve(topic);
    }
    return Promise.resolve(null);
}
async function deleteTopic(langId, topicId) {
    const curriculum = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId];
    if (curriculum) {
        const topicIndex = curriculum.topics.findIndex((t)=>t.id === topicId);
        if (topicIndex > -1) {
            curriculum.topics.splice(topicIndex, 1);
            const summary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].find((s)=>s.id === langId);
            if (summary) {
                summary.topics = curriculum.topics.length;
            }
        }
    }
    return Promise.resolve();
}
async function addLesson(langId, topicId, lessonData) {
    const topic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId]?.topics.find((t)=>t.id === topicId);
    if (topic) {
        const newLesson = {
            ...lessonData,
            id: `l-${langId}-${topicId}-${Date.now()}`,
            attachments: []
        };
        topic.lessons.push(newLesson);
        const summary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].find((s)=>s.id === langId);
        if (summary) {
            summary.lessons = (summary.lessons || 0) + 1;
        }
        return Promise.resolve(newLesson);
    }
    return Promise.resolve(null);
}
async function updateLesson(langId, topicId, lessonId, lessonData) {
    const topic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId]?.topics.find((t)=>t.id === topicId);
    if (topic) {
        const lesson = topic.lessons.find((l)=>l.id === lessonId);
        if (lesson) {
            Object.assign(lesson, lessonData);
            return Promise.resolve(lesson);
        }
    }
    return Promise.resolve(null);
}
async function deleteLesson(langId, topicId, lessonId) {
    const topic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId]?.topics.find((t)=>t.id === topicId);
    if (topic) {
        const lessonIndex = topic.lessons.findIndex((l)=>l.id === lessonId);
        if (lessonIndex > -1) {
            topic.lessons.splice(lessonIndex, 1);
            const summary = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesSummaryData"].find((s)=>s.id === langId);
            if (summary) {
                summary.lessons = (summary.lessons || 0) - 1;
            }
        }
    }
    return Promise.resolve();
}
async function getChallenges() {
    return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"]);
}
async function getChallengeById(id) {
    return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].find((c)=>c.id === id));
}
async function addChallenge(challenge) {
    const newChallenge = {
        ...challenge,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].length > 0 ? Math.max(...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].map((c)=>c.id)) + 1 : 1
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].push(newChallenge);
    return Promise.resolve(newChallenge);
}
async function updateChallenge(id, challengeData) {
    const challenge = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].find((c)=>c.id === id);
    if (challenge) {
        Object.assign(challenge, challengeData);
        return Promise.resolve(challenge);
    }
    return Promise.resolve(null);
}
async function deleteChallenge(id) {
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].findIndex((c)=>c.id === id);
    if (index > -1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["challengesData"].splice(index, 1);
    }
    return Promise.resolve();
}
async function getSubmissions() {
    return Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submissionsData"]);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getLanguagesSummary,
    addLanguageSummary,
    deleteLanguageSummary,
    getLanguageCurriculum,
    addLanguageCurriculum,
    deleteLanguageCurriculum,
    getQuickQuestions,
    addQuickQuestions,
    addTopic,
    updateTopic,
    deleteTopic,
    addLesson,
    updateLesson,
    deleteLesson,
    getChallenges,
    getChallengeById,
    addChallenge,
    updateChallenge,
    deleteChallenge,
    getSubmissions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLanguagesSummary, "0001cd73d14dadd1754434a98d572a0a4ca7da57a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLanguageSummary, "40f26c7e086bd00e34f2502d82278fa373c6bb6bed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLanguageSummary, "40b6e692516f133fa1219e0f830fc12102ee6d7e84", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLanguageCurriculum, "409e24a56fa86aa41a62f80b6c5f29591b55da155f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLanguageCurriculum, "6033bfb82fbe56de05f8d6fe432ecd469e142bfd95", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLanguageCurriculum, "4028abf24394488171fd54b5a64584a4baf0e34539", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getQuickQuestions, "4074b1f68ea5d629f32da905e2e63aad7ee5297684", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addQuickQuestions, "606aeb759bd933c9acdca5b27d7a74c5f4acbadcae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addTopic, "60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTopic, "709830fb52fc836e28e0f36143f84346b597891860", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTopic, "6011905a2da491a14dce79a04355ce35e1f8187740", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLesson, "7097593df51f27e4589519f06534c2942706cb9f20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLesson, "78923aef60212cc627c33cd7da472e23c750883496", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteLesson, "70006557e195a794f370043fd3ab7ada4218579165", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getChallenges, "006acf43ded3b8954aed227081a982fd20808cd23b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getChallengeById, "40c2bdf4266b2eb3ac7f500435141c83d6248251cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addChallenge, "4026537a89566521df14d67b2f6da7d88bf9bf9dcc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateChallenge, "6045cd0e10ce8e9e5b870f54ba21cc1780018ccdda", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteChallenge, "4036d0dad3d7e05b0d23575b891896c3f202d1a45f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSubmissions, "00035e06d9703fd744301cc22bf4def569234beda9", null);
}}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}}),
"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/require-in-the-middle [external] (require-in-the-middle, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("require-in-the-middle", () => require("require-in-the-middle"));

module.exports = mod;
}}),
"[externals]/import-in-the-middle [external] (import-in-the-middle, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("import-in-the-middle", () => require("import-in-the-middle"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/http2 [external] (http2, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/express [external] (express, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("express", () => require("express"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[project]/src/ai/genkit.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ai": (()=>ai)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$genkit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/genkit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$googleai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@genkit-ai/googleai/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$googleai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@genkit-ai/googleai/lib/index.mjs [app-rsc] (ecmascript) <locals>");
;
;
const ai = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$genkit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["genkit"])({
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$genkit$2d$ai$2f$googleai$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["googleAI"])()
    ],
    model: 'googleai/gemini-2.0-flash'
});
}}),
"[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"409ab27ac407a98400bab86235173070f0f9437c42":"explainCode"},"",""] */ __turbopack_context__.s({
    "explainCode": (()=>explainCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A Genkit flow for explaining code snippets.
 *
 * - explainCode - A function that takes a code snippet and returns an explanation.
 * - ExplainCodeInput - The input type for the explainCode function.
 * - ExplainCodeOutput - The return type for the explainCode function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const ExplainCodeInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The code snippet to be explained.')
});
const ExplainCodeOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    explanation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('A detailed explanation of the code, formatted in Markdown.')
});
async function explainCode(input) {
    return explainCodeFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'explainCodePrompt',
    input: {
        schema: ExplainCodeInputSchema
    },
    output: {
        schema: ExplainCodeOutputSchema
    },
    prompt: `You are an expert programming tutor and code debugger.
Your primary task is to analyze the provided code snippet for errors.

**If you find an error:**
1.  **Identify the Bug:** Clearly state what the error is.
2.  **Explain the Cause:** Explain in simple terms why the error occurs.
3.  **Provide the Fix:** Show the corrected code snippet.
4.  **Explain the Fix:** Briefly explain why the corrected code works.

**If the code is correct and contains no errors:**
1.  **High-Level Summary:** Start with a one-sentence summary of what the code does.
2.  **Line-by-Line Explanation:** Break down the code into logical parts and explain each one.
3.  **Key Concepts:** Briefly explain any important programming concepts demonstrated.
4.  **Output:** Explain what the expected output of the code will be when it's run.

Format your entire response in simple Markdown. Use code blocks for code snippets.

Code to analyze:
\`\`\`
{{{code}}}
\`\`\`
`
});
const explainCodeFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'explainCodeFlow',
    inputSchema: ExplainCodeInputSchema,
    outputSchema: ExplainCodeOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    explainCode
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(explainCode, "409ab27ac407a98400bab86235173070f0f9437c42", null);
}}),
"[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)");
;
;
}}),
"[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$practice$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0001cd73d14dadd1754434a98d572a0a4ca7da57a9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguagesSummary"]),
    "409ab27ac407a98400bab86235173070f0f9437c42": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["explainCode"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$practice$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0001cd73d14dadd1754434a98d572a0a4ca7da57a9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$practice$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0001cd73d14dadd1754434a98d572a0a4ca7da57a9"]),
    "409ab27ac407a98400bab86235173070f0f9437c42": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$practice$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["409ab27ac407a98400bab86235173070f0f9437c42"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$practice$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$practice$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$explain$2d$code$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/practice/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/explain-code.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/practice/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/practice/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/practice/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/practice/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/practice/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/practice/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/practice/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/practice/page.tsx", "default");
}}),
"[project]/src/app/practice/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$practice$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/practice/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$practice$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/practice/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$practice$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/practice/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/practice/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__549c78d0._.js.map