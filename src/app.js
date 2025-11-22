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

// AWS S3 Resume Configuration
const AWS_CONFIG = {
    bucketName: 'abhishek-devops-portfolio',
    region: 'ap-south-1',
    resumeKey: 'Resume/Abhishek_AWScloudTrainee.pdf'
};
// https://abhishek-devops-portfolio.s3.ap-south-1.amazonaws.com/Resume/Abhishek_AWScloudTrainee.pdf

// Resume Download Function
document.getElementById('downloadResume').addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const resumeUrl = `https://${AWS_CONFIG.bucketName}.s3.${AWS_CONFIG.region}.amazonaws.com/${AWS_CONFIG.resumeKey}`;
        window.open(resumeUrl, '_blank');
    } catch (error) {
        console.error('Error downloading resume:', error);
        alert('Error downloading resume. Please try again later.');
    }
});

// Contact Form Modal
const modal = document.getElementById('contactModal');
const openModalBtn = document.getElementById('openContactForm');
const closeModal = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        // Here you can add your form submission logic
        // For example, sending to a server or AWS Lambda
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        e.target.reset();
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again later.');
    }
});

console.log("Portfolio site loaded successfully!");

// Example: Add a greeting in the console
const name = "Abhishek";
console.log(`Welcome to ${name}'s DevOps Portfolio 🚀`);
