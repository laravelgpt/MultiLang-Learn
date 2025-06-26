
export type Attachment = { type: 'pdf' | 'youtube' | 'code' | 'link'; url: string };
export type Lesson = { id: string; title: string; difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; attachments: Attachment[]; content?: string; codeSnippet?: string; };
export type Topic = { id: string; title: string; lessons: Lesson[] };
export type LanguageCurriculum = { name: string; topics: Topic[] };
export type LanguageSummary = { 
    id: string; 
    name: string; 
    icon: string; 
    topics: number; 
    lessons: number; 
    popularity: number; 
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced'; 
    description: string;
    progress: number;
}

export let quickQuestionsData: Record<string, string[]> = {
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

const generateLessonsForTopic = (langId: string, topicTitle: string, topicIndex: number): Lesson[] => {
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
        `Project: Applying ${topicTitle}`,
    ];

    return lessonTitles.map((title, lessonIndex) => {
        const difficulties: Lesson['difficulty'][] = ['Beginner', 'Intermediate', 'Advanced'];
        const difficulty = difficulties[Math.floor(lessonIndex / 3.4)]; // Distribute difficulty
        return {
            id: `l-${langId}-${topicIndex}-${lessonIndex}`,
            title: title,
            difficulty: difficulty,
            attachments: [],
            content: `Content for ${title} is coming soon.`,
            codeSnippet: `// Code for ${title}\nconsole.log("Hello, ${topicTitle}!");`
        };
    });
};

