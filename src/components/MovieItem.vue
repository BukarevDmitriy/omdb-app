<template>
    <div class="item">
        <div class="item-img">
            <img :src="movie.Poster">
        </div>
        <div class="item-info">
            <h4 class="item-info__title">
                {{ movie.Title }}
            </h4>
            <div class="item-info__description">
                {{ movie.Plot }}
            </div>
            <ul class="item-info__about">
                <li class="item-info__about-item">
                    <span>Жанр: {{ movie.Genre }}</span>
                </li>
                <li class="item-info__about-item">
                    <span>Режисёр: {{ movie.Director }}</span>
                </li>
                <li class="item-info__about-item">
                    <span>Страна: {{ movie.Country }}</span>
                </li>
                <li class="item-info__about-item">
                    <span>В ролях: {{ movie.Actors }}</span>
                </li>
            </ul>
        </div>
        <div class="item-right">
            <div class="item-info__rating">
                Рейтинг: {{ movie.imdbRating }}
            </div>
            <div
                v-if="!favoritesKeys.includes(movie.imdbID)"
                class="item-info__favorites"
                :key="'add-favorites'"
            >
                Добавить в избранное <a href="#" @click.prevent="addToFavorites(movie.imdbID)"><i class="fa fa-star-o"></i></a>
            </div>
            <div
                v-if="favoritesKeys.includes(movie.imdbID)"
                class="item-info__favorites"
                :key="'remove-favorites'"
            >
                В избранном <a href="#" @click.prevent="removeFromFavorites(movie.imdbID)"><i class="fa fa-star"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "MovieItem",

        props: {
            movie: {
                type: Object,
                required: true,
            },
        },

        computed: {
            ...mapGetters({
                favoritesKeys: 'favoritesKeys',
            }),
        },

        methods: {
            addToFavorites(id) {
                this.$store.dispatch('addToFavorites', {
                    id,
                    callback: this.callbackAddToFavorites,
                });
            },

            callbackAddToFavorites() {
                this.$toasted.success('Фильм успешно добавлен в избранное');
            },

            removeFromFavorites(id) {
                this.$store.dispatch('removeFromFavorites', {
                    id,
                    callback: this.callbackRemoveFromFavorites,
                });
            },

            callbackRemoveFromFavorites() {
                this.$toasted.success('Фильм успешно убран из избранного');
            },
        },
    }
</script>

<style lang="scss">
    .item {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border: 1px solid #444;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.33);

        .item-img {
            flex-basis: 200px;
            min-width: 200px;
            border-radius: 10px;
            margin-right: 1rem;
        }

        .item-info {
            flex-basis: 700px;
            margin: 0 1rem;

            .item-info__description {
                padding: .25rem;
            }

            .item-info__about {
                margin: 1rem 0 0 1rem;
                display: flex;
                flex-direction: column;
                padding-left: 0;

                .item-info__about-item {
                    padding: .25rem;
                    border-radius: 0;
                    position: relative;
                    display: block;
                }
            }
        }

        .item-right {
            flex-basis: 500px;
            margin: 0 1rem;

            .item-info__rating {
                margin: .25rem;
            }

            .item-info__favorites {
                margin: .25rem;
            }
        }
    }
</style>