
Folder structure
src/config/	DB connection & environment config loading
src/controllers/	Handle HTTP requests and call services
src/routes/	Define routes and attach controllers
src/models/	Mongoose or ORM models with schema definitions
src/middlewares/	Auth checks, error handling, validations
src/services/	Reusable business logic (e.g., DB operations)
src/utils/	JWT, logging, helpers
src/types/	Custom TypeScript types and interfaces
src/app.ts	Express app setup, routes, middleware
src/server.ts	Bootstraps and starts the server