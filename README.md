LiftLogic

LiftLogic is a React app designed to generate custom workout plans, track progress, and provide exercise guidance. With features like personalized routines, an exercise database, and progress tracking, LiftLogic empowers users to optimize their fitness journey. Perfect for individuals or groups aiming to lift smarter, not harder.

Link : https://liftlogicbyachraf.netlify.app/#workout

Key Features

	•	Custom Workout Plans: Create personalized routines based on fitness level and goals.
	•	Progress Tracking: Monitor strength and endurance improvements over time.
	•	Exercise Database: Explore exercises with detailed instructions.

Tech Stack

	•	Frontend: React.js
	•	State Management: React Hooks (useState...)
	•	Styling: TailWindCSS

Setup Instructions

	1.	Clone the repository:

git clone https://github.com/Achraf921/LiftLogic-Gym-WorkoutGenerator-ReactApp.git


	2.	Navigate to the project folder:

cd LiftLogic-Gym-WorkoutGenerator-ReactApp


	3.	Install dependencies:

npm install


	4.	Create a .env file and add your environment variables (if required):

REACT_APP_API_URL=your_backend_url


	5.	Run the development server:

npm start

Folder Structure

src/
├── components/
│   ├── Hero.jsx            # Hero section (intro/landing view)
│   ├── Generator.jsx       # Handles user inputs for workout generation
│   ├── Workout.jsx         # Displays the generated workout
├── hooks/
│   └── useLocalStorage.js  # Custom hook for managing local storage
├── services/
│   └── workoutAPI.js       # Service for generating and managing workouts
├── App.jsx                 # Main application file
├── index.js                # Entry point for React
└── index.css               # Global styling
