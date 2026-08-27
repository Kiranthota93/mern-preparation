const TIERS = [
  { stack: "react", n: 1, name: "Core React mental model", tag: "red", items: [
    "What React is and why it exists","Declarative UI vs imperative UI","Component-based architecture",
    "Functional components","JSX","JSX expressions","Fragments","Props","children","One-way data flow",
    "State","Props vs state","State immutability","Derived state","Conditional rendering","Rendering lists",
    "Keys","Component composition" ] },
  { stack: "react", n: 2, name: "Rendering & reconciliation", tag: "red", items: [
    "What causes a component to render","Parent vs child re-rendering","Render phase","Commit phase",
    "Reconciliation","Virtual DOM","Element identity","Component identity","State preservation","State reset",
    "Keys and state preservation","Referential equality","Shallow comparison","Batching","State snapshots",
    "Stale state","Strict Mode","Development vs production rendering behavior" ] },
  { stack: "react", n: 3, name: "Hooks", tag: "red", items: [
    "Rules of Hooks","useState","Functional state updates","useEffect","Effect dependency array",
    "Effect cleanup","Effect lifecycle","Stale closures","Effect infinite loops","Effects vs event handlers",
    "When you should not use useEffect","useRef","DOM refs","Mutable refs","useRef vs state","useMemo",
    "useCallback","React.memo","Memoization","Memoization trade-offs","Custom hooks","Custom hook composition" ] },
  { stack: "react", n: 4, name: "State architecture", tag: "red", items: [
    "Lifting state up","State colocation","State ownership","Local state vs shared state","Prop drilling",
    "Context API","Context Provider","Context re-render behavior","Context limitations","useReducer",
    "Reducer pattern","useState vs useReducer","Derived state vs source state","State normalization",
    "Client state vs server state","Global state architecture" ] },
  { stack: "react", n: 5, name: "Forms & user interaction", tag: "red", items: [
    "Controlled components","Uncontrolled components","Controlled vs uncontrolled trade-offs","Form state",
    "Input handling","Validation","Dynamic forms","Form submission","Resetting forms","File uploads",
    "Large-form performance" ] },
  { stack: "react", n: 6, name: "API & async React", tag: "red", items: [
    "API integration","Fetch/Axios patterns","Loading states","Error states","Empty states",
    "Async state management","Request cancellation","Race conditions","Stale API responses","Debouncing",
    "Throttling","Pagination","Infinite scrolling","Optimistic updates","Retry handling","API caching",
    "API abstraction/service layer","Authentication-aware API calls" ] },
  { stack: "react", n: 7, name: "Component design & reusability", tag: "red", items: [
    "Component composition","Reusable components","Component boundaries","Single-responsibility components",
    "Container vs presentational thinking","Compound components","Render props","Component configuration",
    "Reusable custom hooks","Designing component APIs","Avoiding giant components","Avoiding over-abstraction",
    "Design-system integration" ] },
  { stack: "react", n: 8, name: "Performance", tag: "red", items: [
    "Why unnecessary renders happen","React.memo","useMemo","useCallback","Referential equality",
    "Expensive calculations","Large-list performance","List virtualization","Pagination vs virtualization",
    "Debouncing","Code splitting","React.lazy","Suspense for lazy loading","Bundle size","Profiling",
    "React DevTools Profiler","Performance bottleneck identification","Avoiding unnecessary effects" ] },
  { stack: "react", n: 9, name: "Routing", tag: "amber", items: [
    "React Router fundamentals","Routes","Nested routes","Route parameters","Query parameters","Navigation",
    "Programmatic navigation","Protected routes","Route-based authorization","Lazy-loaded routes",
    "Route-level error handling" ] },
  { stack: "react", n: 10, name: "Authentication & security", tag: "amber", items: [
    "Authentication vs authorization","Token-based authentication","Access tokens","Refresh tokens",
    "Cookie-based authentication","HttpOnly cookies","Protected routes","Role-based UI authorization",
    "Token expiration","Logout flow","XSS considerations","CSRF considerations",
    "CORS from the frontend perspective" ] },
  { stack: "react", n: 11, name: "Error handling & reliability", tag: "red", items: [
    "Error boundaries","Rendering errors vs async errors","Error fallback UI","Loading/error/empty states",
    "API failure handling","Retry behavior","Network failure handling","Unexpected data handling",
    "Graceful degradation" ] },
  { stack: "react", n: 12, name: "Modern React", tag: "amber", items: [
    "Concurrent rendering","useTransition","useDeferredValue","Transitions","Suspense","Streaming concepts",
    "Server Components conceptually","Server-side rendering","Client-side rendering","Hydration",
    "SSR vs CSR trade-offs" ] },
  { stack: "react", n: 13, name: "React internals", tag: "yellow", items: [
    "Fiber","Fiber tree","Scheduling","Reconciliation internals","Render work","Commit work",
    "Priority of rendering work","Why rendering can be interruptible" ] },
  { stack: "react", n: 14, name: "Debugging", tag: "red", items: [
    "Debugging unnecessary re-renders","Debugging infinite useEffect loops","Debugging stale closures",
    "Debugging stale state","Debugging incorrect keys","Debugging state-reset problems",
    "Debugging race conditions","Debugging memory leaks","Debugging slow components",
    "Debugging API synchronization","React DevTools","Profiler-based debugging" ] },
  { stack: "react", n: 15, name: "Large application architecture", tag: "red", items: [
    "Feature-based React architecture","Folder/module organization","Component hierarchy","State boundaries",
    "API boundaries","Shared utilities","Shared hooks","Shared UI/design systems","Frontend service layer",
    "Error handling architecture","Authentication architecture","Permission architecture",
    "Configuration management","Environment-specific configuration","Microfrontend concepts",
    "Module Federation concepts","Frontend performance architecture" ] },
  { stack: "react", n: 16, name: "Testing", tag: "amber", items: [
    "Unit testing React components","Component testing","Integration testing","User interaction testing",
    "React Testing Library concepts","Mocking API calls","Testing hooks","Testing asynchronous UI",
    "Testing forms","Testing error states" ] },

  { stack: "reactnative", n: 1, name: "React Native fundamentals", tag: "amber", items: [
    "What React Native is","React Native vs React DOM","React Native vs Flutter/native",
    "Native components vs web components","Bridge architecture — conceptual",
    "New architecture — Fabric & TurboModules (conceptual)","Metro bundler","Expo vs bare workflow",
    "Platform-specific code","Platform module","Project structure" ] },
  { stack: "reactnative", n: 2, name: "Core components & styling", tag: "amber", items: [
    "View","Text","Image","ScrollView","FlatList","SectionList","TextInput","TouchableOpacity/Pressable",
    "SafeAreaView","StyleSheet","Flexbox in React Native","Responsive layout","Dimensions API",
    "Platform-specific styling" ] },
  { stack: "reactnative", n: 3, name: "Navigation", tag: "amber", items: [
    "React Navigation fundamentals","Stack navigator","Tab navigator","Drawer navigator",
    "Nested navigators","Passing params between screens","Deep linking","Navigation state",
    "Screen lifecycle" ] },
  { stack: "reactnative", n: 4, name: "State & data", tag: "amber", items: [
    "Local component state in RN","Global state management","Context API in RN",
    "AsyncStorage","Secure storage concepts","Offline-first data patterns",
    "Syncing local and remote state" ] },
  { stack: "reactnative", n: 5, name: "Networking & APIs", tag: "amber", items: [
    "fetch in React Native","Axios in React Native","Handling loading/error states",
    "Authentication token storage","Push notifications — conceptual","WebSockets in React Native",
    "Background tasks — conceptual" ] },
  { stack: "reactnative", n: 6, name: "Native device features", tag: "yellow", items: [
    "Permissions","Camera access","Location services","Device sensors — conceptual",
    "Biometric authentication — conceptual","Native modules — conceptual","Linking native libraries" ] },
  { stack: "reactnative", n: 7, name: "Performance & debugging", tag: "amber", items: [
    "Re-render performance in lists","FlatList optimization","Image optimization",
    "Avoiding unnecessary re-renders","React DevTools for React Native","Flipper — conceptual",
    "Native crash debugging — conceptual","Memory considerations on mobile" ] },
  { stack: "reactnative", n: 8, name: "Build, release & publishing", tag: "yellow", items: [
    "Debug vs release builds","Building for Android","Building for iOS — conceptual",
    "App signing — conceptual","Over-the-air updates — conceptual","App Store / Play Store submission",
    "Environment configuration for mobile builds","CI/CD for mobile apps — conceptual" ] },

  { stack: "node", n: 1, name: "Node.js fundamentals", tag: "red", items: [
    "What Node.js is","Node.js runtime architecture","V8 engine","JavaScript runtime vs Node.js runtime",
    "Node.js process","process object","Environment variables","Modules","CommonJS","ES Modules",
    "require vs import","module.exports vs export","package.json","package-lock.json","npm",
    "Global vs local packages","node_modules","Semantic versioning","npm scripts",
    "Dependency vs devDependency" ] },
  { stack: "node", n: 2, name: "Event loop & async Node.js", tag: "red", items: [
    "Event loop","Call stack","Callback queue","Microtask queue","Macrotasks","process.nextTick()",
    "setImmediate()","setTimeout()","Promises","async/await","Promise chaining","Promise error handling",
    "Callback-based APIs","Synchronous vs asynchronous APIs","Non-blocking I/O",
    "Single-threaded JavaScript execution","libuv","Thread pool","Event-driven architecture",
    "Concurrency vs parallelism" ] },
  { stack: "node", n: 3, name: "Core Node APIs", tag: "amber", items: [
    "fs","path","os","url","crypto","events","util","stream","buffer","child_process","worker_threads",
    "http","https","readable streams","writable streams","transform streams","Stream backpressure",
    "Buffers","EventEmitter","Custom events" ] },
  { stack: "node", n: 4, name: "HTTP & backend fundamentals", tag: "red", items: [
    "HTTP request/response lifecycle","HTTP methods","HTTP status codes","Headers","Request body",
    "Query parameters","Path parameters","Content types","JSON","Cookies","CORS","HTTPS","Keep-alive",
    "Stateless APIs","REST principles","Idempotency","API versioning","Pagination","Filtering","Sorting" ] },
  { stack: "node", n: 7, name: "Error handling & reliability", tag: "red", items: [
    "try/catch","Promise rejection handling","Operational vs programming errors",
    "Centralized error handling","Custom error classes","Error propagation","uncaughtException",
    "unhandledRejection","Graceful shutdown","Process signals","Health checks","Readiness checks",
    "Timeouts","Retries","Circuit-breaker concept","Fault isolation","Structured logging" ] },
  { stack: "node", n: 8, name: "Database integration", tag: "amber", items: [
    "MongoDB connection management","Connection pooling","Mongoose architecture","Models","Schemas",
    "Validation","Middleware/hooks","Query execution","Transactions","Sessions","Bulk operations",
    "bulkWrite","updateOne","$inc","upsert","Aggregation","Query performance",
    "Database error handling" ] },
  { stack: "node", n: 9, name: "Authentication & security", tag: "red", items: [
    "Authentication","Authorization","JWT","Access tokens","Refresh tokens","Cookies","HttpOnly cookies",
    "Password hashing","bcrypt/Argon2 concepts","CORS","CSRF","XSS","Input sanitization",
    "Input validation","Rate limiting","Brute-force protection","Secrets management","Secure headers",
    "Dependency vulnerabilities" ] },
  { stack: "node", n: 10, name: "Performance", tag: "amber", items: [
    "Blocking the event loop","CPU-heavy work","Memory usage","Memory leaks","Garbage collection concept",
    "Efficient async code","Streams","Backpressure","Caching","Redis concepts","Response compression",
    "Pagination","Database optimization","Connection pooling","Load balancing","Horizontal scaling" ] },
  { stack: "node", n: 11, name: "Scaling & architecture", tag: "amber", items: [
    "Stateless services","Horizontal scaling","Process management","Clustering concept","Worker threads",
    "Background jobs","Queues","Event-driven architecture","Microservices",
    "Service-to-service communication","API Gateway","Reverse proxy","Load balancer",
    "Distributed logging","Distributed tracing concept","Configuration management",
    "Service discovery concept" ] },
  { stack: "node", n: 12, name: "Testing", tag: "amber", items: [
    "Unit testing","Integration testing","API testing","Mocking","Stubbing","Test isolation",
    "Testing async code","Testing middleware","Testing controllers/services","Test coverage",
    "Jest/Vitest concepts","Supertest concepts" ] },
  { stack: "node", n: 13, name: "Debugging & production problems", tag: "red", items: [
    "Debugging async errors","Debugging memory leaks","Debugging high CPU","Debugging slow APIs",
    "Debugging event-loop blocking","Debugging database bottlenecks","Debugging connection exhaustion",
    "Debugging unhandled promises","Debugging production-only issues","Node inspector",
    "Logging and tracing" ] },
  { stack: "node", n: 14, name: "Advanced Node.js", tag: "yellow", items: [
    "V8 garbage collection","Event-loop phases","libuv internals","Thread-pool behavior",
    "Worker threads vs child processes","Cluster vs worker threads","Streams internals",
    "Backpressure internals","AsyncLocalStorage concept","Node performance profiling" ] },

  { stack: "express", n: 1, name: "Express.js", tag: "red", items: [
    "Express application structure","Routing","Route parameters","Query parameters","Middleware",
    "Middleware execution order","Built-in middleware","Custom middleware","Authentication middleware",
    "Authorization middleware","Validation middleware","Error-handling middleware","Async route handlers",
    "Request lifecycle","req","res","next","Router","Centralized error handling",
    "Express project architecture" ] },
  { stack: "express", n: 2, name: "REST API design", tag: "red", items: [
    "Controller layer","Service layer","Repository/data-access layer","Separation of concerns",
    "DTO concepts","Input validation","Error response design","HTTP status design","API consistency",
    "API versioning","Pagination architecture","Filtering architecture","Sorting architecture",
    "Search APIs","File upload APIs","Bulk APIs","Idempotent APIs","Rate limiting","Request logging",
    "API documentation" ] },

  { stack: "mongo", n: 1, name: "MongoDB fundamentals", tag: "red", items: [
    "MongoDB architecture","Database","Collection","Document","BSON","ObjectId",
    "MongoDB vs relational databases","Flexible schema","Embedded documents","References",
    "CRUD operations","insertOne","insertMany","find","findOne","updateOne","updateMany",
    "deleteOne","deleteMany","Projection" ] },
  { stack: "mongo", n: 2, name: "Querying", tag: "red", items: [
    "Query operators","Comparison operators","Logical operators","$in","$nin","$exists","$regex",
    "Array queries","Embedded-document queries","Dot notation","Projection","Sorting","Limiting",
    "Skipping","Pagination","Cursor concepts","Query composition","Update operators",
    "Atomic updates","Upserts" ] },
  { stack: "mongo", n: 3, name: "Data modeling", tag: "red", items: [
    "Embedding vs referencing","One-to-one modeling","One-to-many modeling","Many-to-many modeling",
    "Denormalization","Duplication trade-offs","Document growth","Document size considerations",
    "Read-heavy modeling","Write-heavy modeling","Access-pattern-driven schema design","Cardinality",
    "Bucketing pattern","Extended reference pattern","Attribute pattern","Computed pattern",
    "Schema versioning" ] },
  { stack: "mongo", n: 4, name: "Indexes", tag: "red", items: [
    "What an index is","Single-field indexes","Compound indexes","Multikey indexes","Unique indexes",
    "Sparse indexes","Partial indexes","TTL indexes","Index selectivity","Index ordering","ESR rule",
    "Covered queries","Index overhead","Write performance impact","Index intersection",
    "Query planner","explain()" ] },
  { stack: "mongo", n: 5, name: "Aggregation framework", tag: "red", items: [
    "Aggregation pipeline","$match","$project","$group","$sort","$limit","$skip","$unwind","$lookup",
    "$addFields","$set","$replaceRoot","$facet","$count","$sum","$avg","$min","$max",
    "Conditional expressions","Array expressions","Date operators","Pipeline optimization" ] },
  { stack: "mongo", n: 6, name: "Updates & bulk operations", tag: "red", items: [
    "$set","$unset","$inc","$push","$pull","$addToSet","$pop","$rename","$currentDate",
    "Atomic updates","bulkWrite","updateOne","updateMany","Upsert",
    "Ordered vs unordered bulk operations","Bulk-write error handling" ] },
  { stack: "mongo", n: 7, name: "Transactions & consistency", tag: "amber", items: [
    "Atomicity","Single-document atomicity","Transactions","Sessions","Multi-document transactions",
    "Commit","Abort","Read concern","Write concern","Read preference","Consistency trade-offs",
    "Retryable writes" ] },
  { stack: "mongo", n: 8, name: "MongoDB performance", tag: "red", items: [
    "Query optimization","Index optimization","explain()","Collection scans","Index scans",
    "Large-result-set problems","Pagination performance","Offset pagination limitations",
    "Cursor-based pagination","Aggregation performance","$lookup performance","Working-set concept",
    "Memory considerations","Connection pooling","Read/write bottlenecks","Slow query diagnosis" ] },
  { stack: "mongo", n: 9, name: "Mongoose", tag: "red", items: [
    "Mongoose architecture","Schema","Model","Document","Schema types","Validation","Defaults",
    "Virtuals","Middleware/hooks","Getters/setters","populate","lean()","Query middleware",
    "Document middleware","Model methods","Instance methods","Static methods","Timestamps",
    "Schema indexes","Mongoose transactions" ] },
  { stack: "mongo", n: 10, name: "MongoDB + Node.js", tag: "red", items: [
    "Connection management","Connection pooling","Query execution in async Node.js",
    "MongoDB driver vs Mongoose","Repository/data-access layer","Database error handling",
    "Duplicate-key errors","Validation errors","Retry strategies","Transaction handling",
    "Connection failure handling","Graceful shutdown","Query timeout concepts",
    "Database configuration","Environment-specific database settings" ] },
  { stack: "mongo", n: 11, name: "Security & data integrity", tag: "amber", items: [
    "Authentication data storage","Password hashing","Sensitive-field protection","Field projection",
    "Input validation","Query injection awareness","Schema validation","Data consistency",
    "Unique constraints","Referential consistency strategies","Auditing concepts" ] },
  { stack: "mongo", n: 12, name: "Scaling & production architecture", tag: "amber", items: [
    "Replica sets","Primary/secondary architecture","Replication","Failover","Read preference",
    "Write concern","Sharding","Shard key","Horizontal scaling","Load distribution",
    "Change streams","Caching with Redis","Event-driven database workflows",
    "Backup and restore concepts" ] },

  { stack: "micro", n: 1, name: "Microservices fundamentals", tag: "red", items: [
    "Monolith vs microservices","What a microservice is","Service boundaries","Bounded context",
    "Domain-driven decomposition","Single responsibility at service level","Independent deployment",
    "Independent scaling","Service ownership","Loose coupling","High cohesion","Service autonomy",
    "Distributed system fundamentals","Microservices advantages","Microservices disadvantages",
    "When microservices are appropriate","When microservices are a bad choice" ] },
  { stack: "micro", n: 2, name: "Service architecture", tag: "red", items: [
    "Service decomposition","Business capability-based decomposition","Database-per-service",
    "Shared database anti-pattern","Service boundaries","Synchronous vs asynchronous services",
    "Stateless services","Service contracts","API contracts","Backward compatibility","Versioning",
    "Independent deployment","Service dependency management" ] },
  { stack: "micro", n: 3, name: "Inter-service communication", tag: "red", items: [
    "REST between services","HTTP communication","GraphQL gateway/federation concepts",
    "gRPC conceptually","Synchronous communication","Asynchronous communication","Message queues",
    "Event-driven architecture","Event producers","Event consumers","Pub/Sub",
    "Request/response pattern","Event notification pattern","Message brokers","Kafka concepts",
    "RabbitMQ concepts","Delivery guarantees","Message ordering","Duplicate messages",
    "Idempotent consumers" ] },
  { stack: "micro", n: 4, name: "API gateway", tag: "red", items: [
    "API Gateway","Gateway routing","Request forwarding","Authentication at gateway","Authorization",
    "Rate limiting","Request aggregation","Response aggregation","Load balancing",
    "Gateway-level logging","Gateway timeout","Gateway retry","Gateway circuit breaking",
    "API versioning","Reverse proxy" ] },
  { stack: "micro", n: 5, name: "Service discovery & configuration", tag: "red", items: [
    "Service discovery","Client-side discovery","Server-side discovery","Service registry",
    "Consul concepts","DNS-based discovery","Health checks","Service registration",
    "Service deregistration","Environment configuration","Secrets management",
    "Configuration centralization" ] },
  { stack: "micro", n: 6, name: "Reliability & failure handling", tag: "red", items: [
    "Failure isolation","Timeout","Retry","Exponential backoff","Circuit breaker","Bulkhead pattern",
    "Fallback","Graceful degradation","Health checks","Liveness","Readiness","Idempotency",
    "Duplicate request handling","Partial failure","Cascading failure","Backpressure",
    "Dead-letter queue" ] },
  { stack: "micro", n: 7, name: "Data management", tag: "amber", items: [
    "Database per service","Data ownership","Why shared databases create coupling",
    "Distributed transactions","Eventual consistency","Strong consistency","Saga pattern",
    "Choreography","Orchestration","Compensating transactions","Transaction boundaries",
    "Data duplication","Read models","CQRS concept","Outbox pattern",
    "Change data capture concept" ] },
  { stack: "micro", n: 8, name: "Security", tag: "red", items: [
    "Service authentication","Service authorization","JWT between services","OAuth2 concepts",
    "mTLS concept","API keys","Secret management","Token propagation","Least privilege",
    "Network-level security","Gateway security" ] },
  { stack: "micro", n: 9, name: "Observability", tag: "red", items: [
    "Centralized logging","Structured logging","Correlation ID","Distributed tracing","Metrics",
    "Error tracking","Latency monitoring","Request tracing","Service health dashboards",
    "Dependency monitoring","Alerting" ] },
  { stack: "micro", n: 10, name: "Deployment & scaling", tag: "amber", items: [
    "Containerization","Docker basics","Service-specific deployment","Horizontal scaling",
    "Load balancing","Rolling deployments","Blue-green deployment concept",
    "Canary deployment concept","Autoscaling","Kubernetes concepts","Service networking",
    "Environment separation","CI/CD for microservices" ] },
  { stack: "micro", n: 11, name: "Testing microservices", tag: "amber", items: [
    "Unit testing","Integration testing","Contract testing","Consumer-driven contract testing",
    "End-to-end testing","Service virtualization","Mocking downstream services","Test environments",
    "Failure testing","Retry/circuit-breaker testing" ] },
  { stack: "micro", n: 12, name: "Advanced microservices patterns", tag: "yellow", items: [
    "Saga","CQRS","Event sourcing concept","Outbox pattern","Inbox pattern","Idempotency key",
    "Strangler pattern","Anti-corruption layer","Backend-for-Frontend","Eventual consistency",
    "Distributed locking concept","Leader election concept","Rate limiting strategies",
    "Bulkhead pattern","Sidecar pattern" ] },

  { stack: "js", n: 1, name: "JavaScript fundamentals", tag: "red", items: [
    "var, let, const","Primitive vs reference types","Type coercion","== vs ===",
    "Truthy and falsy values","null vs undefined","typeof","Scope","Global scope","Function scope",
    "Block scope","Lexical scope","Hoisting","Temporal Dead Zone","Execution context","Call stack",
    "Strict mode" ] },
  { stack: "js", n: 2, name: "Functions", tag: "red", items: [
    "Function declarations","Function expressions","Arrow functions","Parameters and arguments",
    "Default parameters","Rest parameters","Spread syntax","Higher-order functions",
    "Callback functions","First-class functions","Closures","IIFE","Pure vs impure functions",
    "Function composition","Currying concept","Partial application concept" ] },
  { stack: "js", n: 3, name: "this, objects & prototypes", tag: "red", items: [
    "this","this in regular functions","this in arrow functions","call","apply","bind",
    "Object creation","Object properties","Property descriptors conceptually","Object methods",
    "Destructuring","Computed properties","Optional chaining","Nullish coalescing","Prototype",
    "Prototype chain","Object.create","Constructor functions","Classes","Inheritance",
    "Encapsulation concepts" ] },
  { stack: "js", n: 4, name: "Arrays & modern data handling", tag: "red", items: [
    "map","filter","reduce","forEach","find","findIndex","some","every","includes","sort","slice",
    "splice","flat","flatMap","Array destructuring","Spread with arrays",
    "Immutable array operations","Shallow copying","Deep copying" ] },
  { stack: "js", n: 5, name: "Objects & immutability", tag: "red", items: [
    "Object destructuring","Object spread","Object rest","Object.keys","Object.values",
    "Object.entries","Object.assign","Object.freeze","Shallow copy","Deep copy",
    "Structured cloning","Mutation vs immutability","Referential equality" ] },
  { stack: "js", n: 6, name: "Asynchronous JavaScript", tag: "red", items: [
    "Synchronous vs asynchronous execution","Callbacks","Callback hell","Promises",
    "Promise states",".then",".catch",".finally","Promise chaining","async/await",
    "try/catch with async","Promise.all","Promise.allSettled","Promise.race","Promise.any",
    "Sequential vs parallel async execution","Error propagation in promises",
    "Promise cancellation concepts","AbortController" ] },
  { stack: "js", n: 7, name: "Event loop", tag: "red", items: [
    "Event loop","Call stack","Web APIs/runtime APIs","Task queue","Microtask queue","Macrotasks",
    "Promise callbacks","setTimeout","setInterval","queueMicrotask","Execution order",
    "Event-loop starvation" ] },
  { stack: "js", n: 8, name: "ES6+ language features", tag: "amber", items: [
    "Template literals","Destructuring","Spread syntax","Rest parameters","Default parameters",
    "Arrow functions","Enhanced object literals","Computed property names","Modules","import",
    "export","Named exports","Default exports","Optional chaining","Nullish coalescing",
    "Logical assignment operators","for...of","Symbols","Iterators","Generators","Map","Set",
    "WeakMap","WeakSet" ] },
  { stack: "js", n: 9, name: "Modules & runtime", tag: "red", items: [
    "CommonJS","ES Modules","require","import","module.exports","export","Module caching concept",
    "Circular dependencies","Dynamic imports","Tree-shaking concept" ] },
  { stack: "js", n: 10, name: "Error handling", tag: "red", items: [
    "try/catch","throw","Custom errors","Error objects","Error propagation","Synchronous errors",
    "Asynchronous errors","Promise rejection","Global error handling concepts" ] },
  { stack: "js", n: 11, name: "Advanced JavaScript", tag: "amber", items: [
    "Closures in depth","Lexical environment","Execution contexts","Scope chain",
    "Garbage collection concepts","Memory leaks","WeakMap/WeakSet use cases","Event delegation",
    "Debouncing","Throttling","Memoization","Lazy evaluation concepts","Recursion",
    "Tail-call concept","Iterators","Generators" ] },
  { stack: "js", n: 12, name: "Browser JavaScript", tag: "amber", items: [
    "DOM","Event propagation","Capturing","Bubbling","Event delegation","preventDefault",
    "stopPropagation","Browser storage","localStorage","sessionStorage","Cookies","Fetch API",
    "AbortController","Web APIs","CORS concept","Browser rendering concept" ] },
  { stack: "js", n: 13, name: "Performance", tag: "red", items: [
    "Debouncing","Throttling","Memoization","Avoiding unnecessary computation",
    "Memory management","Large-array processing","Event-loop blocking","Async parallelization",
    "Code splitting concept","Lazy loading" ] },
  { stack: "js", n: 14, name: "JavaScript patterns & engineering", tag: "amber", items: [
    "Separation of concerns","Pure functions","Immutability","Functional programming concepts",
    "Composition","Factory pattern","Module pattern","Strategy pattern","Observer pattern",
    "Dependency injection concept","Defensive programming","Error boundaries at application level" ] },

  { stack: "next", n: 1, name: "Next.js fundamentals", tag: "red", items: [
    "What Next.js is","Why use Next.js over plain React","Next.js application architecture",
    "App Router","app/ directory","File-system routing","page.js / page.tsx",
    "layout.js / layout.tsx","Nested layouts","Dynamic routes","Catch-all routes",
    "Optional catch-all routes","Route groups","Parallel routes","Intercepting routes",
    "loading.js","error.js","not-found.js","global-error.js","notFound()" ] },
  { stack: "next", n: 2, name: "Server & client components", tag: "red", items: [
    "Server Components","Client Components",'"use client"',
    "Server vs Client Component differences","When to use Server Components",
    "When to use Client Components","Server Component limitations","Client Component limitations",
    "Component boundaries","Passing props from Server to Client Components","Serializable props",
    "Component composition between server/client boundaries","Client bundle implications" ] },
  { stack: "next", n: 3, name: "Rendering model", tag: "red", items: [
    "Static rendering","Dynamic rendering","Server-side rendering","Client-side rendering",
    "Pre-rendering","Streaming","Partial rendering concepts","Static vs dynamic route behavior",
    "Rendering at build time","Rendering at request time","Hydration","Hydration mismatch",
    "Client hydration","Server/client rendering boundaries" ] },
  { stack: "next", n: 4, name: "Data fetching", tag: "red", items: [
    "Server-side data fetching","Fetching inside Server Components","Async Server Components",
    "Route-level data fetching","Client-side fetching","API calls from Client Components",
    "Request waterfalls","Parallel data fetching","Sequential data fetching",
    "Request memoization","Data cache concepts","Revalidation","Time-based revalidation",
    "On-demand revalidation","revalidatePath","revalidateTag","Cache invalidation",
    "Dynamic data","Static data" ] },
  { stack: "next", n: 5, name: "Caching", tag: "red", items: [
    "Next.js caching model","Data Cache","Request memoization","Full Route Cache","Router Cache",
    "Cache invalidation","Revalidation","Cached vs uncached requests",
    "Dynamic rendering and caching","Cache tags","Revalidation strategies" ] },
  { stack: "next", n: 6, name: "Route handlers & backend capabilities", tag: "red", items: [
    "Route Handlers","route.js","HTTP methods in Route Handlers","Request handling",
    "Response handling","Headers","Cookies","Middleware","Route protection","API endpoints",
    "Webhooks","Backend-for-frontend patterns","Route Handler vs Server Action" ] },
  { stack: "next", n: 7, name: "Server actions", tag: "red", items: [
    "Server Actions / Server Functions",'"use server"',
    "Calling server-side functions from forms/UI","Form actions","Mutations",
    "Validation on server","Authentication in Server Actions","Authorization in Server Actions",
    "Revalidation after mutation","Server Action security considerations" ] },
  { stack: "next", n: 8, name: "Routing & navigation", tag: "amber", items: [
    "<Link>","Client-side navigation","useRouter","usePathname","useSearchParams",
    "Search parameters","Dynamic segments","Route parameters","Programmatic navigation",
    "Redirects","redirect()","permanentRedirect()","Middleware-based redirects" ] },
  { stack: "next", n: 9, name: "Authentication & authorization", tag: "red", items: [
    "Authentication architecture","Session-based authentication","Token-based authentication",
    "Cookies","HttpOnly cookies","Middleware authentication","Server-side authorization",
    "Client-side authorization","Role-based access control","Route protection",
    "Server Action authorization","NextAuth/Auth.js concepts" ] },
  { stack: "next", n: 10, name: "Middleware", tag: "red", items: [
    "What Middleware is","Middleware execution","Request matching","Route matching",
    "Authentication use cases","Redirect use cases","Header manipulation","Rewrites","Redirects",
    "Middleware limitations","Middleware performance considerations" ] },
  { stack: "next", n: 11, name: "Forms & mutations", tag: "amber", items: [
    "Server-side form handling","Server Actions with forms","Form validation",
    "Client-side validation","Server-side validation","Progressive enhancement",
    "Pending states","Optimistic UI","Mutation errors","Revalidation after mutation" ] },
  { stack: "next", n: 12, name: "Performance", tag: "red", items: [
    "Image optimization","next/image","Font optimization","next/font","Script optimization",
    "Code splitting","Lazy loading","Dynamic imports","Streaming","Suspense","Bundle analysis",
    "Client JavaScript reduction","Server Components for performance",
    "Avoiding unnecessary Client Components" ] },
  { stack: "next", n: 13, name: "SEO & metadata", tag: "amber", items: [
    "Metadata API","Static metadata","Dynamic metadata","title","description",
    "Open Graph metadata","Twitter metadata","Canonical URLs","Sitemap","Robots",
    "SEO with Server Components" ] },
  { stack: "next", n: 14, name: "Error handling", tag: "red", items: [
    "Error boundaries in Next.js","error.js","global-error.js","not-found.js","loading.js",
    "Route-level error handling","Server-side errors","Client-side errors","Error recovery",
    "Logging production errors" ] },
  { stack: "next", n: 15, name: "Environment & configuration", tag: "amber", items: [
    "Environment variables","Server-only environment variables","NEXT_PUBLIC_*",
    "next.config.js","Build configuration","Runtime configuration concepts",
    "Environment-specific configuration","Feature configuration" ] },
  { stack: "next", n: 16, name: "Deployment & production", tag: "amber", items: [
    "Next.js production build","next build","next start","Node deployment",
    "Serverless deployment","Edge runtime concepts","CDN","Reverse proxy",
    "Environment configuration","Logging","Monitoring","Error tracking","Scaling",
    "Caching in production" ] },
  { stack: "next", n: 17, name: "Advanced Next.js architecture", tag: "amber", items: [
    "BFF architecture","Next.js + separate backend","Next.js as full-stack application",
    "Next.js + microservices","API Gateway integration",
    "Authentication across frontend/backend","Shared types","Monorepo concepts",
    "Shared UI packages","Server/client boundary architecture","Feature-based architecture" ] },
  { stack: "next", n: 18, name: "Legacy / compatibility knowledge", tag: "yellow", items: [
    "Pages Router","pages/","getServerSideProps","getStaticProps","getStaticPaths",
    "API Routes" ] },

  { stack: "python", n: 1, name: "Core Python", tag: "red", items: [
    "Python syntax and indentation","Variables and dynamic typing","Primitive data types","Strings",
    "Lists","Tuples","Sets","Dictionaries","Mutable vs immutable objects","Indexing and slicing",
    "List/set/dict comprehensions","Conditional expressions","for and while",
    "break, continue, pass","Functions","Positional vs keyword arguments","Default arguments",
    "*args and **kwargs","Lambda functions","Scope","Local/global/nonlocal","Recursion",
    "Modules and packages","import","Virtual environments","Exception handling",
    "try/except/else/finally","Custom exceptions","File handling","Context managers / with",
    "Iterables vs iterators","Generators","yield","Decorators","OOP basics","Classes and objects",
    "Inheritance","Composition","__init__","Magic/dunder methods","Dataclasses","Type hints",
    "collections","datetime","json","re","os","pathlib","logging","argparse basics" ] },
  { stack: "python", n: 2, name: "NumPy", tag: "red", items: [
    "NumPy arrays","ndarray","Array shape","Dimensions","Data types","Vectorization",
    "Broadcasting","Array indexing","Boolean masking","Reshaping","Transpose","Aggregations",
    "axis","Element-wise operations","where","Concatenation","Splitting","NaN handling",
    "Random generation","Performance vs Python loops" ] },
  { stack: "python", n: 3, name: "Pandas", tag: "red", items: [
    "Series","DataFrame","Creating DataFrames","Reading CSV","Reading Excel","Writing CSV",
    "Writing Excel","head() / tail()","info()","describe()","shape","dtypes","Column selection",
    "Row selection","loc","iloc","Boolean filtering","query()","Adding columns",
    "Renaming columns","Dropping columns","Handling missing values","isna() / notna()",
    "fillna()","dropna()","Duplicates","drop_duplicates()","Sorting","sort_values()",
    "groupby()","Aggregation","agg()","transform()","apply()","map()","merge()","join()",
    "concat()","Pivot tables","melt()","Date/time handling","Resampling","String operations",
    "Type conversion","Category dtype","Index concepts","MultiIndex concept","Chunked reading",
    "Memory optimization","Vectorized Pandas operations" ] },
  { stack: "python", n: 4, name: "Excel & file processing", tag: "red", items: [
    "openpyxl","Workbook/worksheet concepts","Reading Excel files","Writing Excel files",
    "Cell operations","Formatting","Formulas","Multiple sheets","Template generation",
    "Excel validation","CSV handling","JSON handling","Large-file processing",
    "File path handling","File upload/download workflows" ] },
  { stack: "python", n: 5, name: "Useful data/backend libraries", tag: "amber", items: [
    "NumPy","Pandas","openpyxl","requests","FastAPI basics","Flask basics","Pydantic",
    "SQLAlchemy concepts","PyMongo","datetime","logging","pathlib","json","os","re",
    "SciPy concepts","Matplotlib","Seaborn","Scikit-learn basics" ] },
  { stack: "python", n: 6, name: "Automation & backend", tag: "red", items: [
    "REST API consumption","API request handling","JSON transformation","Batch processing",
    "Scheduled scripts","File automation","Excel automation","Database automation","Logging",
    "Configuration management","Environment variables","Error recovery","Retry logic",
    "CLI scripts","Background jobs","Async Python concepts" ] },
  { stack: "python", n: 7, name: "Database & SQL", tag: "red", items: [
    "SQL basics","SELECT","WHERE","JOIN","GROUP BY","HAVING","ORDER BY","Subqueries","CTEs",
    "Window functions","Indexes","Transactions","PostgreSQL fundamentals",
    "Python + PostgreSQL","Python + MongoDB" ] },
  { stack: "python", n: 8, name: "Testing & code quality", tag: "amber", items: [
    "pytest","Fixtures","Assertions","Mocking","Unit testing","Integration testing",
    "Type checking concepts","Formatting/linting","Project structure",
    "Dependency management","Logging strategy" ] },
  { stack: "python", n: 9, name: "Advanced Python", tag: "yellow", items: [
    "Asyncio","async / await","Async tasks","Multiprocessing","Threading","GIL",
    "CPU-bound vs I/O-bound work","Generators in depth","Decorators in depth",
    "Context manager implementation","Descriptor concept","Metaclass concept" ] },

  { stack: "dsa", n: 1, name: "Fundamentals", tag: "red", items: [
    "Big-O notation","Time complexity","Space complexity","Arrays","Strings","HashMap / HashSet",
    "Frequency counting","Sorting","Searching","Binary search","Two pointers","Sliding window",
    "Prefix sum","Difference array","Recursion","Stack","Queue","Deque","Linked list",
    "Fast and slow pointers" ] },
  { stack: "dsa", n: 2, name: "Core data structures", tag: "amber", items: [
    "Singly linked list","Doubly linked list","Circular linked list","Binary tree",
    "Binary search tree","Tree traversal","BFS","DFS","Heap","Priority queue",
    "Graph representation","Directed graph","Undirected graph","Weighted graph",
    "Matrix / 2D arrays" ] },
  { stack: "dsa", n: 3, name: "Core problem-solving patterns", tag: "amber", items: [
    "Hashing pattern","Two-pointer pattern","Sliding-window pattern","Prefix-sum pattern",
    "Binary-search pattern","Fast/slow pointer pattern","Merge-interval pattern",
    "Monotonic stack","Top-K pattern","Heap-based selection","BFS pattern","DFS pattern",
    "Backtracking","Greedy algorithms","Divide and conquer" ] },
  { stack: "dsa", n: 4, name: "Trees & graphs", tag: "amber", items: [
    "Preorder traversal","Inorder traversal","Postorder traversal","Level-order traversal",
    "Tree height/depth","Tree diameter","Lowest common ancestor","Balanced tree concepts",
    "BST search","BST insertion/deletion","Graph traversal","Connected components",
    "Cycle detection","Topological sort","Shortest path","Dijkstra concept",
    "Union-Find / DSU" ] },
  { stack: "dsa", n: 5, name: "Dynamic programming", tag: "yellow", items: [
    "What DP is","Overlapping subproblems","Optimal substructure","Memoization","Tabulation",
    "1D DP","2D DP","Knapsack pattern","Subsequence problems","Grid DP",
    "State-transition thinking" ] },
  { stack: "dsa", n: 6, name: "Advanced / lower priority", tag: "yellow", items: [
    "Trie","Bit manipulation","Segment tree","Fenwick tree","Advanced graph algorithms",
    "Minimum spanning tree","Bellman-Ford concept","Floyd-Warshall concept",
    "Advanced backtracking","Advanced dynamic programming","Advanced string algorithms",
    "Computational geometry basics" ] },

  { stack: "genai", n: 1, name: "AI / LLM fundamentals", tag: "red", items: [
    "AI vs ML vs Deep Learning vs Generative AI","LLM fundamentals","Tokens","Context window",
    "Parameters — conceptual understanding","Inference","Transformer architecture — conceptual",
    "Embeddings","Temperature","Hallucinations","Model limitations","Structured output",
    "JSON output" ] },
  { stack: "genai", n: 2, name: "Prompt engineering", tag: "amber", items: [
    "System instructions","User instructions","Instruction hierarchy","Zero-shot prompting",
    "Few-shot prompting","Prompt templates","Role prompting","Structured prompting",
    "Context injection","Prompt decomposition","Prompt chaining","Prompt versioning" ] },
  { stack: "genai", n: 3, name: "LLM APIs", tag: "red", items: [
    "LLM API fundamentals","API authentication","Request/response structure","Model selection",
    "Streaming responses","Token usage","Rate limits","Error handling","Retries","Timeouts",
    "Cost management","Model fallbacks" ] },
  { stack: "genai", n: 4, name: "Function / tool calling", tag: "red", items: [
    "Function calling","Tool definitions","Tool schemas","Structured tool arguments",
    "Tool execution","Tool results","Multiple tools","Tool validation","Tool permissions",
    "Tool failure handling","Idempotent tools" ] },
  { stack: "genai", n: 5, name: "RAG", tag: "red", items: [
    "What RAG is","Document ingestion","Document preprocessing","Chunking","Chunk size",
    "Chunk overlap","Embeddings","Vector databases","Similarity search","Metadata filtering",
    "Top-K retrieval","Semantic search","Keyword search","Hybrid search","Reranking",
    "Context assembly","Grounded generation","Citation / source attribution",
    "RAG failure modes","Retrieval evaluation" ] },
  { stack: "genai", n: 6, name: "AI application engineering", tag: "amber", items: [
    "AI API integration with Node.js","AI API integration with Python","Streaming UI",
    "Async AI requests","Background AI jobs","Queue-based AI processing","Caching",
    "Token optimization","Context optimization","Model routing","Cost optimization","Logging",
    "Error monitoring" ] },
  { stack: "genai", n: 7, name: "AI security", tag: "red", items: [
    "Prompt injection","Indirect prompt injection","Sensitive data exposure","PII handling",
    "Input validation","Output validation","Secret management","Access control",
    "Data isolation" ] },
  { stack: "genai", n: 8, name: "Evaluation", tag: "red", items: [
    "What AI evaluation means","Golden datasets","Expected outputs","Accuracy evaluation",
    "Hallucination evaluation","Retrieval evaluation","Structured-output evaluation",
    "Regression evaluation","LLM-as-a-judge","Production monitoring" ] },
  { stack: "genai", n: 9, name: "Libraries / platforms", tag: "amber", items: [
    "OpenAI API","OpenAI Responses API","OpenAI Agents SDK — conceptual",
    "LangChain — conceptual","LangGraph — conceptual","LlamaIndex — conceptual",
    "Vector database technology","Embedding models","Model provider differences" ] },
  { stack: "genai", n: 10, name: "Practical projects", tag: "amber", items: [
    "Build document Q&A system","Build RAG application",
    "Build structured-data extraction system","Build AI SQL assistant",
    "Build AI report generator","Add streaming","Add citations","Add evaluation",
    "Add authentication","Deploy an AI application" ] },

  { stack: "agentic", n: 1, name: "Agent fundamentals", tag: "red", items: [
    "What an AI agent is","Agent vs chatbot","Agent vs workflow","Agent loop",
    "Goal-oriented execution","Planning","Reasoning + action","Observation","Iteration",
    "Stop conditions","Agent autonomy","Human-in-the-loop" ] },
  { stack: "agentic", n: 2, name: "Tool use", tag: "red", items: [
    "Tool calling","Tool discovery","Tool schemas","Tool selection","Tool execution",
    "Tool results","Multiple tools","Tool routing","Tool permissions","Tool validation",
    "Tool retries","Tool timeouts","Idempotent tools" ] },
  { stack: "agentic", n: 3, name: "Agent state & memory", tag: "red", items: [
    "Agent state","Run state","Workflow state","Conversation history","Short-term memory",
    "Long-term memory","Working memory","State persistence","Session management",
    "Context compaction","Memory retrieval","Memory write policies" ] },
  { stack: "agentic", n: 4, name: "Agent orchestration", tag: "amber", items: [
    "Single-agent architecture","Multi-agent architecture","Planner / executor",
    "Supervisor agent","Worker agents","Router architecture","Sequential workflows",
    "Parallel workflows","Conditional workflows","Agent handoffs","Subagents",
    "Retry loops","Human approval workflows" ] },
  { stack: "agentic", n: 5, name: "Agent patterns", tag: "amber", items: [
    "ReAct","Plan-and-execute","Reflection","Self-critique","Tool routing",
    "Dynamic tool selection","Agent delegation","Long-running agents","Background agents",
    "Durable execution","Checkpointing","Resume/recovery" ] },
  { stack: "agentic", n: 6, name: "MCP", tag: "red", items: [
    "What MCP is","MCP client","MCP server","MCP tools","MCP resources","MCP prompts",
    "Tool discovery through MCP","Remote MCP","MCP authentication","MCP security",
    "MCP vs function calling","Build an MCP server" ] },
  { stack: "agentic", n: 7, name: "Reliability", tag: "red", items: [
    "Guardrails","Input validation","Output validation","Maximum iterations","Timeouts",
    "Retries","Fallbacks","Failure recovery","Human approval","Idempotency",
    "State recovery","Durable execution" ] },
  { stack: "agentic", n: 8, name: "Agent security", tag: "red", items: [
    "Prompt injection","Indirect prompt injection","Tool abuse","Excessive agency",
    "Data exfiltration","Least-privilege tools","Tool authorization","Secret isolation",
    "Sandboxing","PII protection" ] },
  { stack: "agentic", n: 9, name: "Agent observability", tag: "red", items: [
    "Agent tracing","Tool-call tracing","Model-call tracing","Token tracking","Cost tracking",
    "Latency tracking","Error tracking","Run history","Correlation IDs","Structured logging",
    "Metrics","Debugging agent trajectories" ] },
  { stack: "agentic", n: 10, name: "Agent evaluation", tag: "red", items: [
    "Agent evaluation concepts","Golden datasets","Task-success evaluation",
    "Tool-call correctness","Trajectory evaluation","Retrieval evaluation",
    "Hallucination evaluation","Safety evaluation","Regression evaluation",
    "LLM-as-a-judge" ] },
  { stack: "agentic", n: 11, name: "Frameworks", tag: "amber", items: [
    "OpenAI Agents SDK","LangGraph","LangChain","LlamaIndex","CrewAI",
    "Framework vs custom orchestration","Agent state management","Tool registration",
    "Workflow orchestration" ] },
  { stack: "agentic", n: 12, name: "Production agent engineering", tag: "amber", items: [
    "Authentication","Authorization","Rate limiting","Cost controls","Model routing",
    "Background jobs","Queues","Webhooks","Streaming","Persistence","Monitoring",
    "Deployment","Failure recovery" ] },
  { stack: "agentic", n: 13, name: "Practical agent projects", tag: "amber", items: [
    "Tool-using assistant","RAG agent","Database agent","SQL agent","Multi-tool agent",
    "MCP-powered agent","Human-approval agent","Multi-agent workflow","Long-running agent",
    "Production monitoring","Agent evaluation pipeline" ] },
  { stack: "sysdesign", n: 1, name: "System design fundamentals", tag: "red", items: [
    "What is system design?","Functional requirements","Non-functional requirements",
    "Functional vs non-functional requirements","Scalability","Availability","Reliability",
    "Maintainability","Performance","Latency","Throughput","Fault tolerance","Consistency",
    "CAP theorem","Availability vs consistency trade-offs","Stateless vs stateful systems",
    "Horizontal scaling","Vertical scaling","Bottlenecks","Single point of failure" ] },
  { stack: "sysdesign", n: 2, name: "Basic architecture", tag: "red", items: [
    "Client-server architecture","2-tier architecture","3-tier architecture","N-tier architecture",
    "Load balancer","Reverse proxy","API Gateway","Application server","Database server","Cache",
    "Message broker","CDN","Object storage","DNS","Service discovery" ] },
  { stack: "sysdesign", n: 3, name: "APIs & backend design", tag: "red", items: [
    "REST API design","HTTP methods","HTTP status codes","API versioning","Pagination","Filtering",
    "Sorting","Search","Idempotency","Rate limiting","Request validation","Error handling",
    "Authentication","Authorization","API contracts","Synchronous communication",
    "Asynchronous communication","WebSockets","Long polling concept","Webhooks" ] },
  { stack: "sysdesign", n: 4, name: "Database design", tag: "red", items: [
    "SQL vs NoSQL","Relational database concepts","MongoDB data modeling","PostgreSQL data modeling",
    "Normalization","Denormalization","Indexes","Compound indexes","Query optimization",
    "Read-heavy vs write-heavy workloads","Replication","Sharding","Partitioning","Transactions",
    "Connection pooling","Read replicas","Database bottlenecks" ] },
  { stack: "sysdesign", n: 5, name: "Caching", tag: "red", items: [
    "Why caching?","Cache-aside","Read-through cache","Write-through cache","Write-back cache",
    "Cache invalidation","TTL","Redis","Distributed cache","Cache consistency","Cache stampede",
    "Cache warming","Cache eviction policies" ] },
  { stack: "sysdesign", n: 6, name: "Messaging & event-driven systems", tag: "amber", items: [
    "Message queue","Pub/Sub","Producer","Consumer","Message broker","Kafka concepts",
    "RabbitMQ concepts","Event-driven architecture","Asynchronous processing","Message ordering",
    "Duplicate messages","Idempotent consumers","Retry queues","Dead-letter queue","Backpressure" ] },
  { stack: "sysdesign", n: 7, name: "Distributed systems", tag: "amber", items: [
    "Distributed systems","Network failures","Partial failures","Timeouts","Retries",
    "Exponential backoff","Circuit breaker","Bulkhead","Graceful degradation","Eventual consistency",
    "Distributed transactions","Saga pattern","Distributed locking","Leader election concept",
    "Clock/time issues conceptually","Idempotency" ] },
  { stack: "sysdesign", n: 8, name: "Scalability", tag: "red", items: [
    "Horizontal scaling","Vertical scaling","Stateless services","Load balancing","Database scaling",
    "Read replicas","Sharding","Partitioning","Caching","CDN","Async processing",
    "Queue-based scaling","Connection pooling","Rate limiting","Autoscaling" ] },
  { stack: "sysdesign", n: 9, name: "Reliability & availability", tag: "amber", items: [
    "High availability","Redundancy","Failover","Health checks","Liveness","Readiness","Replication",
    "Disaster recovery","Backup","Recovery Point Objective (RPO)","Recovery Time Objective (RTO)",
    "Graceful shutdown","Failure isolation","Fault tolerance" ] },
  { stack: "sysdesign", n: 10, name: "Security", tag: "amber", items: [
    "Authentication","Authorization","JWT","OAuth2 concepts","Session management","TLS/HTTPS",
    "Encryption at rest","Encryption in transit","Secrets management","Least privilege",
    "Rate limiting","Input validation","API security","Network security","Audit logging" ] },
  { stack: "sysdesign", n: 11, name: "Observability", tag: "amber", items: [
    "Logging","Structured logging","Metrics","Tracing","Distributed tracing","Correlation IDs",
    "Latency monitoring","Error monitoring","Health monitoring","Alerting","Dashboards","SLIs",
    "SLOs","SLA concepts" ] },
  { stack: "sysdesign", n: 12, name: "Architecture patterns", tag: "amber", items: [
    "Monolith","Modular monolith","Microservices","Service-oriented architecture",
    "Event-driven architecture","Layered architecture","Clean architecture","Hexagonal architecture",
    "CQRS","Event sourcing concept","Backend-for-Frontend","API Gateway pattern","Strangler pattern",
    "Saga pattern","Outbox pattern","Pub/Sub pattern" ] },
  { stack: "sysdesign", n: 13, name: "Deployment & infrastructure", tag: "amber", items: [
    "Docker","Kubernetes concepts","CI/CD","Rolling deployment","Blue-green deployment",
    "Canary deployment","Load balancing","CDN","Cloud regions","Availability zones","Autoscaling",
    "Infrastructure as Code concept","Reverse proxy","Service discovery" ] },
  { stack: "sysdesign", n: 14, name: "System design interview process", tag: "red", items: [
    "Requirement clarification","Assumption identification","Functional requirements",
    "Non-functional requirements","Capacity estimation","Traffic estimation","Storage estimation",
    "Read/write ratio","API design","Data model design","High-level architecture",
    "Bottleneck identification","Scaling strategy","Failure scenarios","Trade-off discussion",
    "Final architecture explanation" ] },
  { stack: "sysdesign", n: 15, name: "Practice problems — must", tag: "red", items: [
    "URL shortener","Rate limiter","Chat application","Notification system",
    "File upload/storage system","E-commerce backend","Inventory management system",
    "Order management system","Authentication system","API gateway" ] },
  { stack: "sysdesign", n: 16, name: "Practice problems — strong", tag: "amber", items: [
    "Food delivery system","Ride booking system","Social media feed","Search/autocomplete",
    "Log aggregation system","Payment system","Job processing system","Video processing system" ] },
  { stack: "postgres", n: 1, name: "SQL fundamentals", tag: "red", items: [
    "Database / schema / table","Row / column","Data types","CREATE TABLE","INSERT","SELECT","UPDATE",
    "DELETE","WHERE","ORDER BY","LIMIT","OFFSET","DISTINCT","Aliases","NULL","COALESCE","CASE",
    "Comparison operators","AND / OR / NOT","IN","BETWEEN","LIKE","ILIKE" ] },
  { stack: "postgres", n: 2, name: "Aggregation & grouping", tag: "red", items: [
    "COUNT","SUM","AVG","MIN","MAX","GROUP BY","HAVING","Aggregate expressions",
    "Conditional aggregation","Grouping by multiple columns" ] },
  { stack: "postgres", n: 3, name: "Joins", tag: "red", items: [
    "Primary key","Foreign key","INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN","CROSS JOIN",
    "Self join","Multiple joins","Join conditions","Join filtering","One-to-one relationships",
    "One-to-many relationships","Many-to-many relationships" ] },
  { stack: "postgres", n: 4, name: "Database design", tag: "red", items: [
    "Relational modeling","Normalization","1NF","2NF","3NF","Denormalization","Primary keys",
    "Foreign keys","Natural keys","Surrogate keys","Composite keys","Unique constraints",
    "Check constraints","Default values","Referential integrity","Cascade behavior","ON DELETE",
    "ON UPDATE" ] },
  { stack: "postgres", n: 5, name: "Subqueries & CTEs", tag: "red", items: [
    "Scalar subqueries","Correlated subqueries","EXISTS","NOT EXISTS","IN subqueries",
    "Common Table Expressions","WITH","Multiple CTEs","Recursive CTEs — conceptually",
    "CTE vs subquery","CTE readability vs performance considerations" ] },
  { stack: "postgres", n: 6, name: "Window functions", tag: "red", items: [
    "What window functions are","OVER()","PARTITION BY","ORDER BY inside window","ROW_NUMBER","RANK",
    "DENSE_RANK","LAG","LEAD","Running totals","Moving calculations","Top-N per group",
    "Ranking within groups" ] },
  { stack: "postgres", n: 7, name: "PostgreSQL data types", tag: "amber", items: [
    "INTEGER","BIGINT","NUMERIC","REAL","DOUBLE PRECISION","BOOLEAN","TEXT","VARCHAR","DATE",
    "TIMESTAMP","TIMESTAMPTZ","TIME","UUID","JSON","JSONB","Arrays","Enum types","Identity columns" ] },
  { stack: "postgres", n: 8, name: "Indexes", tag: "red", items: [
    "What an index is","B-tree index","Hash index — conceptual","Composite indexes","Unique indexes",
    "Partial indexes","Expression indexes","Multicolumn indexes","Index selectivity","Index ordering",
    "Index-only scans","Covering indexes","Index maintenance","Index storage cost",
    "Why too many indexes are bad","EXPLAIN","EXPLAIN ANALYZE","Sequential scan","Index scan",
    "Bitmap scan","Query planning","Query optimization" ] },
  { stack: "postgres", n: 9, name: "Transactions & concurrency", tag: "red", items: [
    "Transactions","BEGIN","COMMIT","ROLLBACK","ACID","Atomicity","Consistency","Isolation",
    "Durability","Concurrent transactions","Locks","Row-level locks","Table-level locks","Deadlocks",
    "Isolation levels","Read committed","Repeatable read","Serializable","Lost updates",
    "Race conditions" ] },
  { stack: "postgres", n: 10, name: "PostgreSQL-specific features", tag: "amber", items: [
    "Schemas","Sequences","Identity columns","Extensions","uuid-ossp / UUID concepts",
    "pgcrypto concept","Views","Materialized views","Functions","Stored procedures — conceptual",
    "Triggers","Generated columns","RETURNING","ON CONFLICT","Upsert","INSERT ... ON CONFLICT","COPY",
    "LISTEN / NOTIFY — conceptual" ] },
  { stack: "postgres", n: 11, name: "JSON & semi-structured data", tag: "amber", items: [
    "JSON vs JSONB","Storing JSONB","Querying JSONB","JSON operators","JSON path concepts",
    "Indexing JSONB","When JSONB is appropriate","When JSONB is a bad substitute for relational design" ] },
  { stack: "postgres", n: 12, name: "Pagination & query patterns", tag: "red", items: [
    "Offset pagination","LIMIT/OFFSET","Cursor pagination","Keyset pagination","Stable sorting",
    "Filtering + pagination","Search queries","Sorting with indexes","Large-table pagination",
    "Pagination performance" ] },
  { stack: "postgres", n: 13, name: "Performance", tag: "red", items: [
    "Query optimization","Index optimization","EXPLAIN ANALYZE","Slow query identification",
    "Sequential scans","Join performance","Sort performance","Aggregation performance",
    "Large result sets","Connection pooling","Prepared statements","Query timeouts",
    "Lock contention","Vacuum concepts","Table bloat concept","ANALYZE","Statistics","VACUUM",
    "VACUUM ANALYZE","Autovacuum concept" ] },
  { stack: "postgres", n: 14, name: "PostgreSQL + Node.js", tag: "red", items: [
    "PostgreSQL Node.js drivers","pg","Connection pools","Parameterized queries",
    "SQL injection prevention","Transactions from Node.js","Error handling","Query abstraction",
    "Repository/data-access layer","Connection lifecycle","Graceful shutdown","Migrations",
    "Transaction boundaries" ] },
  { stack: "postgres", n: 15, name: "ORM / query builders", tag: "amber", items: [
    "Prisma","Drizzle","Sequelize — conceptual","Knex — conceptual","Schema modeling","Relations",
    "Migrations","Transactions","Raw SQL","N+1 queries","Query optimization",
    "ORM vs raw SQL trade-offs" ] },
  { stack: "postgres", n: 16, name: "Migrations & database changes", tag: "red", items: [
    "Migration concept","Forward migrations","Rollbacks","Schema versioning",
    "Adding columns safely","Removing columns safely","Data migrations",
    "Backward-compatible migrations","Zero-downtime migration concepts" ] },
  { stack: "postgres", n: 17, name: "Backup, replication & scaling", tag: "amber", items: [
    "PostgreSQL backup concepts","pg_dump","pg_restore","Physical vs logical backups","WAL",
    "Replication","Streaming replication","Read replicas","Failover","High availability",
    "Connection poolers","PgBouncer concept","Horizontal scaling limitations","Partitioning" ] },
  { stack: "postgres", n: 18, name: "Advanced / optional", tag: "yellow", items: [
    "Table partitioning","Declarative partitioning","Row-level security","Full-text search",
    "tsvector","tsquery","PostGIS concept","Logical replication","Foreign Data Wrappers",
    "Advanced WAL internals","Query planner internals" ] },
  { stack: "graphql", n: 1, name: "GraphQL fundamentals", tag: "red", items: [
    "What GraphQL is","GraphQL vs REST","GraphQL architecture","Schema","Type system","Object types",
    "Scalar types","Custom scalars","Enum types","Input types","Interfaces","Unions","Lists",
    "Non-null !","Fields","Arguments","Query","Mutation","Subscription","Fragments","Variables",
    "Aliases","Directives","Introspection" ] },
  { stack: "graphql", n: 2, name: "Schema design", tag: "red", items: [
    "Schema-first design","Code-first design","Type relationships","Entity modeling","Input modeling",
    "Output modeling","Query design","Mutation design","Nested fields","Pagination schema design",
    "Filtering schema design","Sorting schema design","Search schema design","Reusable input types",
    "Reusable output types","Schema naming conventions","Schema evolution","Backward compatibility",
    "Deprecation" ] },
  { stack: "graphql", n: 3, name: "Resolvers", tag: "red", items: [
    "Resolver fundamentals","Root Query resolvers","Mutation resolvers","Field resolvers",
    "Resolver arguments","Parent/source object","Context","info parameter","Nested resolvers",
    "Resolver chaining","Resolver execution order","Async resolvers","Resolver error handling",
    "Resolver composition","Resolver abstraction","Resolver/service separation" ] },
  { stack: "graphql", n: 4, name: "Apollo Server", tag: "red", items: [
    "Apollo Server architecture","Apollo Server setup","Schema integration","Resolver integration",
    "Context setup","Middleware integration concepts","Authentication in context","Authorization",
    "Error handling","Plugins","Logging","Request lifecycle","Apollo Server configuration",
    "Production configuration" ] },
  { stack: "graphql", n: 5, name: "Query execution", tag: "red", items: [
    "Query execution flow","Field resolution","Resolver arguments","Nested execution",
    "Parallel field execution concept","Sequential dependency behavior","Null propagation",
    "Partial responses","Query errors","Variables","Fragments","Directives" ] },
  { stack: "graphql", n: 6, name: "Authentication & authorization", tag: "red", items: [
    "Authentication","Authorization","Context-based authentication","JWT with GraphQL",
    "Access tokens","Refresh tokens","Role-based authorization","Permission-based authorization",
    "Resolver-level authorization","Field-level authorization","Mutation authorization",
    "Protecting introspection conceptually","Tenant-aware authorization" ] },
  { stack: "graphql", n: 7, name: "Error handling", tag: "red", items: [
    "GraphQL errors","Resolver errors","Validation errors","Authentication errors",
    "Authorization errors","Business errors","Custom error classes","Error codes",
    "Partial responses","Error masking","Internal error logging","Client-safe error messages" ] },
  { stack: "graphql", n: 8, name: "N+1 problem & DataLoader", tag: "red", items: [
    "What N+1 is","Why nested resolvers cause N+1","DataLoader","Batching","Caching in DataLoader",
    "Per-request DataLoader lifecycle","Batch functions","Avoiding duplicate database queries",
    "DataLoader with MongoDB","DataLoader with REST services" ] },
  { stack: "graphql", n: 9, name: "Pagination", tag: "red", items: [
    "Offset pagination","Cursor pagination","Connection pattern","edges","node","pageInfo",
    "hasNextPage","hasPreviousPage","Cursors","Stable sorting","Pagination with filtering",
    "Pagination with nested fields","Pagination performance" ] },
  { stack: "graphql", n: 10, name: "Performance", tag: "red", items: [
    "N+1 prevention","DataLoader","Query complexity","Query depth","Large nested queries",
    "Resolver optimization","Database query optimization","Batching","Caching","Response size",
    "Pagination","Field selection","Persisted queries concept","Rate limiting","Query cost control" ] },
  { stack: "graphql", n: 11, name: "Security", tag: "red", items: [
    "Authentication","Authorization","Query depth limiting","Query complexity limiting",
    "Rate limiting","Introspection considerations","Input validation","Injection prevention",
    "Sensitive-field protection","Query abuse prevention","Request size limits",
    "Timeout strategies" ] },
  { stack: "graphql", n: 12, name: "Client-side GraphQL", tag: "amber", items: [
    "Apollo Client","Queries","Mutations","Variables","Fragments","Hooks","useQuery","useMutation",
    "Loading state","Error state","Cache","Cache normalization","Cache updates","Refetching",
    "Polling","Optimistic UI","Pagination","Cache invalidation" ] },
  { stack: "graphql", n: 13, name: "Apollo Client cache", tag: "amber", items: [
    "Normalized cache","Cache keys","Cache reads","Cache writes","Cache updates after mutations",
    "Optimistic updates","Refetch","Cache eviction","Cache invalidation","Pagination cache policies",
    "Local cache concepts" ] },
  { stack: "graphql", n: 14, name: "Subscriptions & real-time", tag: "amber", items: [
    "GraphQL subscriptions","WebSockets","Subscription lifecycle","Pub/Sub",
    "Subscription authorization","Scaling subscriptions","Reconnection concepts",
    "Real-time events" ] },
  { stack: "graphql", n: 15, name: "Federation & microservices", tag: "amber", items: [
    "GraphQL in microservices","API Gateway + GraphQL","GraphQL as BFF","Schema federation concept",
    "Apollo Federation","Subgraphs","Entities","Composition","Distributed resolvers",
    "Service ownership","Cross-service queries","Federation trade-offs" ] },
  { stack: "graphql", n: 16, name: "GraphQL + REST", tag: "red", items: [
    "GraphQL calling REST APIs","REST-backed resolvers","GraphQL as aggregation layer",
    "REST vs GraphQL trade-offs","Combining multiple REST services","Handling downstream failures",
    "Mapping REST responses to GraphQL types","REST pagination → GraphQL pagination",
    "REST authentication → GraphQL context" ] },
  { stack: "graphql", n: 17, name: "Schema evolution & governance", tag: "amber", items: [
    "Backward compatibility","Field deprecation","Schema versioning concepts","Breaking changes",
    "Naming conventions","Schema documentation","Schema ownership","Schema review",
    "Contract testing","Schema registry concepts" ] },
  { stack: "graphql", n: 18, name: "Testing", tag: "amber", items: [
    "Resolver unit testing","Schema testing","Query testing","Mutation testing",
    "Integration testing","Mocking downstream services","Testing authentication",
    "Testing authorization","Testing DataLoader","Contract testing","Error testing" ] },
  { stack: "graphql", n: 19, name: "Observability & production", tag: "amber", items: [
    "GraphQL logging","Resolver timing","Query tracing","Error monitoring","Request IDs",
    "Correlation IDs","Query metrics","Resolver metrics","Slow-query detection",
    "Apollo monitoring concepts","Production debugging" ] },
  { stack: "graphql", n: 20, name: "Advanced / conceptual", tag: "yellow", items: [
    "GraphQL execution specification","AST","Query validation internals","Query parsing",
    "Execution engine concepts","Custom GraphQL directives","Custom execution behavior",
    "Federation internals","Schema stitching","GraphQL over non-HTTP transports" ] },
  { stack: "devops", n: 1, name: "Linux & command line", tag: "red", items: [
    "Linux fundamentals","Filesystem and directory structure","File permissions and ownership",
    "Users and groups","Processes and signals","CPU, memory, disk and process monitoring",
    "Environment variables and PATH","File/text utilities (grep, find, awk, sed)","curl / wget",
    "SSH","Linux logs","Basic shell scripting" ] },
  { stack: "devops", n: 2, name: "Git & version control", tag: "red", items: [
    "Git fundamentals","Branching and merging","Rebase","Merge conflict resolution",
    "reset, revert, stash","Tags and releases","Pull request workflow","Branching strategies",
    "Git hooks — conceptual" ] },
  { stack: "devops", n: 3, name: "Networking", tag: "red", items: [
    "IP addresses and ports","TCP vs UDP","HTTP / HTTPS","DNS and DNS resolution",
    "TLS/SSL fundamentals","CORS","Reverse proxy","Load balancer","Firewall / security groups",
    "Public vs private networking","Proxy concepts" ] },
  { stack: "devops", n: 4, name: "Docker", tag: "red", items: [
    "Containers vs virtual machines","Docker architecture","Images vs containers","Dockerfile",
    "Image layers","Container lifecycle","Port mapping","Volumes","Environment variables",
    "Container networking",".dockerignore","Multi-stage builds","Docker Compose",
    "Container health checks","Docker registry" ] },
  { stack: "devops", n: 5, name: "CI/CD", tag: "red", items: [
    "CI vs CD","Pipeline stages","Automated build","Automated testing","Artifact management",
    "Docker image build in CI","Secrets and environment variables","Deployment automation",
    "Deployment rollback","Pipeline failure handling","GitHub Actions",
    "GitLab CI / Azure DevOps — conceptual" ] },
  { stack: "devops", n: 6, name: "Cloud fundamentals", tag: "amber", items: [
    "Cloud computing fundamentals","Regions and availability zones","Compute","Virtual machines",
    "Container services","Container registry","Object storage","Managed databases",
    "Cloud networking","IAM","Secrets management","Cloud monitoring","Scaling","Cost fundamentals",
    "Azure CLI","Azure Container Registry","Azure App Service","Azure Container Apps","Azure VM",
    "Azure Storage","Azure Key Vault","Azure Monitor" ] },
  { stack: "devops", n: 7, name: "Nginx / reverse proxy", tag: "amber", items: [
    "Reverse proxy configuration","Serving static files","Proxying Node.js applications",
    "Port forwarding","SSL termination","Load balancing","HTTP headers","Compression","Caching",
    "SPA routing","Nginx logs" ] },
  { stack: "devops", n: 8, name: "Kubernetes", tag: "amber", items: [
    "Why Kubernetes exists","Cluster","Node","Pod","Deployment","ReplicaSet","Service","Ingress",
    "Namespace","ConfigMap","Secret","Labels and selectors","Health probes",
    "Resource requests and limits","Rolling deployments","Rollbacks","Horizontal scaling",
    "Basic kubectl" ] },
  { stack: "devops", n: 9, name: "Monitoring & observability", tag: "amber", items: [
    "Application logging","Infrastructure logging","Metrics","Tracing","Health checks",
    "Liveness vs readiness","CPU monitoring","Memory monitoring","Disk monitoring",
    "Network monitoring","Error-rate monitoring","Latency monitoring","Alerts",
    "Centralized logging","Prometheus — conceptual","Grafana — conceptual" ] },
  { stack: "devops", n: 10, name: "DevOps security", tag: "amber", items: [
    "SSH security","Secrets management","IAM","Least privilege","TLS/HTTPS",
    "Firewall/security groups","Container security","Image scanning","Dependency scanning",
    "Secret scanning","Network segmentation","OWASP basics" ] },
  { stack: "devops", n: 11, name: "Deployment strategies", tag: "amber", items: [
    "Rolling deployment","Blue-green deployment","Canary deployment","Zero-downtime deployment",
    "Health-check-based deployment","Rollback strategy","Versioned artifacts",
    "Database migration during deployment" ] },
  { stack: "devops", n: 12, name: "Infrastructure as Code", tag: "yellow", items: [
    "Infrastructure as Code","Terraform fundamentals","Providers","Resources","Variables",
    "Outputs","State","Modules","terraform plan","terraform apply" ] },
  { stack: "devops", n: 13, name: "Production troubleshooting", tag: "red", items: [
    "Application won't start","Container crashes","Container restart loop","Port already in use",
    "DNS failure","SSL/TLS failure","Image pull failure","High CPU","High memory","Disk full",
    "Database connection failure","Network connectivity failure","Slow API","Failed health check",
    "Deployment failure","Rollback a broken deployment","Diagnose from logs and metrics" ] },
  { stack: "devops", n: 14, name: "Scaling & reliability", tag: "amber", items: [
    "Stateless application design","Horizontal scaling","Load balancing","Auto-scaling",
    "Connection pooling","Caching","Queue/background jobs","Health-based scaling",
    "High availability","Failure isolation","Graceful shutdown","Disaster recovery concepts" ] },
  { stack: "devops", n: 15, name: "Advanced DevOps", tag: "yellow", items: [
    "Helm","GitOps","Argo CD — conceptual","Service mesh","Istio — conceptual",
    "Kubernetes operators","Advanced Terraform","Advanced networking",
    "Advanced Kubernetes troubleshooting" ] },
];
const STACK_LABEL = {
  react: "React", next: "Next.js", reactnative: "React Native",
  node: "Node.js", express: "Express + REST", mongo: "MongoDB",
  graphql: "GraphQL", postgres: "PostgreSQL", micro: "Microservices",
  sysdesign: "System Design", devops: "DevOps", python: "Python + Pandas",
  dsa: "DSA", js: "JavaScript", genai: "Generative AI", agentic: "Agentic AI"
};
const TAG_LABEL = { red: "Core", amber: "Strong", yellow: "Conceptual" };

