<template>
    <div id="app">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <!-- Brand -->
                <a class="navbar-brand" href="#">Super Store</a>

                <!-- Toggler for mobile view -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar Links -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link to="/admin/home" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/about" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/services" class="nav-link">Services</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin/contact" class="nav-link">Contact</router-link>
                        </li>
                    </ul>

                    <!-- Search Box -->
                    <form class="d-flex ms-auto">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <!-- Router View -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .navbar-brand {
        font-weight: bold;
    }
    .nav-link {
        margin-right: 15px;
    }
</style>














