document.addEventListener('DOMContentLoaded', () => {
    // Select all FAQ containers
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        // Attach click listener to the entire item
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            
            // Toggle the 'active' class to show/hide the answer (CSS handles max-height)
            if (answer) {
                answer.classList.toggle('active');
            }
            
            // Toggle the 'active' class on the icon for rotation (CSS handles rotation)
            if (icon) {
                icon.classList.toggle('active');
            }
            
            // Close all other open answers (classic accordion behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    
                    if (otherAnswer && otherAnswer.classList.contains('active')) {
                        otherAnswer.classList.remove('active');
                    }
                    if (otherIcon && otherIcon.classList.contains('active')) {
                        otherIcon.classList.remove('active');
                    }
                }
            });
        });
    });
});