const SIDEBAR_GROUPS = [
  { label: "CORE", stacks: ["js", "react", "node", "mongo", "express", "dsa", "sysdesign"] },
  { label: "SECONDARY", stacks: ["graphql", "postgres", "micro", "devops", "python"] },
  { label: "AI", stacks: ["genai", "agentic"] },
  { label: "SPECIALIZATION", stacks: ["next", "reactnative"] },
];
const ALL_STACKS = SIDEBAR_GROUPS.reduce(function (acc, g) { return acc.concat(g.stacks); }, []);

/* ---------------- state ---------------- */
let checked = {};     // itemId -> bool  ("marked learned")
let tierMeta = {};    // tierKey -> {lastReviewed,nextReview}  (auto-managed review schedule)
let recallMap = {};   // itemId -> {confidence,lastSeen}  (practice-drill recall history)
let projects = [];    // [{id,name,stacks:[],notes}]
let subNotes = {};    // itemId -> string  (per-subtopic notepad)

const ui = {
  page: "overview",
  stack: null,
  filterTag: "all",
  search: "",
  drawer: null,          // {mode:'topic'|'practice', tierKey, search, practice}
  studyQueue: null,
  studyTargetMin: 60,
  _studyDone: {},
  interviewSession: null,
};

/* ---------------- id helpers (kept identical for backward-compatible storage) ---------------- */
function itemId(tier, idx) {
  const prefix = tier.stack === "react" ? "" : tier.stack + "-";
  return prefix + "t" + tier.n + "-" + idx;
}
function tierKey(tier) { return tier.stack + "-" + tier.n; }
function getTierByKey(key) {
  const idx = key.lastIndexOf("-");
  const stack = key.slice(0, idx);
  const n = parseInt(key.slice(idx + 1), 10);
  return TIERS.find(function (t) { return t.stack === stack && t.n === n; });
}
function escapeHtml(str) {
  return String(str || "").replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; });
}
function escapeAttr(str) { return escapeHtml(str).replace(/"/g, "&quot;"); }

/* ---------------- dates & spaced review ---------------- */
function todayISO() { return new Date().toISOString().slice(0, 10); }
function addDaysISO(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function formatDateDisplay(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function reviewIntervalDays(mastery) {
  const map = { 0: 1, 1: 2, 2: 4, 3: 9, 4: 18, 5: 35 };
  const rounded = Math.round(mastery);
  return map[rounded] !== undefined ? map[rounded] : 2;
}

/* ---------------- mastery model: derives from the simple learned-checkbox fraction ---------------- */
function getMeta(tier) {
  const key = tierKey(tier);
  if (!tierMeta[key]) tierMeta[key] = { lastReviewed: null, nextReview: null, answer: "", evidence: "" };
  return tierMeta[key];
}
function tierSubCounts(tier) {
  let done = 0;
  tier.items.forEach(function (_, i) { if (checked[itemId(tier, i)]) done++; });
  return { done: done, total: tier.items.length };
}
function tierMastery(tier) {
  const c = tierSubCounts(tier);
  if (!c.total) return 0;
  return (c.done / c.total) * 5;
}
function touchTierReview(tier) {
  const meta = getMeta(tier);
  const avg = tierMastery(tier);
  meta.lastReviewed = todayISO();
  meta.nextReview = avg > 0 ? addDaysISO(todayISO(), reviewIntervalDays(avg)) : null;
  saveState();
}
function toggleLearned(tier, idx) {
  const id = itemId(tier, idx);
  checked[id] = !checked[id];
  saveChecked();
  touchTierReview(tier);
}

/* ---------------- aggregate metrics ---------------- */
function stackMasteryPct(stackKey) {
  const tiers = TIERS.filter(function (t) { return t.stack === stackKey; });
  if (!tiers.length) return 0;
  const sum = tiers.reduce(function (a, t) { return a + tierMastery(t); }, 0);
  return Math.round((sum / (tiers.length * 5)) * 100);
}
function overallReadinessPct() {
  if (!TIERS.length) return 0;
  const sum = TIERS.reduce(function (a, t) { return a + tierMastery(t); }, 0);
  return Math.round((sum / (TIERS.length * 5)) * 100);
}
function coreMasteryPct() {
  const core = TIERS.filter(function (t) { return t.tag === "red"; });
  if (!core.length) return 0;
  const sum = core.reduce(function (a, t) { return a + tierMastery(t); }, 0);
  return Math.round((sum / (core.length * 5)) * 100);
}
function weakTiers() {
  return TIERS.filter(function (t) { const m = tierMastery(t); return m >= 1 && m <= 2; })
    .sort(function (a, b) { return tierMastery(a) - tierMastery(b); });
}
function criticalWeak() { return weakTiers().filter(function (t) { return t.tag === "red"; }); }
function improvementWeak() { return weakTiers().filter(function (t) { return t.tag !== "red"; }); }
function dueTiers() {
  const today = todayISO();
  return TIERS.filter(function (t) {
    const meta = getMeta(t);
    return tierMastery(t) > 0 && meta.nextReview && meta.nextReview <= today;
  }).sort(function (a, b) { return (getMeta(a).nextReview || "").localeCompare(getMeta(b).nextReview || ""); });
}

/* ---------------- persistence (MongoDB via backend API) ---------------- */
const API_BASE = "/api/state";
let _saveTimer = null;

// Debounced full-state save to the backend. Both checked-marks and the rest of
// the state live in one Mongo document, so both save functions funnel here.
function persist() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(function () {
    const payload = JSON.stringify({
      checked: checked,
      tierMeta: tierMeta,
      recall: recallMap,
      projects: projects,
      subNotes: subNotes,
    });
    fetch(API_BASE, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: payload,
    }).catch(function (e) { console.error("save failed", e); });
  }, 300);
}

async function saveChecked() { persist(); }
async function saveState() { persist(); }

async function loadChecked() { /* loaded together in loadState() */ }
async function loadState() {
  try {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const parsed = await res.json();
    checked = parsed.checked || {};
    tierMeta = parsed.tierMeta || {};
    recallMap = parsed.recall || {};
    projects = parsed.projects || [];
    subNotes = parsed.subNotes || {};
  } catch (e) {
    console.error("load failed", e);
    checked = {}; tierMeta = {}; recallMap = {}; projects = []; subNotes = {};
  }
}

/* ================= RENDER: sidebar ================= */
function renderSidebar() {
  const el = document.getElementById("sidebar");
  let html = "";
  html += '<div class="nav-overview' + (ui.page === "overview" ? " active" : "") + '" data-nav="overview">Overview</div>';
  SIDEBAR_GROUPS.forEach(function (group) {
    html += '<div class="nav-group"><div class="nav-group-label">' + group.label + "</div>";
    group.stacks.forEach(function (s) {
      const pct = stackMasteryPct(s);
      const active = (ui.page === "stack" && ui.stack === s) ? " active" : "";
      const pctHtml = pct > 0
        ? '<span class="nav-pct-wrap"><span class="nav-bar"><div style="width:' + pct + '%"></div></span><span class="nav-pct">' + pct + '%</span></span>'
        : '<span class="nav-pct zero">—</span>';
      html += '<div class="nav-item' + active + '" data-nav="stack" data-stack="' + s + '">' +
        '<span class="nav-label">' + STACK_LABEL[s] + "</span>" + pctHtml + "</div>";
    });
    html += "</div>";
  });
  html += '<div class="nav-footer">' +
    '<div class="nav-item' + (ui.page === "weak" ? " active" : "") + '" data-nav="weak">Weak Areas</div>' +
    '<div class="nav-item' + (ui.page === "study" ? " active" : "") + '" data-nav="study">Study Mode</div>' +
    '<div class="nav-item' + (ui.page === "interview" ? " active" : "") + '" data-nav="interview">Interview Mode</div>' +
    '<div class="nav-item' + (ui.page === "projects" ? " active" : "") + '" data-nav="projects">Projects</div>' +
    "</div>";
  el.innerHTML = html;

  el.querySelectorAll("[data-nav]").forEach(function (node) {
    node.addEventListener("click", function () {
      const nav = node.getAttribute("data-nav");
      if (nav === "stack") {
        ui.page = "stack"; ui.stack = node.getAttribute("data-stack"); ui.filterTag = "all"; ui.search = "";
      } else { ui.page = nav; }
      closeMobileSidebar();
      renderAll();
    });
  });
}

/* ================= RENDER: overview ================= */
function kpiCard(label, value, cls) {
  return '<div class="kpi-card ' + (cls || "") + '"><div class="kpi-label">' + label + '</div><div class="kpi-value">' + value + "</div></div>";
}
function renderOverviewPage(main) {
  const overall = overallReadinessPct();
  const core = coreMasteryPct();
  const weak = weakTiers();
  const due = dueTiers();

  let html = '<div class="page-title">Overview</div>';
  html += '<div class="readiness-banner"><div class="rb-top"><h2>Overall Interview Readiness</h2><span class="rb-pct">' + overall + '%</span></div>';
  html += '<div class="readiness-bar"><div style="width:' + overall + '%"></div></div>';
  html += '<div class="legend-row"><span><i class="dot red"></i>Core</span><span><i class="dot amber"></i>Strong</span><span><i class="dot yellow"></i>Conceptual</span></div>';
  html += "</div>";

  html += '<div class="kpi-grid">' +
    kpiCard("Core Mastery", core + "%") +
    kpiCard("Interview Ready", overall + "%") +
    kpiCard("Weak Areas", String(weak.length), weak.length ? "warn" : "") +
    kpiCard("Due For Review", String(due.length), due.length ? "warn" : "") +
    "</div>";

  html += '<div class="section-title">Stack Readiness</div><div class="list-card">';
  ALL_STACKS.forEach(function (s) {
    const pct = stackMasteryPct(s);
    html += '<div class="readiness-list-row" data-goto-stack="' + s + '">' +
      '<span class="rlr-label">' + STACK_LABEL[s] + "</span>" +
      '<div class="rlr-bar"><div style="width:' + pct + '%"></div></div>' +
      '<span class="rlr-pct">' + (pct > 0 ? pct + "%" : "—") + "</span></div>";
  });
  html += "</div>";

  html += '<div class="overview-cols">';
  html += '<div><div class="section-title">Weakest Areas</div><div class="list-card">';
  if (!weak.length) {
    html += '<div class="empty-note">No weak areas flagged yet — mark a few subtopics learned inside a topic to populate this.</div>';
  } else {
    weak.slice(0, 6).forEach(function (t) {
      html += '<div class="list-row" data-open-topic="' + tierKey(t) + '">' +
        '<span class="lr-name">' + t.name + "</span>" +
        '<span class="lr-meta">' + tierMastery(t).toFixed(1) + "/5</span></div>";
    });
  }
  html += "</div></div>";

  html += '<div><div class="section-title">Review Queue</div><div class="list-card">';
  if (!due.length) {
    html += '<div class="empty-note">Nothing due. Rate a few subtopics to start a review schedule.</div>';
  } else {
    due.slice(0, 6).forEach(function (t) {
      html += '<div class="list-row" data-open-topic="' + tierKey(t) + '">' +
        '<span class="lr-name">' + t.name + "</span>" +
        '<span class="lr-meta">' + STACK_LABEL[t.stack] + "</span></div>";
    });
  }
  html += "</div></div></div>";

  main.innerHTML = '<div class="main-inner">' + html + "</div>";
  main.querySelectorAll("[data-goto-stack]").forEach(function (n) {
    n.addEventListener("click", function () {
      ui.page = "stack"; ui.stack = n.getAttribute("data-goto-stack"); ui.filterTag = "all"; ui.search = "";
      renderAll();
    });
  });
  main.querySelectorAll("[data-open-topic]").forEach(function (n) {
    n.addEventListener("click", function () { openTopicDrawer(n.getAttribute("data-open-topic")); });
  });
}

/* ================= RENDER: stack page ================= */
function renderStackPage(main, stackKey) {
  const tiers = TIERS.filter(function (t) { return t.stack === stackKey; });
  const pct = stackMasteryPct(stackKey);

  let html = '<div class="breadcrumb"><b data-goto="overview">Overview</b> / ' + STACK_LABEL[stackKey] + "</div>";
  html += '<div class="page-title">' + STACK_LABEL[stackKey] +
    ' <span style="color:var(--text-muted);font-family:var(--mono);font-size:14px;font-weight:400;">' + pct + '% ready</span></div>';

  html += '<input type="text" class="search-input" id="stackSearch" placeholder="Search ' + STACK_LABEL[stackKey] + ' concepts..." value="' + escapeAttr(ui.search) + '">';

  html += '<div class="filter-row">';
  ["all", "red", "amber", "yellow"].forEach(function (f) {
    const label = f === "all" ? "All" : TAG_LABEL[f];
    html += '<div class="filter-chip' + (ui.filterTag === f ? " active" : "") + '" data-filter="' + f + '">' + label + "</div>";
  });
  html += "</div>";

  const q = ui.search.trim().toLowerCase();
  const filtered = tiers.filter(function (t) {
    if (ui.filterTag !== "all" && t.tag !== ui.filterTag) return false;
    if (!q) return true;
    if (t.name.toLowerCase().indexOf(q) !== -1) return true;
    return t.items.some(function (i) { return i.toLowerCase().indexOf(q) !== -1; });
  });

  html += '<div class="comp-grid">';
  if (!filtered.length) html += '<div class="empty-note">No competencies match.</div>';
  filtered.forEach(function (t) {
    const mastery = tierMastery(t);
    const mpct = Math.round((mastery / 5) * 100);
    const sub = tierSubCounts(t);
    const meta = getMeta(t);
    const isDue = mastery > 0 && meta.nextReview && meta.nextReview <= todayISO();
    html += '<div class="comp-card" data-open-topic="' + tierKey(t) + '">' +
      '<div class="cc-top"><span class="cc-name">' + t.name + '</span><span class="tag ' + t.tag + '">' + TAG_LABEL[t.tag] + "</span></div>" +
      '<div class="cc-bar"><div style="width:' + mpct + '%"></div></div>' +
      '<div class="cc-meta"><span>' + mastery.toFixed(1) + "/5 mastery</span><span>" + sub.done + "/" + sub.total + " sub-topics</span></div>" +
      (isDue ? '<div class="cc-meta" style="margin-top:4px;"><span class="cc-due">Due for review</span></div>' : "") +
      "</div>";
  });
  html += "</div>";

  main.innerHTML = '<div class="main-inner">' + html + "</div>";

  const crumb = main.querySelector('[data-goto="overview"]');
  if (crumb) crumb.addEventListener("click", function () { ui.page = "overview"; renderAll(); });
  main.querySelectorAll("[data-filter]").forEach(function (n) {
    n.addEventListener("click", function () { ui.filterTag = n.getAttribute("data-filter"); renderAll(); });
  });
  const searchInput = main.querySelector("#stackSearch");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      ui.search = searchInput.value;
      renderStackPage(main, stackKey);
      const el = document.getElementById("stackSearch");
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    });
  }
  main.querySelectorAll("[data-open-topic]").forEach(function (n) {
    n.addEventListener("click", function () { openTopicDrawer(n.getAttribute("data-open-topic")); });
  });
}

