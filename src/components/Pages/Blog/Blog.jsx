
const Blog = () => {
    return (
        <div className="container mx-auto mb-20">
            <div>
                <h3 className="text-4xl mt-12"><span className="font-bold">1. Question:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <div>

                    <p className="mt-5 mb-2"><span className="font-bold">Answer:</span> An access token and refresh token are both commonly used in authentication and authorization processes. {"Here's"} an explanation of each:</p>
                    <ol>
                        <li className="list-decimal">Access Token: An access token is a credential that is used to gain access to protected resources. It is typically a string of characters that is issued by an authentication server after a user successfully authenticates. The access token contains information such as the {"user's"} identity and the permissions granted. This token is then included in each subsequent request to access protected resources, allowing the server to verify the {"user's"} identity and authorization.</li>
                        <li className="list-decimal">Refresh Token: A refresh token is also issued by the authentication server alongside the access token. It is a long-lived credential that is used to obtain a new access token when the current one expires. Refresh tokens are typically used to improve security since they have a longer lifespan compared to access tokens. When an access token expires, the client can send the refresh token to the authentication server to obtain a new access token without requiring the user to reauthenticate.</li>
                    </ol>
                </div>
            </div>
            <div>
                <h3 className="text-4xl mt-12"><span className="font-bold">2. Question:</span> Compare SQL and NoSQL databases?</h3>
                <div>

                    <p className="mt-5 mb-2"><span className="font-bold">Answer:</span> SQL and NoSQL are two broad categories of database management systems (DBMS) that differ in their data models, query languages, and overall design principles. {"Here's"} a comparison between SQL and NoSQL databases:</p>
                    <ol>
                        <p className="font-bold my-3">SQL Databases:</p>
                        <li className="list-decimal">Data Model: SQL databases use a structured data model based on tables with predefined schemas. They enforce strict data consistency and integrity rules through the use of primary keys, foreign keys, and constraints. Data is organized into rows and columns, forming a relational structure.</li>
                        <li className="list-decimal">Query Language: SQL databases use the Structured Query Language (SQL) to query and manipulate data. SQL provides a standardized syntax for creating, modifying, and retrieving data from relational databases. It offers powerful features like joins, transactions, and aggregate functions.</li>
                    </ol>
                    <ol>
                        <p className="font-bold my-3">NoSQL Databases:</p>
                        <li className="list-decimal">Data Model: NoSQL databases use various data models like key-value, document, columnar, or graph. They offer greater flexibility and schema-less designs, allowing for dynamic and unstructured data. This flexibility makes NoSQL databases suitable for handling rapidly changing or unstructured data.</li>
                        <li className="list-decimal">Query Language: NoSQL databases may use different query languages depending on the data model. Some NoSQL databases provide their own query languages, while others offer APIs or interfaces for data retrieval and manipulation.</li>
                    </ol>
                </div>
            </div>
            <div>
                <h3 className="text-4xl mt-12"><span className="font-bold">3. Question:</span> What is express js? What is Nest JS</h3>
                <div>

                    <p className="mt-5 mb-2"><span className="font-bold">Answer:</span> Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible set of tools for building web applications and APIs. Express.js is known for its simplicity, ease of use, and extensive middleware ecosystem. where as NestJS, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and follows the modular architecture inspired by Angular. NestJS combines elements of object-oriented programming, functional programming, and functional reactive programming.</p>
                    <ol>
                        <p className="font-bold my-3">Key features of Express.js include:</p>
                        <li className="list-decimal">Routing: Express.js allows you to define routes to handle different HTTP requests (GET, POST, PUT, DELETE, etc.) for specific URL patterns. You can specify middleware functions to handle these routes, enabling you to process requests, perform validations, and execute other tasks.</li>
                        <li className="list-decimal">Middleware: Express.js makes extensive use of middleware, which are functions that can intercept and modify HTTP requests and responses. Middleware functions can be used for tasks like authentication, logging, error handling, request parsing, and more. Express.js offers a wide range of built-in middleware, and you can also create custom middleware for your application.</li>
                    </ol>
                    <ol>
                        <p className="font-bold my-3">Key features of NestJS include:</p>
                        <li className="list-decimal">Decorators and Dependency Injection: NestJS uses decorators and dependency injection to provide a modular and reusable code structure. Decorators are used to define controllers, modules, and providers, while dependency injection allows you to easily inject dependencies into classes.</li>
                        <li className="list-decimal">Modularity: NestJS emphasizes the use of modules to organize application code. Modules encapsulate related functionality, and dependency injection is used to provide access to shared resources across different modules.</li>
                    </ol>
                </div>
            </div>
            <div>
                <h3 className="text-4xl mt-12"><span className="font-bold">4. Question:</span> What is MongoDB aggregate and how does it work </h3>
                <div>

                    <p className="mt-5 mb-2"><span className="font-bold">Answer:</span> In MongoDB, the aggregation framework is a powerful tool that allows you to process and analyze data from one or more collections in a flexible and efficient manner. It provides a set of operators and stages that can be combined to perform complex data transformations, calculations, and aggregations.</p>
                    <ol>
                        <p className="font-bold my-3">The aggregation pipeline in MongoDB consists of multiple stages that are executed sequentially, with the output of each stage serving as the input for the next stage. {"Here's"} an overview of how the aggregation pipeline works:</p>
                        <li className="list-decimal">Match Stage: The match stage is an optional stage that filters documents based on specified criteria. It works similarly to the find query, allowing you to select documents that match certain conditions.</li>
                        <li className="list-decimal">Group Stage: The group stage groups documents together based on a specified key or keys and performs calculations on the grouped data. You can use various aggregation operators like sum, count, average, min, max, etc., to perform calculations on the grouped data.</li>
                    </ol>
                    <ol>
                        <p className="font-bold my-3">NoSQL Databases:</p>
                        <li className="list-decimal">Data Model: NoSQL databases use various data models like key-value, document, columnar, or graph. They offer greater flexibility and schema-less designs, allowing for dynamic and unstructured data. This flexibility makes NoSQL databases suitable for handling rapidly changing or unstructured data.</li>
                        <li className="list-decimal">Query Language: NoSQL databases may use different query languages depending on the data model. Some NoSQL databases provide their own query languages, while others offer APIs or interfaces for data retrieval and manipulation.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blog;