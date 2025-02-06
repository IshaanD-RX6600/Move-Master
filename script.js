document.addEventListener('DOMContentLoaded', function() {
    // Existing form handling code
    const loginForm = document.getElementById('auth-form');
    const signupForm = document.getElementById('signupForm');
    const modal = document.getElementById('skill-modal');
    const closeButton = document.querySelector('.close-button');

    // Skill details object
    const skillDetails = {
        basketball: {
            shooting: {
                title: 'Shooting',
                description: 'Learn the fundamentals of shooting with proper technique and form.',
                imageUrl: 'images/shooting.jpg',
                steps: [
                    'Start by positioning your feet shoulder-width apart.',
                    'Hold the ball with your shooting hand under it and your guide hand on the side.',
                    'Focus on the target, usually the hoop or backboard.',
                    'Bend your knees and use your legs to generate power.',
                    'Push the ball upwards while straightening your legs, and snap your wrist to release the ball.',
                    'Follow through with your shooting hand, keeping it extended towards the basket.'
                ]
            },
            dribbling: {
                title: 'Dribbling',
                description: 'Master the art of dribbling to maintain control and navigate through defenders.',
                imageUrl: 'images/dribbling.jpg',
                steps: [
                    'Keep your knees slightly bent and stay low to maintain balance.',
                    'Use your fingertips to push the ball, not your palms.',
                    'Keep the ball close to your body and dribble with your dominant hand.',
                    'Practice dribbling with both hands to become versatile.',
                    'Keep your head up to see the court and avoid looking down at the ball.',
                    'Change directions and speed to throw off defenders.'
                ]
            },
            passing: {
                title: 'Passing',
                description: 'Learn different passing techniques to effectively move the ball to teammates.',
                imageUrl: 'images/passing.jpg',
                steps: [
                    'Use your chest pass for short to medium distances: push the ball from your chest with both hands.',
                    'For longer passes, use the overhead pass: bring the ball above your head and follow through.',
                    'Utilize bounce passes for tight situations: pass the ball off the floor to your teammate.',
                    'Ensure accuracy by aiming at your teammate’s hands and using proper force.',
                    'Practice passing with both hands and from different angles.'
                ]
            },
            defense: {
                title: 'Defense',
                description: 'Develop strong defensive skills to effectively guard opponents and prevent scoring.',
                imageUrl: 'images/defense.jpg',
                steps: [
                    'Stay low and keep your knees bent to maintain balance and agility.',
                    'Keep your arms up to block or alter your opponent’s shots.',
                    'Stay between your opponent and the basket while maintaining a defensive stance.',
                    'Use quick footwork to move laterally and stay in front of your opponent.',
                    'Watch your opponent’s hips, not the ball, to anticipate their moves.',
                    'Communicate with teammates to switch assignments and cover screens.'
                ]
            },
            drives: {
                title: 'Drives',
                description: 'Learn how to effectively drive to the basket to create scoring opportunities.',
                imageUrl: 'images/drives.jpg',
                steps: [
                    'Begin by dribbling towards the basket with controlled speed.',
                    'Use a strong, quick first step to get past your defender.',
                    'Protect the ball by keeping it close to your body and away from defenders.',
                    'Use your body to shield the defender while driving towards the basket.',
                    'Finish with a layup or a quick shot depending on the defense.',
                    'Practice driving from both sides of the court for versatility.'
                ]
            },
            layups: {
                title: 'Layups',
                description: 'Perfect the layup technique to finish plays close to the basket.',
                imageUrl: 'images/layup.jpg',
                steps: [
                    'Approach the basket at an angle to make the layup easier.',
                    'Use your dominant hand to guide the ball towards the hoop.',
                    'Jump off your opposite foot and use the backboard for accuracy.',
                    'Keep your body controlled and use a soft touch to make the layup.',
                    'Practice layups from both sides of the basket to build confidence.'
                ]
            },
            rebounding: {
                title: 'Rebounding',
                description: 'Improve your rebounding skills to gain possession of the ball after a missed shot.',
                imageUrl: 'images/rebounding.jpg',
                steps: [
                    'Position yourself between the basket and your opponent to secure the rebound.',
                    'Box out your opponent by spreading your arms and using your body to keep them away.',
                    'Use your legs to jump higher and reach for the ball.',
                    'Secure the ball with both hands and bring it down to your chest.',
                    'Practice timing your jumps to better anticipate the ball’s trajectory.'
                ]
            },
            behindthebackdribble: {
                title: 'Behind-the-Back Dribble',
                description: 'Master the behind-the-back dribble to improve ball-handling and evade defenders.',
                imageUrl: 'images/behind-the-back-dribble.jpg',
                steps: [
                    'Begin dribbling the ball with your dominant hand.',
                    'Swing the ball behind your back with a smooth, controlled motion.',
                    'Use your non-dominant hand to catch the ball and continue dribbling.',
                    'Keep your head up and stay aware of your surroundings.',
                    'Practice the move in both directions to become proficient.'
                ]
            },
            spinmove: {
                title: 'Spin Move',
                description: 'Learn the spin move to evade defenders and create space for a shot or drive.',
                imageUrl: 'images/spin-move.jpg',
                steps: [
                    'Start dribbling towards your defender and prepare to spin.',
                    'Plant your outside foot and use your inside foot to pivot and spin.',
                    'Keep the ball close to your body during the spin to protect it from defenders.',
                    'Use your body to shield the ball as you complete the spin move.',
                    'Finish the move with a shot or drive towards the basket.'
                ]
            }
        }
    };
    
    // Function to show skill details in modal
    function showSkillDetails(category, skill) {
        const skillInfo = skillDetails[category] && skillDetails[category][skill];
        if (skillInfo) {
            document.getElementById('modal-title').textContent = skillInfo.title;
            document.getElementById('modal-description').textContent = skillInfo.description;
            document.getElementById('modal-image').src = skillInfo.imageUrl;

            const stepsList = document.getElementById('steps-list');
            stepsList.innerHTML = ''; 
            if (skillInfo.steps) {
                skillInfo.steps.forEach(step => {
                    const listItem = document.createElement('li');
                    listItem.textContent = step;
                    stepsList.appendChild(listItem);
                });
            }
            modal.className = `modal ${category}`;
            modal.style.display = 'block';
        }
    }

    // Event listeners for form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                const result = await response.json();
                
                if (response.ok) {
                    alert('Successfully logged in!');
                    window.location.href = 'index.html'; 
                } else {
                    alert(`Login failed: ${result.error}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, password })
                });

                const result = await response.json();

                if (response.ok) {
                    alert('Signup successful! You can now log in.');
                    window.location.href = 'login.html'; 
                } else {
                    alert(`Signup failed: ${result.error}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    // Event listener for closing modal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Expose showSkillDetails function globally
    window.showSkillDetails = showSkillDetails;

    // Slideshow functionality
    const buttons = document.querySelectorAll('.button');
    const wrapperHolder = document.querySelector('.wrapper-holder');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;

    function goToSlide(index) {
        const offset = -100 * index;
        wrapperHolder.style.transition = 'transform 1s ease-in-out';
        wrapperHolder.style.transform = `translateX(${offset}vw)`;

        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    let slideInterval = setInterval(autoSlide, 5000);

    buttons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            clearInterval(slideInterval);
            currentSlide = index;
            goToSlide(currentSlide);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });

    // Add event listeners for skill tiles
    const skillTiles = document.querySelectorAll('.skill-tile');
    skillTiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const skill = this.getAttribute('data-skill');
            showSkillDetails(category, skill);
        });
    });
});