/* ================= DRAWER: navigation state ================= */
function openTopicDrawer(key) {
  ui.drawer = { mode: "topic", tierKey: key, search: "", practice: null };
  renderDrawer();
}
function closeDrawer() { ui.drawer = null; renderDrawer(); }
function backInDrawer() {
  if (!ui.drawer) return;
  if (ui.drawer.mode === "practice") {
    const back = ui.drawer.practice.back;
    if (back) { ui.drawer.mode = back.mode; ui.drawer.practice = null; renderDrawer(); }
    else { closeDrawer(); }
  } else { closeDrawer(); }
}
function openPracticeFromDrawer(pool, title, backState) {
  ui.drawer.mode = "practice";
  ui.drawer.practice = { pool: pool, idx: 0, responses: {}, title: title, finished: false, back: backState };
  renderDrawer();
}
function refreshUnderlyingPage() {
  renderSidebar();
  const main = document.getElementById("main");
  if (ui.page === "stack") renderStackPage(main, ui.stack);
  else if (ui.page === "overview") renderOverviewPage(main);
  else if (ui.page === "weak") renderWeakPage(main);
  else if (ui.page === "study") renderStudyPage(main);
}

function renderDrawer() {
  const root = document.getElementById("drawerRoot");
  if (!ui.drawer) { root.innerHTML = ""; return; }
  if (ui.drawer.mode === "practice") return renderDrawerPractice(root);
  return renderDrawerTopic(root);
}

