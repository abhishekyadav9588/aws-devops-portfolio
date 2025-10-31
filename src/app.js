// Simple script to confirm the site is working
// Animate skill bars on scroll
function animateSkills() {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const targetWidth = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = targetWidth;
        }, 200);
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (entry.target.id === 'skills') {
                animateSkills();
            }
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

console.log("Portfolio site loaded successfully!");

// Example: Add a greeting in the console
const name = "Abhishek";
console.log(`Welcome to ${name}'s DevOps Portfolio 🚀`);
