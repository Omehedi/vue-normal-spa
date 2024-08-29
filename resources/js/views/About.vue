<!--<template>-->
<!--    <div class="container mt-5">-->
<!--        <div class="text-center">-->
<!--            <h1 class="display-4">I am from About Component</h1>-->
<!--            <p class="lead">This is the About Page content, styled with Bootstrap.</p>-->

<!--            <div class="mt-4">-->
<!--                <router-link to="/admin/home" class="btn btn-primary mx-2">Home</router-link>-->
<!--                <router-link to="/admin/about" class="btn btn-secondary mx-2">About</router-link>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "About"-->
<!--    };-->
<!--</script>-->

<!--<style scoped>-->
<!--    /* Additional styles can be added here if needed */-->
<!--</style>-->




<!-- src/components/About.vue -->
<template>
    <div class="about container my-5">
        <!-- About Section Header -->
        <div class="text-center mb-5">
            <h2 class="font-weight-bold display-5">About Us</h2>
            <p class="text-muted lead">Get to know more about our mission, vision, and the team behind our success.</p>
        </div>

        <!-- About Content Section -->
        <div class="row">
            <!-- About Text Section -->
            <div class="col-lg-6 mb-4">
                <div class="card border-0 shadow-lg h-100">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">Who We Are</h5>
                        <p class="card-text text-muted">
                            We are a passionate team dedicated to delivering exceptional services. Our mission is to provide high-quality solutions that meet the unique needs of our customers. With years of experience in the industry, we strive to make a positive impact through innovation and customer care.
                        </p>
                        <p class="card-text text-muted">
                            Our vision is to be a leading provider in our field, recognized for our commitment to quality and customer satisfaction.
                        </p>
                        <button class="btn btn-primary mt-3" @click="learnMore">Learn More</button>
                    </div>
                </div>
            </div>

            <!-- About Team Section -->
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6 mb-4" v-for="(member, index) in teamMembers" :key="index">
                        <div class="card border-0 shadow-sm">
                            <img :src="member.photo" class="card-img-top" :alt="member.name">
                            <div class="card-body text-center">
                                <h6 class="card-title font-weight-bold mb-1">{{ member.name }}</h6>
                                <p class="card-text text-muted small">{{ member.position }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        data() {
            return {
                teamMembers: [
                    { name: 'Jerin Aktar', position: 'CEO & Founder', photo: 'data:image/jpeg;base64,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' },
                    { name: 'Sadiya', position: 'Chief Marketing Officer', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwn6mSiNzIEM_dIRN3zH1Xa8nThbac9sz7w&s' },
                    { name: 'Emily Johnson', position: 'Head of Development', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPY6fHAnMpNsjGD-q7rwvSAREnZHLzNlU77EHJJtSCHj5qNa2BCZYHENoK46hMZ-WOys&usqp=CAU' },
                    { name: 'Michael Brown', position: 'Product Manager', photo: 'https://img.freepik.com/premium-photo/cartoon-3d-character-developer-working-laptop-web-app-development-frontend-deployment_1295366-45176.jpg' }
                ]
            };
        },
        methods: {
            learnMore() {
                alert('Learn more about our mission and vision!');
            }
        }
    }
</script>

<style scoped>
    .about .card {
        border-radius: 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .about .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .card-img-top {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    .btn-primary {
        background-color: #0056b3;
        border-color: #004085;
    }

    .shadow-lg {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
</style>