/* ---- topic panel: navigate + toggle subtopics directly, notes & evidence ---- */
function renderDrawerTopic(root) {
  const tier = getTierByKey(ui.drawer.tierKey);
  if (!tier) { root.innerHTML = ""; ui.drawer = null; return; }
  const meta = getMeta(tier);
  const avg = tierMastery(tier);
  const sub = tierSubCounts(tier);
  const q = (ui.drawer.search || "").trim().toLowerCase();
  const rows = tier.items.map(function (label, i) { return { label: label, i: i }; })
    .filter(function (o) { return !q || o.label.toLowerCase().indexOf(q) !== -1; });

  let html = '<div class="overlay-backdrop" data-dd-overlay></div><div class="detail-drawer">';
  html += '<button class="dd-close" data-dd-close type="button">&times;</button>';
  html += '<div class="dd-topline"><h2>' + tier.name + "</h2></div>";
  html += '<div class="dd-sub">' + STACK_LABEL[tier.stack] + ' &middot; <span class="tag ' + tier.tag + '">' + TAG_LABEL[tier.tag] + "</span></div>";
  html += '<div class="dd-mastery-line"><span>Mastery</span><span class="ddm-val">' + avg.toFixed(1) + " / 5</span></div>";
  html += '<div class="dd-mastery-bar"><div style="width:' + Math.round((avg / 5) * 100) + '%"></div></div>';
  html += '<div class="dd-sub" style="margin-bottom:12px;">' + sub.done + " / " + sub.total + " sub-topics complete</div>";
  html += '<input type="text" class="subtopic-search" data-subtopic-search placeholder="Search subtopics..." value="' + escapeAttr(ui.drawer.search || "") + '">';
  html += '<div class="subtopic-grid">';
  if (!rows.length) html += '<div class="empty-note">No matches.</div>';
  rows.forEach(function (o) {
    const id = itemId(tier, o.i);
    const done = !!checked[id];
    const note = subNotes[id] || "";
    const hasNote = note.trim().length > 0;
    html += '<div class="subtopic-block">' +
      '<div class="subtopic-row' + (done ? " sr-done" : "") + '">' +
        '<span class="sr-num">' + String(o.i + 1).padStart(2, "0") + "</span>" +
        '<span class="sr-label" data-toggle-sub="' + o.i + '">' + o.label + "</span>" +
        '<button class="sr-note-btn' + (hasNote ? " has-note" : "") + '" data-note-toggle="' + o.i + '" type="button" title="Notes">&#9998;</button>' +
        '<span class="sr-check" data-toggle-sub="' + o.i + '">' + (done ? "&#10003;" : "") + "</span>" +
      "</div>" +
      '<textarea class="sr-note" data-sub-note="' + id + '" placeholder="Notes for this subtopic..." ' +
        (hasNote ? "" : 'style="display:none;"') + ">" + escapeHtml(note) + "</textarea>" +
      "</div>";
  });
  html += "</div>";
  html += '<button class="btn primary" data-practice-topic type="button" style="margin-top:16px;width:100%;justify-content:center;">Practice Interview</button>';

  html += '<div class="dd-block" style="margin-top:20px;"><h3>Your Notes / Answer</h3>' +
    '<textarea data-dd-answer placeholder="Jot down how you would answer this...">' + escapeHtml(meta.answer || "") + "</textarea></div>";
  html += '<div class="dd-block"><h3>Evidence<span class="save-flag" data-dd-save-flag>Saved</span></h3>' +
    '<textarea data-dd-evidence placeholder="Project or example where you used this...">' + escapeHtml(meta.evidence || "") + "</textarea></div>";

  html += '<div class="dd-dates" style="margin-top:4px;"><span>Last reviewed: ' + formatDateDisplay(meta.lastReviewed) + '</span><span>Next review: ' + formatDateDisplay(meta.nextReview) + "</span></div>";
  html += "</div>";
  root.innerHTML = html;

  root.querySelector("[data-dd-overlay]").addEventListener("click", closeDrawer);
  root.querySelector("[data-dd-close]").addEventListener("click", closeDrawer);
  root.querySelectorAll("[data-toggle-sub]").forEach(function (n) {
    n.addEventListener("click", function () {
      const idx = parseInt(n.getAttribute("data-toggle-sub"), 10);
      toggleLearned(tier, idx);
      renderDrawerTopic(root);
      refreshUnderlyingPage();
    });
  });
  root.querySelectorAll("[data-note-toggle]").forEach(function (n) {
    n.addEventListener("click", function () {
      const block = n.closest(".subtopic-block");
      const ta = block.querySelector("[data-sub-note]");
      if (!ta) return;
      const showing = ta.style.display !== "none";
      ta.style.display = showing ? "none" : "block";
      if (!showing) ta.focus();
    });
  });
  let noteTimer = null;
  root.querySelectorAll("[data-sub-note]").forEach(function (ta) {
    ta.addEventListener("input", function () {
      const id = ta.getAttribute("data-sub-note");
      subNotes[id] = ta.value;
      const btn = ta.closest(".subtopic-block").querySelector("[data-note-toggle]");
      if (btn) btn.classList.toggle("has-note", ta.value.trim().length > 0);
      clearTimeout(noteTimer);
      noteTimer = setTimeout(function () {
        saveState();
        const flag = root.querySelector("[data-dd-save-flag]");
        if (flag) { flag.classList.add("show"); setTimeout(function () { flag.classList.remove("show"); }, 1200); }
      }, 500);
    });
  });
  const searchInput = root.querySelector("[data-subtopic-search]");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      ui.drawer.search = searchInput.value;
      renderDrawerTopic(root);
      const el = root.querySelector("[data-subtopic-search]");
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    });
  }
  const practiceBtn = root.querySelector("[data-practice-topic]");
  if (practiceBtn) {
    practiceBtn.addEventListener("click", function () {
      const pool = tier.items.map(function (label, i) { return { itemId: itemId(tier, i), label: label, tierKey: tierKey(tier) }; });
      openPracticeFromDrawer(pool, tier.name, { mode: "topic", tierKey: tierKey(tier) });
    });
  }

  const answerEl = root.querySelector("[data-dd-answer]");
  const evidenceEl = root.querySelector("[data-dd-evidence]");
  let saveTimer = null;
  function scheduleSave() {
    meta.answer = answerEl.value;
    meta.evidence = evidenceEl.value;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      saveState();
      const flag = root.querySelector("[data-dd-save-flag]");
      if (flag) { flag.classList.add("show"); setTimeout(function () { flag.classList.remove("show"); }, 1200); }
    }, 500);
  }
  if (answerEl) answerEl.addEventListener("input", scheduleSave);
  if (evidenceEl) evidenceEl.addEventListener("input", scheduleSave);
}

