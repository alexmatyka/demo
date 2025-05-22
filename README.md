# Run the app
1. npm install
2. npm run dev


# User credentials
- Login: test
- Password: test


# Your approach and design choices
I chose the technologies recommended in the task description: Headless UI, React Query, and Zustand.

For styling, I used Tailwind CSS to gain experience with it, and because it's commonly used together with Headless UI.
In reality, I used only a few components from Headless UI, but the integration worked smoothly.


# If you had to do a second iteration, what would you add or improve?
1. Replace Tailwind with SCSS Modules.
2. Personally, I’m not a big fan of Tailwind for large projects, but I gave it a shot because Headless UI works well with it.
3. Add custom optimized fonts.
4. Move components to Storybook and create a reusable component library with elements like Typography, Box, and Grid, possibly in a monorepo setup.
5. Add responsive/adaptive design, and custom hooks to handle layout behavior based on screen size.
6. Add unit and integration tests to ensure stability and reliability.
7. Add import aliases (e.g. @components, @hooks) for cleaner and more maintainable code structure.
8. Due to the tight deadline, the project includes components with only the basic logic necessary for this test task.
In a real-world project, these components (such as tables, authentication, etc.) would need to be significantly extended and improved.
9. add virtualization + interdsection observer for data loading instead of show more button
10. add react hooks ( with zod for future extension )
11. add  i18n for translations
# demo
