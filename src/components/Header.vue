<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <ul class="nav navbar-nav">
                                <router-link
                                    :to="{name: 'main'}"
                                    tag="li"
                                    active-class="active"
                                >
                                    <a href="#">Главная</a>
                                </router-link>
                                <router-link
                                    :to="{name: 'favorites'}"
                                    tag="li"
                                    active-class="active"
                                >
                                    <a href="#">Избранное</a>
                                </router-link>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>