/* ---- scoped practice (drawer-hosted) ---- */
function renderDrawerPractice(root) {
  const session = ui.drawer.practice;
  let html = '<div class="overlay-backdrop" data-dd-overlay></div><div class="detail-drawer">';
  html += '<button class="dd-close" data-dd-close type="button">&times;</button>';
  html += '<div class="dd-topline"><button class="dd-back" data-dd-back type="button">&lsaquo; Back</button><h2 style="font-size:15px;">' + escapeHtml(session.title) + " Practice</h2></div>";
  html += practiceBodyHTML(session);
  if (!session.finished) html += '<div class="practice-exit" data-practice-back-link>Back without finishing</div>';
  html += "</div>";
  root.innerHTML = html;

  root.querySelector("[data-dd-overlay]").addEventListener("click", closeDrawer);
  root.querySelector("[data-dd-close]").addEventListener("click", closeDrawer);
  root.querySelector("[data-dd-back]").addEventListener("click", backInDrawer);
  const backLink = root.querySelector("[data-practice-back-link]");
  if (backLink) backLink.addEventListener("click", backInDrawer);

  wirePracticeBody(root, session, {
    rerender: function () { renderDrawer(); },
    onExit: backInDrawer,
    onStudyThese: function () { ui.drawer = null; ui.page = "study"; renderAll(); },
  });
}

