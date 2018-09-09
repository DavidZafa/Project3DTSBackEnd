# Project3DTSBackEnd

# Planning

App should have:

1. User model : Full CRUD on User
2. News model : READ
3. Animals model : READ

# User

### User can:

1. See news articles / Go to articles page
2. See a little intro about the app
3. Go to the animals page
4. Signup to create an account
5. Login to access individual user page
6. Once logged in, add an animal to his/her individual User page
7. Logout

### User model needs:

1. Image : To add User image
2. Email & Password : For authentication
3. Reference to Animals

### User routes needed:

1. Post for User login, User signup, and to Add animals
2. Delete to remove animals and User Account
3. Get to get all animals, a specific animal's id page

# Animals

### Animal page

For backend: Read the database and get all the animals to populate on animal show page

### Animal model needs:

1. Image : Picture of animal
2. Animal name
3. Species name
4. Where the animal lives
5. Habitat
6. Endangered Level
7. Population
8. Information about the animal

### Animal routes needs:

1. Get for all the animals
2. Get for one animal

# News

### News page

For backend: Read the database and populate all the news articles on the page

### News model needs:

1. Author
2. Title
3. Image : Picture related to news
4. Description
5. Post : The actual article

### News routes needs:

1. Get for all the news articles

### Backend Individuals

1. Tasha - User Model
   \*\* Responsible for full User model including routes and controllers
2. Stephanie - News and Animal Models
   \*\* Responsible for full News and Animal models including routes and controllers
