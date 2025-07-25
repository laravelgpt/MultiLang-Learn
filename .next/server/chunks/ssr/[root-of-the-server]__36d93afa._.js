module.exports = {

"[project]/src/lib/mock-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "languagesCurriculumData": (()=>languagesCurriculumData),
    "languagesSummaryData": (()=>languagesSummaryData),
    "quickQuestionsData": (()=>quickQuestionsData)
});
let quickQuestionsData = {
    js: [
        "What is the difference between `let`, `const`, and `var`?",
        "Explain closures in JavaScript.",
        "Show an example of an async/await function."
    ],
    py: [
        "What are decorators in Python?",
        "Explain list comprehensions with an example.",
        "How does garbage collection work in Python?"
    ],
    go: [
        "What is a goroutine?",
        "Explain the difference between a slice and an array.",
        "How do channels work in Go?"
    ],
    java: [
        "What is the difference between an interface and an abstract class?",
        "Explain the Java Virtual Machine (JVM).",
        "Show an example of exception handling."
    ],
    csharp: [
        "What is the purpose of LINQ?",
        "Explain the difference between `struct` and `class`.",
        "Show an example of using `async` and `await` in C#."
    ],
    typescript: [
        "What are generics in TypeScript?",
        "Explain the difference between an `interface` and a `type`.",
        "What is a `never` type?"
    ],
    cpp: [
        "Explain pointers vs. references in C++.",
        "What is RAII (Resource Acquisition Is Initialization)?",
        "Show an example of a simple class with a constructor."
    ],
    rust: [
        "What is the borrow checker?",
        "Explain ownership in Rust.",
        "Show an example of using the `match` control flow operator."
    ]
};
const createCurriculum = (name, topicsList)=>{
    const langId = name.toLowerCase().replace(/#/g, 'sharp').replace(/\+/g, 'plus');
    return {
        name: name,
        topics: topicsList.map((topicTitle, i)=>({
                id: `t-${langId}-${i}`,
                title: topicTitle,
                lessons: [
                    {
                        id: `l-${langId}-${i}-1`,
                        title: `Introduction to ${topicTitle}`,
                        difficulty: 'Beginner',
                        attachments: [],
                        content: `Content for Introduction to ${topicTitle} is coming soon.`,
                        codeSnippet: `console.log("Welcome to ${topicTitle}!");`
                    },
                    {
                        id: `l-${langId}-${i}-2`,
                        title: `Core Concepts of ${topicTitle}`,
                        difficulty: 'Intermediate',
                        attachments: [],
                        content: `Content for Core Concepts of ${topicTitle} is coming soon.`
                    },
                    {
                        id: `l-${langId}-${i}-3`,
                        title: `Advanced ${topicTitle}`,
                        difficulty: 'Advanced',
                        attachments: [],
                        content: `Content for Advanced ${topicTitle} is coming soon.`
                    }
                ]
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
let languagesSummaryData = [
    {
        id: 'py',
        name: 'Python',
        icon: 'https://placehold.co/32x32.png',
        topics: 8,
        lessons: 24,
        popularity: 5210,
        difficulty: 'Beginner',
        progress: 80,
        description: 'Versatile language for data science and web.'
    },
    {
        id: 'js',
        name: 'JavaScript',
        icon: 'https://placehold.co/32x32.png',
        topics: 6,
        lessons: 18,
        popularity: 4890,
        difficulty: 'Beginner',
        progress: 65,
        description: 'Dynamic language for web development.'
    },
    {
        id: 'java',
        name: 'Java',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 3120,
        difficulty: 'Intermediate',
        progress: 40,
        description: 'Robust language for enterprise applications.'
    },
    {
        id: 'cpp',
        name: 'C++',
        icon: 'https://placehold.co/32x32.png',
        topics: 4,
        lessons: 12,
        popularity: 2540,
        difficulty: 'Advanced',
        progress: 25,
        description: 'High-performance language for systems programming.'
    },
    {
        id: 'go',
        name: 'Go',
        icon: 'https://placehold.co/32x32.png',
        topics: 4,
        lessons: 12,
        popularity: 1980,
        difficulty: 'Intermediate',
        progress: 35,
        description: 'Modern language for concurrent programming.'
    },
    {
        id: 'csharp',
        name: 'C#',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 3500,
        difficulty: 'Intermediate',
        progress: 55,
        description: 'Flexible language for Windows and web apps.'
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 4200,
        difficulty: 'Intermediate',
        progress: 70,
        description: 'JavaScript that scales.'
    },
    {
        id: 'swift',
        name: 'Swift',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 2800,
        difficulty: 'Intermediate',
        progress: 30,
        description: 'Modern, safe language for Apple platforms.'
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 2600,
        difficulty: 'Intermediate',
        progress: 45,
        description: 'The official language for Android development.'
    },
    {
        id: 'php',
        name: 'PHP',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 2300,
        difficulty: 'Beginner',
        progress: 10,
        description: 'Popular language for server-side web development.'
    },
    {
        id: 'ruby',
        name: 'Ruby',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 1800,
        difficulty: 'Intermediate',
        progress: 20,
        description: 'A dynamic, open source programming language.'
    },
    {
        id: 'rust',
        name: 'Rust',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 1530,
        difficulty: 'Advanced',
        progress: 15,
        description: 'A language empowering everyone to build reliable software.'
    },
    {
        id: 'dart',
        name: 'Dart',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 1200,
        difficulty: 'Intermediate',
        progress: 5,
        description: 'Client-optimized language for fast apps on any platform.'
    },
    {
        id: 'scala',
        name: 'Scala',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 900,
        difficulty: 'Advanced',
        progress: 2,
        description: 'A hybrid functional/object-oriented language.'
    },
    {
        id: 'perl',
        name: 'Perl',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 400,
        difficulty: 'Advanced',
        progress: 0,
        description: 'A highly capable, feature-rich programming language.'
    },
    {
        id: 'haskell',
        name: 'Haskell',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 750,
        difficulty: 'Advanced',
        progress: 0,
        description: 'An advanced, purely functional programming language.'
    },
    {
        id: 'lua',
        name: 'Lua',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 1100,
        difficulty: 'Beginner',
        progress: 0,
        description: 'A powerful, efficient, lightweight, embeddable scripting language.'
    },
    {
        id: 'r',
        name: 'R',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 1400,
        difficulty: 'Intermediate',
        progress: 0,
        description: 'A language and environment for statistical computing.'
    },
    {
        id: 'sql',
        name: 'SQL',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 4500,
        difficulty: 'Beginner',
        progress: 0,
        description: 'A standard language for storing and retrieving data.'
    },
    {
        id: 'bash',
        name: 'Bash',
        icon: 'https://placehold.co/32x32.png',
        topics: 5,
        lessons: 15,
        popularity: 2100,
        difficulty: 'Intermediate',
        progress: 0,
        description: 'The GNU Project\'s shell—the Bourne Again SHell.'
    }
];
}}),
"[project]/src/services/languageService.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"0001cd73d14dadd1754434a98d572a0a4ca7da57a9":"getLanguagesSummary","4028abf24394488171fd54b5a64584a4baf0e34539":"deleteLanguageCurriculum","4074b1f68ea5d629f32da905e2e63aad7ee5297684":"getQuickQuestions","409e24a56fa86aa41a62f80b6c5f29591b55da155f":"getLanguageCurriculum","40b6e692516f133fa1219e0f830fc12102ee6d7e84":"deleteLanguageSummary","40f26c7e086bd00e34f2502d82278fa373c6bb6bed":"addLanguageSummary","6033bfb82fbe56de05f8d6fe432ecd469e142bfd95":"addLanguageCurriculum","606aeb759bd933c9acdca5b27d7a74c5f4acbadcae":"addQuickQuestions","60b63cb4c87662fc9ae6a6ec11c25eb6cbf7ecb982":"addTopic","7097593df51f27e4589519f06534c2942706cb9f20":"addLesson"},"",""] */ __turbopack_context__.s({
    "addLanguageCurriculum": (()=>addLanguageCurriculum),
    "addLanguageSummary": (()=>addLanguageSummary),
    "addLesson": (()=>addLesson),
    "addQuickQuestions": (()=>addQuickQuestions),
    "addTopic": (()=>addTopic),
    "deleteLanguageCurriculum": (()=>deleteLanguageCurriculum),
    "deleteLanguageSummary": (()=>deleteLanguageSummary),
    "getLanguageCurriculum": (()=>getLanguageCurriculum),
    "getLanguagesSummary": (()=>getLanguagesSummary),
    "getQuickQuestions": (()=>getQuickQuestions)
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
            id: `t-${Date.now()}`,
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
async function addLesson(langId, topicId, lesson) {
    const topic = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languagesCurriculumData"][langId]?.topics.find((t)=>t.id === topicId);
    if (topic) {
        const newLesson = {
            ...lesson,
            id: `l-${Date.now()}`
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
    addLesson
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addLesson, "7097593df51f27e4589519f06534c2942706cb9f20", null);
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
"[project]/src/lib/language-map.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "languageNameMap": (()=>languageNameMap)
});
const languageNameMap = {
    all: 'General Programming',
    js: 'JavaScript',
    py: 'Python',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    cpp: 'C++',
    pascal: 'Pascal',
    csharp: 'C#',
    typescript: 'TypeScript',
    swift: 'Swift',
    kotlin: 'Kotlin',
    php: 'PHP',
    ruby: 'Ruby',
    sql: 'SQL',
    dart: 'Dart',
    r: 'R',
    elixir: 'Elixir',
    haskell: 'Haskell',
    lua: 'Lua',
    perl: 'Perl',
    scala: 'Scala',
    bash: 'Bash'
};
}}),
"[project]/src/ai/tools/curriculum-tool.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f24cfe818e87604ae834859d25d3cfb47dc5778e7":"getCurriculumForLanguage"},"",""] */ __turbopack_context__.s({
    "getCurriculumForLanguage": (()=>getCurriculumForLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A Genkit tool to fetch the curriculum for a given language.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2d$map$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/language-map.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const getCurriculumForLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineTool({
    name: 'getCurriculumForLanguage',
    description: 'Gets the available curriculum (a list of topic titles) for a given programming language. Use this tool to answer questions about what to learn, what topics are available, or to suggest a learning path for a specific language.',
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The programming language to get the curriculum for. This should be the full name, e.g., "JavaScript", "Python".')
    }),
    outputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        topics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).describe('A list of topic titles available for the language. Returns an empty array if the language or curriculum is not found.')
    })
}, async ({ language })=>{
    const langId = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2d$map$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageNameMap"]).find((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$language$2d$map$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageNameMap"][key].toLowerCase() === language.toLowerCase());
    if (!langId) {
        return {
            topics: []
        };
    }
    const curriculum = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguageCurriculum"])(langId);
    if (!curriculum) {
        return {
            topics: []
        };
    }
    return {
        topics: curriculum.topics.map((t)=>t.title)
    };
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCurriculumForLanguage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurriculumForLanguage, "7f24cfe818e87604ae834859d25d3cfb47dc5778e7", null);
}}),
"[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405c7426e6a61756380e156da312b030969c3a3e80":"chatbot"},"",""] */ __turbopack_context__.s({
    "chatbot": (()=>chatbot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
/**
 * @fileOverview A Genkit flow for a contextual chatbot.
 *
 * - chatbot - A function that takes a user query and language context.
 * - ChatbotInput - The input type for the chatbot function.
 * - ChatbotOutput - The return type for the chatbot function.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/genkit/lib/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$tools$2f$curriculum$2d$tool$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/tools/curriculum-tool.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const ChatbotInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe("The user's question."),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe('The programming language context for the question.')
});
const ChatbotOutputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$genkit$2f$lib$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().describe("The AI tutor's response, formatted in Markdown.")
});
async function chatbot(input) {
    return chatbotFlow(input);
}
const prompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'chatbotPrompt',
    input: {
        schema: ChatbotInputSchema
    },
    output: {
        schema: ChatbotOutputSchema
    },
    tools: [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$tools$2f$curriculum$2d$tool$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurriculumForLanguage"]
    ],
    prompt: `You are a friendly, encouraging, and expert programming tutor.
Your current area of focus is {{language}}.

If the user asks what they should learn, what topics are available, or for a learning path, use the getCurriculumForLanguage tool to see the available curriculum for the current language context and suggest topics based on that.

A user has asked the following question:
"{{{query}}}"

Please provide a clear, helpful, and concise answer.
If the question is about a different topic, gently guide them back to {{language}} or answer generally if appropriate.
Format your response in simple Markdown. Use backticks for code elements and code blocks for examples.`
});
const chatbotFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema
}, async (input)=>{
    const { output } = await prompt(input);
    return output;
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    chatbot
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(chatbot, "405c7426e6a61756380e156da312b030969c3a3e80", null);
}}),
"[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)");
;
;
;
}}),
"[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0001cd73d14dadd1754434a98d572a0a4ca7da57a9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguagesSummary"]),
    "405c7426e6a61756380e156da312b030969c3a3e80": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chatbot"]),
    "4074b1f68ea5d629f32da905e2e63aad7ee5297684": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQuickQuestions"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/languageService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/languageService.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "0001cd73d14dadd1754434a98d572a0a4ca7da57a9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0001cd73d14dadd1754434a98d572a0a4ca7da57a9"]),
    "405c7426e6a61756380e156da312b030969c3a3e80": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["405c7426e6a61756380e156da312b030969c3a3e80"]),
    "4074b1f68ea5d629f32da905e2e63aad7ee5297684": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4074b1f68ea5d629f32da905e2e63aad7ee5297684"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$ai$2d$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$languageService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$chatbot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/ai-assistant/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/languageService.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/ai/flows/chatbot.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/ai-assistant/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ai-assistant/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/ai-assistant/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/ai-assistant/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/ai-assistant/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/ai-assistant/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/ai-assistant/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/ai-assistant/page.tsx", "default");
}}),
"[project]/src/app/ai-assistant/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ai$2d$assistant$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/ai-assistant/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ai$2d$assistant$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/ai-assistant/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$ai$2d$assistant$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/ai-assistant/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ai-assistant/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__36d93afa._.js.map