/* ================= shared practice-session rendering (used by drawer AND global Interview Mode) ================= */
function practiceQuestionHTML(session) {
  const entry = session.pool[session.idx];
  const tier = getTierByKey(entry.tierKey);
  const resp = session.responses[session.idx] || {};
  const isLast = session.idx === session.pool.length - 1;
  let html = '<div class="session-progress">Question ' + (session.idx + 1) + " / " + session.pool.length + "</div>";
  html += '<div class="session-card"><div class="sc-label">Explain this concept</div>';
  html += '<div class="sc-concept">' + entry.label + "</div>";
  html += '<div class="sc-tier">from ' + (tier ? tier.name : "") + " &middot; " + (tier ? STACK_LABEL[tier.stack] : "") + "</div>";
  html += '<span class="context-toggle" data-ctx-toggle>Show self-check</span>';
  if (tier) {
    html += '<div class="context-box" data-ctx-box style="display:none;">Tagged ' + TAG_LABEL[tier.tag] + ". Sibling concepts: " +
      tier.items.filter(function (i) { return i !== entry.label; }).slice(0, 5).join(", ") + ".</div>";
  }
  html += '<div class="practice-answer"><textarea data-practice-answer placeholder="Jot your answer (scratch space, not saved after this session)...">' + escapeHtml(resp.answer || "") + "</textarea></div>";
  html += '<div class="confidence-row">';
  for (let i = 1; i <= 5; i++) html += '<button class="confidence-btn' + (resp.confidence === i ? " active" : "") + '" data-confidence="' + i + '" type="button">' + i + "</button>";
  html += '</div><div class="confidence-caption"><span>Blank</span><span>Nailed it</span></div>';
  html += '<div class="practice-nav-row">' +
    '<button class="btn ghost" data-prev type="button"' + (session.idx === 0 ? " disabled" : "") + ">&lsaquo; Previous</button>" +
    '<button class="btn primary" data-next type="button">' + (isLast ? "Finish" : "Next &rsaquo;") + "</button>" +
    "</div></div>";
  return html;
}
function practiceResultsHTML(session) {
  const responded = Object.keys(session.responses).map(function (k) {
    return Object.assign({ idx: parseInt(k, 10) }, session.responses[k]);
  }).filter(function (r) { return r.confidence !== undefined && r.confidence !== null; });
  const avg = responded.length ? (responded.reduce(function (a, r) { return a + r.confidence; }, 0) / responded.length) : 0;
  const weakEntries = responded.filter(function (r) { return r.confidence <= 2; })
    .map(function (r) { return Object.assign({}, session.pool[r.idx], { confidence: r.confidence }); });
  let html = '<div class="session-card"><div class="sc-label">Average confidence</div><div class="sc-concept">' + avg.toFixed(1) + " / 5</div>";
  if (!responded.length) html += '<div class="empty-note">No concepts were rated this session.</div>';
  if (weakEntries.length) {
    html += '<div class="result-weak-list"><b style="font-size:12.5px;color:var(--text-muted);">Flagged weak (' + weakEntries.length + ")</b>";
    weakEntries.forEach(function (w) { html += '<div class="rw-row"><span>' + w.label + "</span><span>" + w.confidence + "/5</span></div>"; });
    html += "</div>";
  }
  html += '<div style="margin-top:18px;display:flex;gap:10px;justify-content:center;">' +
    '<button class="btn" data-practice-done type="button">Done</button>' +
    (weakEntries.length ? '<button class="btn primary" data-practice-study type="button">Study these weak areas</button>' : "") +
    "</div></div>";
  return html;
}
function practiceBodyHTML(session) { return session.finished ? practiceResultsHTML(session) : practiceQuestionHTML(session); }

