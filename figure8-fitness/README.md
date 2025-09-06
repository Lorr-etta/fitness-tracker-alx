# Figure 8 Fitness Landing Page

This is a responsive landing page for Figure 8 Fitness, built with React and Tailwind CSS. The project showcases a modern, interactive web design, with focus on usability, responsiveness, and aesthetic appeal.

## Features

### Navbar
- Fully responsive navigation bar.
- Sidebar menu for mobile view.
- Links to different sections: Home, About, Services, Contact, Community.
- Toggleable sidebar with smooth show/hide animations.

### Hero Section
- Full-screen hero with background image.
- Highlight text: *“Your fitness journey starts here”*, with clickable bounce animation.
- Join Now button, floating at top-right, responsive, and clickable.
- Dark overlay on the hero background to make text readable.

### Home Section
- Newly created content section showcasing the core features of the landing page.
- Fully responsive and styled consistently with the hero and navbar.

### Feature Section
- Highlights the unique features of Figure 8 Fitness.
- Clean card-based layout for clarity.
- Responsive design for both desktop and mobile screens.

### About Section
- Dedicated section describing Figure 8 Fitness.
- Provides context about the service/brand.
- Fully responsive and styled for readability.

### Services
- Yoga: Guided sessions to improve flexibility, balance, and relaxation.  
- Diet: Personalized meal plans and nutrition guidance for healthy living.  
- Virtual Coaching: Online coaching with certified trainers, accessible anytime.  
- Expert Advice: Professional tips and insights on fitness, nutrition, and lifestyle.

### Search Exercises Section
Search Exercises
- Added the SearchExercises component for users to search exercises.
- Fetches exercise data dynamically from the WGER API (no subscription required).
- Users can filter exercises by name, equipment, target muscle, and body part.
- Horizontal scroll for body parts implemented using react-horizontal-scrolling-menu.
- Fully responsive layout ensures search input and results display correctly on all screen sizes.

### WorkLogs Components
- Created and integrated new components under the WorkLogs folder to enhance the exercise tracking and browsing functionality.
- ExerciseCard: Displays individual exercise details with image, body part, and target information.
- Exercises: Handles fetching and rendering of exercises, includes pagination for better navigation.
- BodyPart: Allows users to filter exercises by category (e.g., chest, legs, abs). Interactive design with icon and smooth scroll effect.
- Updated layout to ensure smooth interaction between search functionality, body part filtering, and exercise display.
- Improved user experience by making the exercise section responsive and consistent with the rest of the site.

### Styling
- Tailwind CSS for utility-first styling.
- Custom CSS for animations, hero overlay, navbar shadows, and responsive behavior.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Lorr-etta/fitness-tracker-alx