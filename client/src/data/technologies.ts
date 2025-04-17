interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'cloud' | 'ai-ml' | 'mobile' | 'other';
  description: string;
}

// Frontend Technologies
const frontendTechnologies: Technology[] = [
  { name: 'React', category: 'frontend', description: 'A JavaScript library for building user interfaces' },
  { name: 'Angular', category: 'frontend', description: 'Platform for building mobile & desktop web applications' },
  { name: 'Vue.js', category: 'frontend', description: 'Progressive JavaScript framework for UIs' },
  { name: 'Next.js', category: 'frontend', description: 'React framework with SSR and static site generation' },
  { name: 'Svelte', category: 'frontend', description: 'Compiler that turns your templates into highly efficient code' },
  { name: 'Nuxt.js', category: 'frontend', description: 'Vue.js framework for building SSR applications' },
  { name: 'Remix', category: 'frontend', description: 'Full stack web framework based on React' },
  { name: 'Astro', category: 'frontend', description: 'All-in-one web framework for building fast websites' },
  { name: 'Redux', category: 'frontend', description: 'Predictable state container for JavaScript apps' },
  { name: 'MobX', category: 'frontend', description: 'Simple, scalable state management' },
  { name: 'Zustand', category: 'frontend', description: 'Small, fast and scalable state-management solution' },
  { name: 'Jotai', category: 'frontend', description: 'Primitive and flexible state management for React' },
  { name: 'Recoil', category: 'frontend', description: 'State management library for React' },
  { name: 'XState', category: 'frontend', description: 'State machines and statecharts for the modern web' },
  { name: 'TypeScript', category: 'frontend', description: 'Typed JavaScript at any scale' },
  { name: 'JavaScript', category: 'frontend', description: 'High-level, interpreted programming language' },
  { name: 'HTML', category: 'frontend', description: 'Standard markup language for web pages' },
  { name: 'CSS', category: 'frontend', description: 'Style sheet language for web pages' },
  { name: 'Sass', category: 'frontend', description: 'CSS preprocessor with variables and nesting' },
  { name: 'Less', category: 'frontend', description: 'Dynamic preprocessor style sheet language' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first CSS framework' },
  { name: 'Bootstrap', category: 'frontend', description: 'CSS framework for responsive websites' },
  { name: 'Material UI', category: 'frontend', description: 'React components that implement Google\'s Material Design' },
  { name: 'Chakra UI', category: 'frontend', description: 'Simple, modular and accessible component library for React' },
  { name: 'Styled Components', category: 'frontend', description: 'CSS-in-JS styling for React components' },
  { name: 'Emotion', category: 'frontend', description: 'CSS-in-JS library designed for high performance' },
  { name: 'Framer Motion', category: 'frontend', description: 'Production-ready motion library for React' },
  { name: 'Three.js', category: 'frontend', description: ' 3D library for creating WebGL-based graphics' },
  { name: 'D3.js', category: 'frontend', description: 'Library for producing dynamic, interactive data visualizations' },
  { name: 'Chart.js', category: 'frontend', description: 'Simple yet flexible JavaScript charting library' },
  { name: 'Webpack', category: 'frontend', description: 'Static module bundler for JavaScript applications' },
  { name: 'Vite', category: 'frontend', description: 'Next generation frontend tooling' },
  { name: 'Rollup', category: 'frontend', description: 'Module bundler for JavaScript libraries' },
  { name: 'Parcel', category: 'frontend', description: 'Zero configuration web application bundler' },
  { name: 'ESLint', category: 'frontend', description: 'Tool for identifying and fixing problems in JavaScript code' },
  { name: 'Prettier', category: 'frontend', description: 'Opinionated code formatter' },
  { name: 'Jest', category: 'frontend', description: 'JavaScript testing framework' },
  { name: 'Testing Library', category: 'frontend', description: 'Simple and complete testing utilities for React' },
  { name: 'Cypress', category: 'frontend', description: 'End-to-end testing framework' },
  { name: 'Storybook', category: 'frontend', description: 'UI component explorer for frontend developers' },
];

// Backend Technologies
const backendTechnologies: Technology[] = [
  { name: 'Node.js', category: 'backend', description: 'JavaScript runtime built on Chrome\'s V8 engine' },
  { name: 'Express', category: 'backend', description: 'Fast, unopinionated, minimalist web framework for Node.js' },
  { name: 'NestJS', category: 'backend', description: 'Progressive Node.js framework for building server-side applications' },
  { name: 'Django', category: 'backend', description: 'High-level Python web framework' },
  { name: 'Flask', category: 'backend', description: 'Lightweight WSGI web application framework in Python' },
  { name: 'FastAPI', category: 'backend', description: 'Modern, fast web framework for building APIs with Python' },
  { name: 'Ruby on Rails', category: 'backend', description: 'Web application framework written in Ruby' },
  { name: 'Spring Boot', category: 'backend', description: 'Java-based framework for building web applications' },
  { name: 'ASP.NET Core', category: 'backend', description: 'Cross-platform, high-performance framework for building web apps' },
  { name: 'Laravel', category: 'backend', description: 'PHP web application framework' },
  { name: 'Phoenix', category: 'backend', description: 'Web framework written in Elixir' },
  { name: 'Go', category: 'backend', description: 'Open source programming language designed at Google' },
  { name: 'Rust', category: 'backend', description: 'Multi-paradigm programming language focused on performance and safety' },
  { name: 'Java', category: 'backend', description: 'Class-based, object-oriented programming language' },
  { name: 'C#', category: 'backend', description: 'Modern, object-oriented programming language from Microsoft' },
  { name: 'Python', category: 'backend', description: 'Interpreted, high-level, general-purpose programming language' },
  { name: 'Ruby', category: 'backend', description: 'Dynamic, object-oriented programming language' },
  { name: 'PHP', category: 'backend', description: 'Server-side scripting language designed for web development' },
  { name: 'Elixir', category: 'backend', description: 'Functional, concurrent, general-purpose programming language' },
  { name: 'Scala', category: 'backend', description: 'High-level programming language that combines OO and functional programming' },
  { name: 'Kotlin', category: 'backend', description: 'Cross-platform, statically typed, general-purpose programming language' },
  { name: 'GraphQL', category: 'backend', description: 'Query language for your API' },
  { name: 'REST API', category: 'backend', description: 'Architectural style for distributed hypermedia systems' },
  { name: 'gRPC', category: 'backend', description: 'High performance, open source universal RPC framework' },
  { name: 'WebSockets', category: 'backend', description: 'Computer communications protocol for full-duplex communication' },
  { name: 'Serverless', category: 'backend', description: 'Cloud computing execution model for dynamic scaling' },
  { name: 'Microservices', category: 'backend', description: 'Architectural style for building applications as a collection of services' },
];

// Database Technologies
const databaseTechnologies: Technology[] = [
  { name: 'PostgreSQL', category: 'database', description: 'Powerful, open source object-relational database system' },
  { name: 'MySQL', category: 'database', description: 'Open-source relational database management system' },
  { name: 'MongoDB', category: 'database', description: 'Document-oriented NoSQL database' },
  { name: 'Redis', category: 'database', description: 'In-memory data structure store used as a database, cache, and message broker' },
  { name: 'SQLite', category: 'database', description: 'Self-contained, serverless, zero-configuration, SQL database engine' },
  { name: 'Cassandra', category: 'database', description: 'Distributed NoSQL database management system' },
  { name: 'DynamoDB', category: 'database', description: 'Fully managed NoSQL database service by AWS' },
  { name: 'Elasticsearch', category: 'database', description: 'Distributed, RESTful search and analytics engine' },
  { name: 'Firebase', category: 'database', description: 'Platform for developing web and mobile applications' },
  { name: 'Supabase', category: 'database', description: 'Open source Firebase alternative' },
  { name: 'Prisma', category: 'database', description: 'Next-generation ORM for Node.js and TypeScript' },
  { name: 'Drizzle ORM', category: 'database', description: 'TypeScript ORM for SQL databases' },
  { name: 'Sequelize', category: 'database', description: 'Promise-based Node.js ORM for SQL databases' },
  { name: 'TypeORM', category: 'database', description: 'ORM for TypeScript and JavaScript' },
  { name: 'Mongoose', category: 'database', description: 'MongoDB object modeling for Node.js' },
];

// DevOps Technologies
const devopsTechnologies: Technology[] = [
  { name: 'Docker', category: 'devops', description: 'Platform for developing, shipping, and running applications in containers' },
  { name: 'Kubernetes', category: 'devops', description: 'Open-source container-orchestration system for automating deployment, scaling, and management' },
  { name: 'Jenkins', category: 'devops', description: 'Open source automation server for CI/CD' },
  { name: 'GitHub Actions', category: 'devops', description: 'CI/CD platform integrated with GitHub' },
  { name: 'CircleCI', category: 'devops', description: 'Cloud-based CI/CD tool' },
  { name: 'TravisCI', category: 'devops', description: 'Hosted continuous integration service' },
  { name: 'GitLab CI', category: 'devops', description: 'CI/CD tool integrated with GitLab' },
  { name: 'Terraform', category: 'devops', description: 'Open-source infrastructure as code software tool' },
  { name: 'Ansible', category: 'devops', description: 'Open-source software provisioning, configuration management, and deployment tool' },
  { name: 'Puppet', category: 'devops', description: 'Configuration management tool for IT infrastructure' },
  { name: 'Chef', category: 'devops', description: 'Configuration management tool for infrastructure automation' },
  { name: 'Grafana', category: 'devops', description: 'Multi-platform open source analytics and interactive visualization web application' },
  { name: 'Prometheus', category: 'devops', description: 'Open-source systems monitoring and alerting toolkit' },
  { name: 'ELK Stack', category: 'devops', description: 'Elasticsearch, Logstash, and Kibana for log management' },
];

// Cloud Technologies
const cloudTechnologies: Technology[] = [
  { name: 'AWS', category: 'cloud', description: 'Amazon Web Services - Cloud computing platform' },
  { name: 'Azure', category: 'cloud', description: 'Microsoft\'s cloud computing platform' },
  { name: 'Google Cloud', category: 'cloud', description: 'Google\'s cloud computing platform' },
  { name: 'Heroku', category: 'cloud', description: 'Cloud platform as a service (PaaS)' },
  { name: 'Digital Ocean', category: 'cloud', description: 'Cloud infrastructure provider focused on simplicity' },
  { name: 'Netlify', category: 'cloud', description: 'Cloud computing company for web applications and static websites' },
  { name: 'Vercel', category: 'cloud', description: 'Cloud platform for static sites and serverless functions' },
  { name: 'Cloudflare', category: 'cloud', description: 'Web infrastructure and website security company' },
  { name: 'AWS Lambda', category: 'cloud', description: 'Serverless compute service by AWS' },
  { name: 'AWS S3', category: 'cloud', description: 'Object storage service by AWS' },
  { name: 'Azure Functions', category: 'cloud', description: 'Serverless compute service by Microsoft Azure' },
  { name: 'Google Cloud Functions', category: 'cloud', description: 'Serverless execution environment by Google Cloud' },
];

// AI/ML Technologies
const aiMlTechnologies: Technology[] = [
  { name: 'TensorFlow', category: 'ai-ml', description: 'Open source platform for machine learning' },
  { name: 'PyTorch', category: 'ai-ml', description: 'Open source machine learning framework' },
  { name: 'Keras', category: 'ai-ml', description: 'Deep learning API running on top of TensorFlow' },
  { name: 'Scikit-learn', category: 'ai-ml', description: 'Machine learning library for Python' },
  { name: 'Pandas', category: 'ai-ml', description: 'Data analysis and manipulation library for Python' },
  { name: 'NumPy', category: 'ai-ml', description: 'Library for numerical computing in Python' },
  { name: 'OpenCV', category: 'ai-ml', description: 'Computer vision and machine learning library' },
  { name: 'NLTK', category: 'ai-ml', description: 'Natural Language Toolkit for Python' },
  { name: 'spaCy', category: 'ai-ml', description: 'Industrial-strength natural language processing library' },
  { name: 'Hugging Face', category: 'ai-ml', description: 'AI community building the future of NLP' },
  { name: 'OpenAI API', category: 'ai-ml', description: 'API for accessing OpenAI\'s powerful AI models' },
  { name: 'GPT-4', category: 'ai-ml', description: 'Advanced language model by OpenAI' },
  { name: 'DALL-E', category: 'ai-ml', description: 'AI system that can create realistic images from text descriptions' },
  { name: 'Stable Diffusion', category: 'ai-ml', description: 'Deep learning, text-to-image model' },
  { name: 'Midjourney', category: 'ai-ml', description: 'AI-powered creative tool for image generation' },
  { name: 'Gemini', category: 'ai-ml', description: 'Google\'s multimodal AI model' },
  { name: 'Claude', category: 'ai-ml', description: 'AI assistant by Anthropic' },
  { name: 'LangChain', category: 'ai-ml', description: 'Framework for developing applications with LLMs' },
  { name: 'Llama', category: 'ai-ml', description: 'Open-source large language model by Meta' },
  { name: 'Whisper', category: 'ai-ml', description: 'Automatic speech recognition system by OpenAI' },
  { name: 'BERT', category: 'ai-ml', description: 'Bidirectional Encoder Representations from Transformers' },
  { name: 'Transformers', category: 'ai-ml', description: 'State-of-the-art NLP for PyTorch, TensorFlow, and JAX' },
  { name: 'Jupyter', category: 'ai-ml', description: 'Open-source software for interactive computing' },
  { name: 'Colab', category: 'ai-ml', description: 'Free Jupyter notebook environment by Google' },
  { name: 'Kaggle', category: 'ai-ml', description: 'Online community of data scientists and machine learning practitioners' },
  { name: 'MLflow', category: 'ai-ml', description: 'Open source platform for the machine learning lifecycle' },
  { name: 'Ray', category: 'ai-ml', description: 'Framework for scaling AI and Python applications' },
  { name: 'Databricks', category: 'ai-ml', description: 'Data analytics platform founded by the creators of Apache Spark' },
  { name: 'Vertex AI', category: 'ai-ml', description: 'Machine learning platform by Google Cloud' },
  { name: 'SageMaker', category: 'ai-ml', description: 'Machine learning platform by AWS' },
];

// Mobile Technologies
const mobileTechnologies: Technology[] = [
  { name: 'React Native', category: 'mobile', description: 'Framework for building native apps using React' },
  { name: 'Flutter', category: 'mobile', description: 'UI toolkit for building natively compiled applications' },
  { name: 'Swift', category: 'mobile', description: 'Programming language for iOS and macOS development' },
  { name: 'Kotlin', category: 'mobile', description: 'Modern programming language used for Android development' },
  { name: 'SwiftUI', category: 'mobile', description: 'UI toolkit for building user interfaces for iOS apps' },
  { name: 'Jetpack Compose', category: 'mobile', description: 'Modern toolkit for building native Android UI' },
  { name: 'Expo', category: 'mobile', description: 'Framework and platform for universal React applications' },
  { name: 'Ionic', category: 'mobile', description: 'Open source UI toolkit for building cross-platform mobile apps' },
  { name: 'Capacitor', category: 'mobile', description: 'Cross-platform native runtime for web apps' },
  { name: 'Cordova', category: 'mobile', description: 'Mobile application development framework' },
];

// Other Technologies
const otherTechnologies: Technology[] = [
  { name: 'Web3.js', category: 'other', description: 'Collection of libraries for interacting with Ethereum blockchain' },
  { name: 'Ethers.js', category: 'other', description: 'Complete Ethereum library and wallet implementation in JavaScript' },
  { name: 'Solidity', category: 'other', description: 'Object-oriented programming language for writing smart contracts' },
  { name: 'IPFS', category: 'other', description: 'Peer-to-peer hypermedia protocol' },
  { name: 'Blockchain', category: 'other', description: 'Distributed ledger technology' },
  { name: 'WebAssembly', category: 'other', description: 'Binary instruction format for a stack-based virtual machine' },
  { name: 'RabbitMQ', category: 'other', description: 'Open source message broker' },
  { name: 'Kafka', category: 'other', description: 'Distributed event streaming platform' },
  { name: 'Git', category: 'other', description: 'Distributed version control system' },
  { name: 'WebRTC', category: 'other', description: 'Real-time communication for the web' },
  { name: 'Socket.io', category: 'other', description: 'Library for real-time web applications' },
  { name: 'RxJS', category: 'other', description: 'Reactive Extensions Library for JavaScript' },
];

// Combine all technologies
export const allTechnologies: Technology[] = [
  ...frontendTechnologies,
  ...backendTechnologies,
  ...databaseTechnologies,
  ...devopsTechnologies,
  ...cloudTechnologies,
  ...aiMlTechnologies,
  ...mobileTechnologies,
  ...otherTechnologies,
];

// Grouping by category for easy access
export const technologiesByCategory = {
  frontend: frontendTechnologies,
  backend: backendTechnologies,
  database: databaseTechnologies,
  devops: devopsTechnologies,
  cloud: cloudTechnologies,
  'ai-ml': aiMlTechnologies,
  mobile: mobileTechnologies,
  other: otherTechnologies,
};

export default allTechnologies;