const createCurriculum = (name: string, topicsList: string[]): LanguageCurriculum => {
    const langId = name.toLowerCase().replace(/#/g, 'sharp').replace(/\+/g, 'plus').replace(/\s/g, '');
    return {
        name: name,
        topics: topicsList.map((topicTitle, i) => ({
            id: `t-${langId}-${i}`,
            title: topicTitle,
            lessons: generateLessonsForTopic(langId, topicTitle, i)
        }))
    }
}

export const languagesCurriculumData: Record<string, LanguageCurriculum> = {
  py: createCurriculum('Python', ['Introduction', 'Basics', 'Control Flow', 'Functions', 'Data Structures', 'OOP', 'File I/O', 'Exception Handling']),
  js: createCurriculum('JavaScript', ['Introduction', 'Fundamentals', 'Functions', 'DOM Manipulation', 'Async JS', 'ES6+ Features']),
  java: createCurriculum('Java', ['Introduction', 'Core Concepts', 'OOP', 'Collections Framework', 'Exception Handling']),
  cpp: createCurriculum('C++', ['Basics', 'Variables & Types', 'OOP in C++', 'Standard Template Library (STL)']),
  go: createCurriculum('Go', ['Getting Started', 'Fundamentals', 'Concurrency', 'Packages & Testing']),
  csharp: createCurriculum('C#', ['Introduction to .NET', 'Variables & Data Types', 'Control Flow', 'Classes & Objects (OOP)', 'LINQ']),
  typescript: createCurriculum('TypeScript', ['Intro to TypeScript', 'Basic Types', 'Interfaces & Classes', 'Generics', 'Modules']),
  swift: createCurriculum('Swift', ['Swift Basics', 'Control Flow', 'Data Structures', 'Classes & Structs', 'Protocol-Oriented Programming']),
  kotlin: createCurriculum('Kotlin', ['Kotlin Basics', 'Control Flow', 'Functions & Lambdas', 'Kotlin for Android', 'Coroutines']),
  php: createCurriculum('PHP', ['PHP Syntax', 'Variables & Types', 'Control Structures', 'Functions', 'Working with Forms']),
  ruby: createCurriculum('Ruby', ['Ruby Basics', 'Control Structures', 'Methods & Blocks', 'Classes & Objects', 'Ruby on Rails Intro']),
  rust: createCurriculum('Rust', ['Getting Started', 'Common Concepts', 'Ownership', 'Structs & Enums', 'Error Handling']),
  dart: createCurriculum('Dart', ['Dart Fundamentals', 'Control Flow', 'Functions', 'Classes', 'Asynchronous Dart']),
  scala: createCurriculum('Scala', ['Scala Basics', 'Functional Programming', 'Object-Oriented Scala', 'Case Classes & Pattern Matching', 'Collections']),
  perl: createCurriculum('Perl', ['Perl Syntax', 'Variables', 'Control Structures', 'Subroutines', 'Regular Expressions']),
  haskell: createCurriculum('Haskell', ['Basic Syntax', 'Types and Typeclasses', 'Functions', 'Monads', 'Input/Output']),
  lua: createCurriculum('Lua', ['Basic Concepts', 'Control Structures', 'Functions', 'Tables', 'Metatables']),
  r: createCurriculum('R', ['R Basics', 'Data Structures', 'Data Import/Export', 'Control Structures', 'Data Visualization with ggplot2']),
  sql: createCurriculum('SQL', ['Basic Queries', 'Joining Tables', 'Aggregation', 'Subqueries', 'Data Modification']),
  bash: createCurriculum('Bash', ['Shell Basics', 'Scripting Fundamentals', 'Variables & Operators', 'Control Flow', 'Functions & Command-Line Arguments']),
};

const summaryMetadata: Record<string, Partial<Omit<LanguageSummary, 'id' | 'name' | 'topics' | 'lessons' | 'icon'>>> = {
  py: { popularity: 5210, difficulty: 'Beginner', progress: 80, description: 'Versatile language for data science and web.' },
  js: { popularity: 4890, difficulty: 'Beginner', progress: 65, description: 'Dynamic language for web development.' },
  java: { popularity: 3120, difficulty: 'Intermediate', progress: 40, description: 'Robust language for enterprise applications.' },
  cpp: { popularity: 2540, difficulty: 'Advanced', progress: 25, description: 'High-performance language for systems programming.' },
  go: { popularity: 1980, difficulty: 'Intermediate', progress: 35, description: 'Modern language for concurrent programming.' },
  csharp: { popularity: 3500, difficulty: 'Intermediate', progress: 55, description: 'Flexible language for Windows and web apps.' },
  typescript: { popularity: 4200, difficulty: 'Intermediate', progress: 70, description: 'JavaScript that scales.' },
  swift: { popularity: 2800, difficulty: 'Intermediate', progress: 30, description: 'Modern, safe language for Apple platforms.' },
  kotlin: { popularity: 2600, difficulty: 'Intermediate', progress: 45, description: 'The official language for Android development.' },
  php: { popularity: 2300, difficulty: 'Beginner', progress: 10, description: 'Popular language for server-side web development.' },
  ruby: { popularity: 1800, difficulty: 'Intermediate', progress: 20, description: 'A dynamic, open source programming language.' },
  rust: { popularity: 1530, difficulty: 'Advanced', progress: 15, description: 'A language empowering everyone to build reliable software.' },
  dart: { popularity: 1200, difficulty: 'Intermediate', progress: 5, description: 'Client-optimized language for fast apps on any platform.' },
  scala: { popularity: 900, difficulty: 'Advanced', progress: 2, description: 'A hybrid functional/object-oriented language.' },
  perl: { popularity: 400, difficulty: 'Advanced', progress: 0, description: 'A highly capable, feature-rich programming language.' },
  haskell: { popularity: 750, difficulty: 'Advanced', progress: 0, description: 'An advanced, purely functional programming language.' },
  lua: { popularity: 1100, difficulty: 'Beginner', progress: 0, description: 'A powerful, efficient, lightweight, embeddable scripting language.' },
  r: { popularity: 1400, difficulty: 'Intermediate', progress: 0, description: 'A language and environment for statistical computing.' },
  sql: { popularity: 4500, difficulty: 'Beginner', progress: 0, description: 'A standard language for storing and retrieving data.' },
  bash: { popularity: 2100, difficulty: 'Intermediate', progress: 0, description: 'The GNU Project\'s shell—the Bourne Again SHell.' },
};

export let languagesSummaryData: LanguageSummary[] = Object.keys(languagesCurriculumData).map(langId => {
    const curriculum = languagesCurriculumData[langId];
    const metadata = summaryMetadata[langId] || {};
    const totalLessons = curriculum.topics.reduce((sum, topic) => sum + topic.lessons.length, 0);

    return {
        id: langId,
        name: curriculum.name,
        icon: 'https://placehold.co/32x32.png',
        topics: curriculum.topics.length,
        lessons: totalLessons,
        popularity: metadata.popularity || 0,
        difficulty: metadata.difficulty || 'Beginner',
        progress: metadata.progress || 0,
        description: metadata.description || `A programming language.`,
    };
});