function wirePracticeBody(container, session, opts) {
  const ctxToggle = container.querySelector("[data-ctx-toggle]");
  if (ctxToggle) {
    ctxToggle.addEventListener("click", function () {
      const box = container.querySelector("[data-ctx-box]");
      box.style.display = box.style.display === "none" ? "block" : "none";
    });
  }
  const answerEl = container.querySelector("[data-practice-answer]");
  if (answerEl) {
    answerEl.addEventListener("input", function () {
      session.responses[session.idx] = Object.assign({}, session.responses[session.idx], { answer: answerEl.value });
    });
  }
  container.querySelectorAll("[data-confidence]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const conf = parseInt(btn.getAttribute("data-confidence"), 10);
      session.responses[session.idx] = Object.assign({}, session.responses[session.idx], { confidence: conf });
      const entry = session.pool[session.idx];
      recallMap[entry.itemId] = { confidence: conf, lastSeen: todayISO() };
      saveState();
      opts.rerender();
    });
  });
  const prevBtn = container.querySelector("[data-prev]");
  if (prevBtn) prevBtn.addEventListener("click", function () { if (session.idx > 0) { session.idx--; opts.rerender(); } });
  const nextBtn = container.querySelector("[data-next]");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (session.idx < session.pool.length - 1) session.idx++; else session.finished = true;
      opts.rerender();
    });
  }
  const doneBtn = container.querySelector("[data-practice-done]");
  if (doneBtn) doneBtn.addEventListener("click", opts.onExit);
  const studyBtn = container.querySelector("[data-practice-study]");
  if (studyBtn) {
    studyBtn.addEventListener("click", function () {
      const responded = Object.keys(session.responses).map(function (k) { return Object.assign({ idx: parseInt(k, 10) }, session.responses[k]); });
      const weakKeys = responded.filter(function (r) { return r.confidence <= 2; }).map(function (r) { return session.pool[r.idx].tierKey; });
      ui.studyQueue = weakKeys.filter(function (v, i, a) { return a.indexOf(v) === i; });
      ui._studyDone = {};
      opts.onStudyThese();
    });
  }
}

