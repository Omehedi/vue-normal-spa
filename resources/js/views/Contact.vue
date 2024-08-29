<template>
    <div class="contact-section py-5">
        <div class="container">
            <h2 class="text-center mb-4">Contact Us</h2>
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <form @submit.prevent="handleSubmit" class="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input
                                    type="text"
                                    id="name"
                                    v-model="form.name"
                                    class="form-control"
                                    placeholder="Enter your name"
                                    required
                            />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                    type="email"
                                    id="email"
                                    v-model="form.email"
                                    class="form-control"
                                    placeholder="Enter your email"
                                    required
                            />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea
                                    id="message"
                                    v-model="form.message"
                                    class="form-control"
                                    rows="5"
                                    placeholder="Your message"
                                    required
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: ''
                }
            };
        },
        methods: {
            handleSubmit() {
                // Handle form submission
                alert('Message sent!');
                // Reset form
                this.form.name = '';
                this.form.email = '';
                this.form.message = '';
            }
        }
    };
</script>

<style scoped>
    .contact-section {
        background-color: #f8f9fa;
    }

    .contact-form {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .contact-form .form-control {
        border-radius: 5px;
    }

    .contact-form .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
    }

    .contact-form .btn-primary:hover {
        background-color: #0056b3;
        border-color: #004085;
    }
</style>
