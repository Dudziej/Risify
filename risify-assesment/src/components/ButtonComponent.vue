<template>
    <component :is="tag"
               :href="tag === 'a' ? href : undefined" 
               :target="tag === 'a' ? target : undefined"
               :to="tag === 'router-link' ? to : undefined"
               :class="buttonClasses" 
               @click="handleClick">
        <slot/>
    </component>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { createValidator } from '../validators/validators'

export default defineComponent({
    name: 'ButtonComponent',
    props: {
        tag: {
            type: String,
            default: 'button',
            validator: createValidator(['button', 'a', 'router-link'])
        },
        href: String,
        target: String,
        to: [String, Object],
        size: {
            type: String,
            default: 'regular',
            validator: createValidator(['small', 'regular', 'large'])
        },
        variant: {
            type: String,
            default: 'filled',
            validator: createValidator(['filled', 'outlined'])
        },
        color: {
            type: String, // nie zakładam defaultowej wartości żeby uniknąć importantów przy variancie "outlined"
            validator: createValidator(['orange', 'green', 'dgreen', 'red', 'yellow'])
        },
        block: Boolean,
        disabled: Boolean
    },
    setup(props, { emit }) {
        const buttonClasses = computed(() => [
            'button',
            `button--size-${props.size}`,
            `button--variant-${props.variant}`,
            `button--color-${props.color}`,
            { 'button--block': props.block, 'button--disabled': props.disabled }
        ]);

        const handleClick = (event: any) => {
            if (props.disabled) {
                event.preventDefault();
            } else {
                emit('click', event);
                console.log('emitted'); // na potrzeby przetestowania
            }
        };

        return { buttonClasses, handleClick };
    },
});
</script>
  
<style scoped lang="scss">

  $primary-L-orange: #C2664E; // mógłbym tu zrobić mapę scss kolorów ale przy tak małym projekcie nie ma to raczej sensu
  $primary-L-green: #30A47A;
  $primary-L-dark-green: #113A29;
  $primary-M-red: #F55555;
  $primary-M-orange: #FFBF52;
  $outlined-fill: #FFFFFF;
  $outlined-fill-hover: #DCF5EE;

.button {
    border-radius: 24px;
    padding: 14px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, border-color 0.3s, opacity 0.3s;
    margin: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
    height: 40px;

    &--size-small {
        border-radius: 20px;
        padding: 10px 16px;
        font-size: 14px;
        height: 32px;
    }

    &--size-large {
        border-radius: 28px;
        padding: 16px 24px;
        font-size: 18px;
        height: 48px;
    }

    &--variant-filled {
        // kod mógłby zostać wyrzucony chciałem jednak zachować spójność co do wytycznych w zadaniu, przy usuwaniu jednak musiałbym ustawić default w propsie color
        background-color: $primary-L-orange;  
        border: 1px solid $primary-L-orange;
        color: $outlined-fill;

        &:hover,
        &:focus {
            background-color: lighten($primary-L-orange, 10%);
        }
    }

    &--variant-outlined {
        background: $outlined-fill;
        border: 1px solid $primary-L-dark-green;
        color: $primary-L-dark-green;

        &:hover,
        &:focus {
            background-color: #DCF5EE;
        }
    }

    &--color-orange {
        background-color: $primary-L-orange;
        border: 1px solid $primary-L-orange; // przy większym projekcie wydzieliłbym kolory do dynamicznego stylowania w js a zmiany na hover rozwiązałbym eventami mouseenter/mouseleave
        color: $outlined-fill;

        &:hover,
        &:focus {
            background-color: lighten($primary-L-orange, 10%);
            border: 1px solid lighten($primary-L-orange, 10%);
        }
    }

    &--color-green {
        background-color: $primary-L-green;
        border: 1px solid $primary-L-green;
        color: $outlined-fill;

        &:hover,
        &:focus {
            background-color: lighten($primary-L-green, 10%);
            border: 1px solid lighten($primary-L-green, 10%);
        }
    }

    &--color-dgreen {
        background-color: $primary-L-dark-green;
        border: 1px solid $primary-L-dark-green;
        color: $outlined-fill;

        &:hover,
        &:focus {
            background-color: lighten($primary-L-dark-green, 10%);
            border: 1px solid lighten($primary-L-dark-green, 10%);
        }
    }

    &--color-red {
        background-color: $primary-M-red;
        border: 1px solid $primary-M-red;
        color: $outlined-fill;

        &:hover,
        &:focus {
            background-color: lighten($primary-M-red, 10%);
            border: 1px solid lighten($primary-M-red, 10%);
        }
    }

    &--color-yellow {
        background-color: $primary-M-orange;
        border: 1px solid $primary-M-orange;
        color: #000000;

        &:hover,
        &:focus {
            background-color: lighten($primary-M-orange, 10%);
            border: 1px solid lighten($primary-M-orange, 10%);
        }
    }

    &--disabled {
        opacity: 0.4;
        cursor: not-allowed;
        pointer-events: none;
    }

    &--block {
        width: 100%;
    }
}
</style>