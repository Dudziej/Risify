<template>
    <component :is="tag"
               :href="tag === 'a' ? href : undefined" 
               :target="tag === 'a' ? target : undefined"
               :to="tag === 'router-link' ? to : undefined"
               :class="buttonClasses" @click="handleClick">
        <slot />
    </component>
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'ButtonComponent',
    props: {
        tag: {
            type: String,
            default: 'button',
            validator: (value: string) => ['button', 'a', 'router-link'].includes(value)
        },
        href: String,
        target: String,
        to: [String, Object],
        size: {
            type: String,
            default: 'regular',
            validator: (value: string) => ['small', 'regular', 'large'].includes(value)
        },
        variant: {
            type: String,
            default: 'filled',
            validator: (value: string) => ['filled', 'outlined'].includes(value)
        },
        color: {
            type: String,
            default: 'orange',
            validator: (value: string) => ['orange', 'green', 'dgreen', 'red', 'yellow'].includes(value)
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

.button {
    border-radius: 24px;
    padding: 14px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
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
        background-color: #C2664E;
        border: 1px solid #C2664E;
        color: white;

        &:hover,
        &:focus {
            background-color: lighten(#C2664E, 10%);
        }
    }

    &--variant-outlined {
        background: #FFFFFF !important;
        border: 1px solid #113A29 !important;
        color: #113A29 !important;

        &:hover,
        &:focus {
            background-color: #DCF5EE !important;
        }
    }

    &--color-orange {
        background-color: #C2664E;
        border: 1px solid #C2664E;
        color: white;

        &:hover,
        &:focus {
            background-color: lighten(#C2664E, 10%);
            border: 1px solid lighten(#C2664E, 10%);
        }
    }

    &--color-green {
        background-color: #30A47A;
        border: 1px solid #30A47A;
        color: white;

        &:hover,
        &:focus {
            background-color: lighten(#30A47A, 10%);
            border: 1px solid lighten(#30A47A, 10%);
        }
    }

    &--color-dgreen {
        background-color: #113A29;
        border: 1px solid #113A29;
        color: white;

        &:hover,
        &:focus {
            background-color: lighten(#113A29, 10%);
            border: 1px solid lighten(#113A29, 10%);
        }
    }

    &--color-red {
        background-color: #F55555;
        border: 1px solid #F55555;
        color: white;

        &:hover,
        &:focus {
            background-color: lighten(#F55555, 10%);
            border: 1px solid lighten(#F55555, 10%);
        }
    }

    &--color-yellow {
        background-color: #FFBF52;
        border: 1px solid #FFBF52;
        color: black;

        &:hover,
        &:focus {
            background-color: lighten(#FFBF52, 10%);
            border: 1px solid lighten(#FFBF52, 10%);
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