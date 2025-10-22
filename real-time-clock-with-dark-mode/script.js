// Elements
        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('date');
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        
        // Format options
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        // Update time function
        function updateClock() {
            const now = new Date();
            
            // Update time display
            timeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);
            
            // Update date display
            dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
        }
        
        // Toggle dark mode
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        }
        
        // Check for saved preference
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        
        // Event listeners
        darkModeToggle.addEventListener('change', toggleDarkMode);
        
        // Initial call and set interval
        updateClock();
        setInterval(updateClock, 1000);