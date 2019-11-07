<template>
    <section>
        <div class="container">
            <div class="row">
                <loader v-if="loading"></loader>
                <div
                    v-if="!loading"
                    class="col col-sm-12"
                >
                    <div
                        class="filter"
                        :key="!reverse ? 'sort-amount-asc' : 'sort-amount-desc'"
                    >
                        Сортировать по {{ !reverse ? 'возрастанию' : 'убыванию' }} <a href="#" @click.prevent="reverseMovies"><i
                            class="fa opacity-50"
                            :class="{'fa-sort-amount-asc': !reverse, 'fa-sort-amount-desc': reverse}"
                        ></i></a>
                    </div>
                    <div>
                        <movie-item
                            v-for="movie in movies"
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
    import Vue from 'vue';
    import {mapGetters} from 'vuex';
    import Loader from './common/Loader';
    import MovieItem from './MovieItem';

    export default {
        name: "Main",

        components: {
            Loader,
            MovieItem,
        },

        data() {
            return {
                loading: false,
                bestMovies: [
                    'tt0111161',
                    'tt0068646',
                    'tt0468569',
                    'tt0071562',
                    'tt0167260',
                    'tt0110912',
                    'tt0108052',
                    'tt0050083',
                    'tt7286456',
                    'tt1375666',
                ],
                reverse: false,
            }
        },

        computed: {
            ...mapGetters({
                movies: 'movies',
            }),
        },

        created() {
            if (!this.movies.length) {
                this.loading = true;

                Promise.all(
                    this.bestMovies.map(movie => {
                        return this.fetchMovie(movie);
                    })
                )
                    .then(() => {
                        this.loading = false;
                        this.$toasted.success('Фильмы успешно загружены');
                    }, err => {
                        console.log(err);
                        this.$toasted.error('При загрузке произошла ошибка' + (err.message ? ': ' + err.message : ''));
                        this.loading = false;
                    });
            }
        },

        methods: {
            fetchMovie(movie) {
                return new Promise((resolve, reject) => {
                    Vue.axios
                        .get('', {
                            params: {
                                i: movie,
                            }
                        })
                        .then(({ data }) => {
                            if (data.Response === 'True') {
                                this.$store.dispatch('movieLoaded', {
                                    movie: data,
                                });

                                resolve();
                            } else {
                                reject(data.Error);
                            }
                        })
                        .catch(err => {
                            reject(err)
                        });
                });

            },

            reverseMovies() {
                this.$store.dispatch('reverseMovies');
                this.reverse = !this.reverse;
            },
        },
    }
</script>

<style lang="scss">
    .filter {
        margin-bottom: 1rem;
    }
</style>