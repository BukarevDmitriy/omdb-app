<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
                    <div
                        v-if="!favorites.length"
                        class="info-container"
                    >
                        <div>
                            На данный момент у вас не добавлено ни одного фильма в избранное
                        </div>
                        <router-link
                            :to="{name: 'main'}"
                            active-class="active"
                            class="btn btn-primary"
                        >
                            К списку фильмов
                        </router-link>
                    </div>
                    <div v-if="favorites.length">
                        <movie-item
                            v-for="movie in favorites"
                            :key="movie.imdbID"
                            :movie="movie"
                        >
                        </movie-item>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
    import {mapGetters} from 'vuex';
    import MovieItem from './MovieItem';

    export default {
        name: "Favorites",

        components: {
            MovieItem,
        },

        computed: {
            ...mapGetters({
                favorites: 'favorites',
            }),
        },
    }
</script>

<style lang="scss">
    .info-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border: 1px solid #444;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.33);
    }
</style>