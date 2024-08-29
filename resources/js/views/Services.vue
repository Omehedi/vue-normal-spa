<template>
    <!-- Root element added -->
    <div>
        <section class="services-section py-5">
            <div class="container">
                <h2 class="text-center mb-4">Our Services</h2>
                <div class="row">
                    <div class="col-md-4" v-for="(service, index) in services" :key="index">
                        <div class="card mb-4 shadow-sm">
                            <img :src="service.image" class="card-img-top" alt="Service Image">
                            <div class="card-body">
                                <h5 class="card-title">{{ service.title }}</h5>
                                <p class="card-text">{{ service.description }}</p>
                                <a href="#" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- footer -->
        <footer class="bg-dark text-white pt-5 pb-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-warning"> Company Name</h5>
                        <p>CodeCrafters Solutions

                            Tagline: Crafting Innovative Solutions for Tomorrow's Technology

                            About Us: CodeCrafters Solutions is a leading software development company dedicated to delivering cutting-edge software solutions that drive business success. Our team of expert developers, designers, and consultants are passionate about transforming ideas into powerful, scalable software products.</p>
                    </div>


                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Course</h5>

                        <p>
                            <a href="#" class="text-white" style="text-decoration: none;">Web Development</a>
                        </p>

                        <p>
                            <a href="#" class="text-white" style="text-decoration: none;">Graphic Design</a>
                        </p>

                        <p>
                            <a href="#" class="text-white" style="text-decoration: none;">Digital Marketing</a>
                        </p>

                        <p>
                            <a href="#" class="text-white" style="text-decoration: none;">Freelancing Overview</a>
                        </p>
                    </div>




                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
                        <p>
                            <i class="fa-brands fa-youtube"></i> Youtube
                        </p>

                        <p>
                            <i class="fa-brands fa-facebook"></i> Facebook
                        </p>

                        <p>
                            <i class="fa-brands fa-instagram"></i> Instagram
                        </p>

                        <p>
                            <i class="fa-brands fa-linkedin"></i> Linkedin
                        </p>

                        <p>
                            <i class="fa-brands fa-twitter"></i> twitter
                        </p>
                    </div>



                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Contanc</h5>
                        <p>
                            <i class="fas fa-home mr-3"></i> Bogura
                        </p>

                        <p>
                            <i class="fas fa-envelope mr-3"></i> mahinbabu042@gmail.com
                        </p>

                        <p>
                            <i class="fas fa-phone mr-3"></i> +01310690474
                        </p>

                        <p>
                            <i class="fas fa-location-arrow mr-3"></i> Bogura,2nd Bonani Bypas
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Services',
        data() {
            return {
                services: [
                    {
                        title: 'Web Development',
                        description: 'We provide high-quality web development services.',
                        image: 'https://img.freepik.com/premium-photo/cartoon-3d-character-developer-working-laptop-web-app-development-frontend-deployment_1295366-44780.jpg'
                    },
                    {
                        title: 'Graphic Design',
                        description: 'Creative and professional graphic design services.',
                        image: 'https://t4.ftcdn.net/jpg/06/01/29/15/360_F_601291576_9vcyvR9S6YtTQjHLXsSQT25ziNUgR9Ec.jpg'
                    },
                    {
                        title: 'Digital Marketing',
                        description: 'Expert digital marketing services to grow your business.',
                        image: 'https://img.freepik.com/premium-photo/cartoon-3d-character-developer-working-laptop-web-app-development-frontend-deployment_1295366-45083.jpg'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .services-section {
        background-color: #f8f9fa;
    }
    .card {
        border: none;
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
    }
    .card:hover {
        transform: scale(1.05);
    }
    .footer {
        background-color: #333;
    }
</style>
