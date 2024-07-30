Expense Tracker Setup

1.Clone the repository:

   bash
    cd expense-tracker

2.Install dependencies

    bash
    npm install
    
3.Configure the database connection:
   - Update `src/config/db.js` with your MySQL credentials.
   - Create the database and tables using the provided SQL commands.

4.Run the application:

    bash
    npm start

5.API Endpoints:
   - POST /auth/register - Register a new user
   - POST /auth/login - Log in and get a JWT token
   - POST /expenses/add - Add a new expense (requires JWT token)
   - GET /expenses/view - View expenses (requires JWT token)

## Additional Information

- Ensure MySQL server is running.
- Use environment variables for sensitive data like JWT secret keys.
