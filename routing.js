// Page Router - Handles navigation between pages
class PageRouter {
    constructor() {
        this.currentPage = 'registration-page';
        this.registrationData = {};
        this.initializeRouting();
    }

    // Initialize routing and event listeners
    initializeRouting() {
        // Handle registration form submission
        const registrationForm = document.getElementById('registration-form');
        if (registrationForm) {
            registrationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegistrationSubmit();
            });
        }

        // Handle back button on confirmation page
        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                this.navigateToPage('registration-page');
                this.resetForm();
            });
        }
    }

    // Navigate to a specific page
    navigateToPage(pageId) {
        const currentPageEl = document.getElementById(this.currentPage);
        const newPageEl = document.getElementById(pageId);

        if (currentPageEl && newPageEl) {
            currentPageEl.classList.remove('active');
            newPageEl.classList.add('active');
            this.currentPage = pageId;
        }
    }

    // Handle registration form submission
    handleRegistrationSubmit() {
        const formData = new FormData(document.getElementById('registration-form'));
        
        this.registrationData = {
            fullname: formData.get('fullname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            event: formData.get('event'),
            eventDate: formData.get('event-date'),
            gender: formData.get('gender'),
            message: formData.get('message')
        };

        // Display confirmation data
        this.displayConfirmation();
        
        // Navigate to confirmation page
        this.navigateToPage('confirmation-page');
    }

    // Display confirmation data on the confirmation page
    displayConfirmation() {
        document.getElementById('confirm-name').textContent = this.registrationData.fullname;
        document.getElementById('confirm-email').textContent = this.registrationData.email;
        document.getElementById('confirm-phone').textContent = this.registrationData.phone;
        document.getElementById('confirm-event').textContent = this.registrationData.event;
        document.getElementById('confirm-date').textContent = this.registrationData.eventDate;
        document.getElementById('confirm-gender').textContent = this.registrationData.gender.charAt(0).toUpperCase() + this.registrationData.gender.slice(1);
    }

    // Reset form for new registration
    resetForm() {
        document.getElementById('registration-form').reset();
        this.registrationData = {};
    }
}

// Initialize the router when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PageRouter();
});