/* ================= RENDER: weak areas ================= */
function renderWeakPage(main) {
  const crit = criticalWeak();
  const improve = improvementWeak();
  let html = '<div class="page-title">Weak Areas</div>';

  html += '<div class="weak-group"><h3><span class="dot red"></span> Critical</h3>';
  if (!crit.length) html += '<div class="empty-note">No critical weak areas right now.</div>';
  crit.forEach(function (t) {
    html += '<div class="weak-row" data-open-topic="' + tierKey(t) + '"><span>' + t.name +
      ' <span style="color:var(--text-muted);font-size:11px;">(' + STACK_LABEL[t.stack] + ')</span></span>' +
      '<span class="wr-meta">' + tierMastery(t).toFixed(1) + "/5</span></div>";
  });
  html += "</div>";

  html += '<div class="weak-group"><h3><span class="dot amber"></span> Needs improvement</h3>';
  if (!improve.length) html += '<div class="empty-note">Nothing here right now.</div>';
  improve.forEach(function (t) {
    html += '<div class="weak-row" data-open-topic="' + tierKey(t) + '"><span>' + t.name +
      ' <span style="color:var(--text-muted);font-size:11px;">(' + STACK_LABEL[t.stack] + ')</span></span>' +
      '<span class="wr-meta">' + tierMastery(t).toFixed(1) + "/5</span></div>";
  });
  html += "</div>";

  if (crit.length + improve.length > 0) html += '<button class="btn primary" id="studyWeakBtn" type="button">Study Weak Areas</button>';

  main.innerHTML = '<div class="main-inner">' + html + "</div>";
  main.querySelectorAll("[data-open-topic]").forEach(function (n) {
    n.addEventListener("click", function () { openTopicDrawer(n.getAttribute("data-open-topic")); });
  });
  const btn = document.getElementById("studyWeakBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      ui.studyQueue = crit.concat(improve).map(tierKey);
      ui._studyDone = {};
      ui.page = "study";
      renderAll();
    });
  }
}

/* ================= RENDER: study mode ================= */
function renderStudyPage(main) {
  if (!ui.studyQueue || !ui.studyQueue.length) {
    const due = dueTiers().map(tierKey);
    const weak = weakTiers().map(tierKey);
    ui.studyQueue = due.concat(weak).filter(function (v, i, a) { return a.indexOf(v) === i; }).slice(0, 5);
  }
  const queueTiers = ui.studyQueue.map(getTierByKey).filter(Boolean);
  const doneCount = queueTiers.filter(function (t) { return ui._studyDone[tierKey(t)]; }).length;

  let html = '<div class="page-title">Study Mode</div>';
  html += '<div class="study-config">Target time: <input type="number" id="targetMin" value="' + ui.studyTargetMin + '" min="10" step="5"> min' +
    ' <button class="btn" id="rebuildQueueBtn" type="button">Rebuild queue</button></div>';
  html += '<div class="progress-strip">Progress: ' + doneCount + " / " + queueTiers.length + "</div>";

  if (!queueTiers.length) {
    html += '<div class="empty-note">Nothing queued. Rate a few subtopics so Study Mode has weak/due topics to pull from.</div>';
  } else {
    queueTiers.forEach(function (t) {
      const isDone = !!ui._studyDone[tierKey(t)];
      html += '<div class="queue-row' + (isDone ? " done" : "") + '">' +
        '<input type="checkbox" data-study-done="' + tierKey(t) + '" ' + (isDone ? "checked" : "") + ">" +
        '<span class="qr-name">' + t.name + ' <span style="color:var(--text-muted);font-size:11.5px;">(' + STACK_LABEL[t.stack] + ")</span></span>" +
        '<span class="qr-tag tag ' + t.tag + '">' + TAG_LABEL[t.tag] + "</span>" +
        '<button class="btn ghost" data-open-topic="' + tierKey(t) + '" type="button" style="padding:6px 10px;font-size:12px;">Open</button>' +
        "</div>";
    });
  }

  main.innerHTML = '<div class="main-inner">' + html + "</div>";

  const targetInput = document.getElementById("targetMin");
  targetInput.addEventListener("change", function () { ui.studyTargetMin = parseInt(targetInput.value, 10) || 60; });
  document.getElementById("rebuildQueueBtn").addEventListener("click", function () {
    ui.studyQueue = null; ui._studyDone = {}; renderAll();
  });
  main.querySelectorAll("[data-study-done]").forEach(function (cb) {
    cb.addEventListener("change", function () {
      ui._studyDone[cb.getAttribute("data-study-done")] = cb.checked;
      renderStudyPage(main);
    });
  });
  main.querySelectorAll("[data-open-topic]").forEach(function (n) {
    n.addEventListener("click", function () { openTopicDrawer(n.getAttribute("data-open-topic")); });
  });
}

/* ================= RENDER: interview mode (global, main-page hosted) ================= */
function buildInterviewPool(length) {
  const pool = [];
  const seen = {};
  function addFromTiers(arr) {
    arr.forEach(function (t) {
      t.items.forEach(function (label, i) {
        const id = itemId(t, i);
        if (!seen[id]) { seen[id] = true; pool.push({ itemId: id, label: label, tierKey: tierKey(t) }); }
      });
    });
  }
  addFromTiers(dueTiers());
  addFromTiers(weakTiers());
  if (pool.length < length) {
    const rest = [];
    TIERS.forEach(function (t) {
      t.items.forEach(function (label, i) {
        const id = itemId(t, i);
        if (!seen[id]) rest.push({ itemId: id, label: label, tierKey: tierKey(t) });
      });
    });
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = rest[i]; rest[i] = rest[j]; rest[j] = tmp;
    }
    pool.push.apply(pool, rest);
  }
  return pool.slice(0, length);
}
function renderInterviewPage(main) {
  if (!ui.interviewSession) {
    let html = '<div class="page-title">Interview Mode</div>';
    html += '<div class="settings-card"><p style="margin:0 0 12px;font-size:13px;color:var(--text-secondary);">' +
      "Rapid-fire recall drill across everything that is due for review or already flagged weak. " +
      "It does not show reference answers — use it for active recall, then log real answers per-subtopic if useful.</p>" +
      '<div class="study-config">Session length: ' +
      '<select id="sessionLen"><option value="10">10</option><option value="20" selected>20</option><option value="30">30</option></select>' +
      '<button class="btn primary" id="startInterviewBtn" type="button">Start drill</button></div></div>';
    main.innerHTML = '<div class="main-inner">' + html + "</div>";
    document.getElementById("startInterviewBtn").addEventListener("click", function () {
      const len = parseInt(document.getElementById("sessionLen").value, 10);
      ui.interviewSession = { pool: buildInterviewPool(len), idx: 0, responses: {}, finished: false, title: "Interview Mode" };
      renderAll();
    });
    return;
  }
  const session = ui.interviewSession;
  let html = '<div class="page-title">Interview Mode</div>';
  html += practiceBodyHTML(session);
  if (!session.finished) html += '<div class="practice-exit" data-practice-exit>End session early</div>';
  main.innerHTML = '<div class="main-inner">' + html + "</div>";

  const exitLink = main.querySelector("[data-practice-exit]");
  if (exitLink) exitLink.addEventListener("click", function () { ui.interviewSession = null; ui.page = "overview"; renderAll(); });

  wirePracticeBody(main, session, {
    rerender: function () { renderInterviewPage(main); },
    onExit: function () { ui.interviewSession = null; ui.page = "overview"; renderAll(); },
    onStudyThese: function () { ui.interviewSession = null; ui.page = "study"; renderAll(); },
  });
}

/* ================= RENDER: projects ================= */
function renderProjectsPage(main) {
  let html = '<div class="page-title">Projects</div>';
  html += '<div class="empty-note" style="padding:0 0 14px;">Map your real projects to the stacks they used — this turns tracked concepts into interview stories.</div>';
  if (!projects.length) html += '<div class="empty-note">No projects added yet.</div>';
  projects.forEach(function (p) {
    html += '<div class="project-card"><div class="pc-top"><span class="pc-name">' + escapeHtml(p.name) + "</span>" +
      '<button class="btn ghost" data-remove-project="' + p.id + '" type="button" style="padding:4px 10px;font-size:11.5px;">Remove</button></div>' +
      '<div class="pc-tags">' + p.stacks.map(function (s) { return '<span class="pc-tag">' + (STACK_LABEL[s] || s) + "</span>"; }).join("") + "</div>" +
      (p.notes ? '<div class="pc-notes">' + escapeHtml(p.notes) + "</div>" : "") +
      "</div>";
  });

  html += '<div class="project-form"><h3 style="margin:0 0 10px;font-size:13px;">Add a project</h3>' +
    '<input type="text" id="projName" placeholder="Project name">' +
    '<div class="checkbox-tag-grid" id="projStackGrid">' +
    ALL_STACKS.map(function (s) { return '<span class="checkbox-tag" data-tag-stack="' + s + '">' + STACK_LABEL[s] + "</span>"; }).join("") +
    "</div>" +
    '<textarea id="projNotes" placeholder="What did you build / what did you do?"></textarea>' +
    '<div style="margin-top:10px;"><button class="btn primary" id="addProjectBtn" type="button">Add project</button></div>' +
    "</div>";

  main.innerHTML = '<div class="main-inner">' + html + "</div>";

  const selectedStacks = {};
  main.querySelectorAll("[data-tag-stack]").forEach(function (tagEl) {
    tagEl.addEventListener("click", function () {
      const s = tagEl.getAttribute("data-tag-stack");
      if (selectedStacks[s]) { delete selectedStacks[s]; tagEl.classList.remove("active"); }
      else { selectedStacks[s] = true; tagEl.classList.add("active"); }
    });
  });
  document.getElementById("addProjectBtn").addEventListener("click", function () {
    const nameEl = document.getElementById("projName");
    const notesEl = document.getElementById("projNotes");
    const name = nameEl.value.trim();
    if (!name) { nameEl.focus(); return; }
    projects.push({ id: "p" + Date.now(), name: name, stacks: Object.keys(selectedStacks), notes: notesEl.value.trim() });
    saveState();
    renderProjectsPage(main);
  });
  main.querySelectorAll("[data-remove-project]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("data-remove-project");
      projects = projects.filter(function (p) { return p.id !== id; });
      saveState();
      renderProjectsPage(main);
    });
  });
}

/* ================= RENDER: settings ================= */
function renderSettingsPage(main) {
  const totalItems = TIERS.reduce(function (a, t) { return a + t.items.length; }, 0);
  let html = '<div class="page-title">Settings</div>';
  html += '<div class="settings-card"><h3 style="margin:0 0 6px;font-size:13px;">About this tracker</h3>' +
    '<p style="font-size:12.5px;color:var(--text-secondary);margin:0;">' + TIERS.length + " competencies (" + totalItems +
    " subtopics) across " + ALL_STACKS.length + " stacks. A competency's mastery is simply the share of its subtopics " +
    "marked learned — mark subtopics inside a topic to move the numbers. Saves automatically as you go.</p></div>";
  html += '<div class="settings-card danger-zone"><h3>Danger Zone</h3>' +
    "<p>Reset all learned-marks and recall history. This cannot be undone. Projects are kept.</p>" +
    '<button class="btn danger" id="resetBtn" type="button">Reset all progress</button>' +
    '<div class="confirm-row" id="confirmRow" style="display:none;">' +
    '<span style="font-size:12.5px;">Are you sure?</span>' +
    '<button class="btn danger" id="confirmResetBtn" type="button">Yes, reset everything</button>' +
    '<button class="btn ghost" id="cancelResetBtn" type="button">Cancel</button>' +
    "</div></div>";
  main.innerHTML = '<div class="main-inner">' + html + "</div>";

  document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("confirmRow").style.display = "flex";
  });
  document.getElementById("cancelResetBtn").addEventListener("click", function () {
    document.getElementById("confirmRow").style.display = "none";
  });
  document.getElementById("confirmResetBtn").addEventListener("click", async function () {
    checked = {}; tierMeta = {}; recallMap = {}; subNotes = {};
    await saveChecked();
    await saveState();
    ui.page = "overview"; ui.studyQueue = null; ui.interviewSession = null; ui._studyDone = {}; ui.drawer = null;
    renderAll();
  });
}

/* ================= global search ================= */
function performGlobalSearch(q) {
  const query = q.trim().toLowerCase();
  const resultsEl = document.getElementById("searchResults");
  if (!query) { resultsEl.style.display = "none"; resultsEl.innerHTML = ""; return; }
  const matches = [];
  TIERS.forEach(function (t) {
    if (t.name.toLowerCase().indexOf(query) !== -1) { matches.push({ tier: t, label: t.name }); return; }
    const hit = t.items.find(function (i) { return i.toLowerCase().indexOf(query) !== -1; });
    if (hit) matches.push({ tier: t, label: hit });
  });
  const top = matches.slice(0, 12);
  if (!top.length) { resultsEl.innerHTML = '<div class="sr-item">No matches</div>'; resultsEl.style.display = "block"; return; }
  resultsEl.innerHTML = top.map(function (m) {
    return '<div class="sr-item" data-goto-tier="' + tierKey(m.tier) + '">' + m.label +
      '<div class="sr-stack">' + STACK_LABEL[m.tier.stack] + " · " + m.tier.name + "</div></div>";
  }).join("");
  resultsEl.style.display = "block";
  resultsEl.querySelectorAll("[data-goto-tier]").forEach(function (n) {
    n.addEventListener("click", function () {
      const key = n.getAttribute("data-goto-tier");
      const t = getTierByKey(key);
      ui.page = "stack"; ui.stack = t.stack; ui.filterTag = "all"; ui.search = "";
      resultsEl.style.display = "none";
      document.getElementById("globalSearch").value = "";
      renderAll();
      openTopicDrawer(key);
    });
  });
}

/* ================= chrome / init ================= */
function closeMobileSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarBackdrop").classList.remove("open");
}
function initTopbar() {
  document.getElementById("hamburgerBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebarBackdrop").classList.toggle("open");
  });
  document.getElementById("sidebarBackdrop").addEventListener("click", closeMobileSidebar);
  document.getElementById("settingsBtn").addEventListener("click", function () { ui.page = "settings"; renderAll(); });
  const searchInput = document.getElementById("globalSearch");
  searchInput.addEventListener("input", function () { performGlobalSearch(searchInput.value); });
  document.addEventListener("click", function (e) {
    const box = document.querySelector(".searchbox");
    if (box && !box.contains(e.target)) {
      const results = document.getElementById("searchResults");
      if (results) results.style.display = "none";
    }
  });
}

function renderMainDispatch() {
  const main = document.getElementById("main");
  if (ui.page === "overview") renderOverviewPage(main);
  else if (ui.page === "stack") renderStackPage(main, ui.stack);
  else if (ui.page === "weak") renderWeakPage(main);
  else if (ui.page === "study") renderStudyPage(main);
  else if (ui.page === "interview") renderInterviewPage(main);
  else if (ui.page === "projects") renderProjectsPage(main);
  else if (ui.page === "settings") renderSettingsPage(main);
}
function renderAll() {
  renderSidebar();
  renderMainDispatch();
  renderDrawer();
}

(async function init() {
  await loadChecked();
  await loadState();
  ui.stack = ALL_STACKS[0];
  initTopbar();
  renderAll();
})();
