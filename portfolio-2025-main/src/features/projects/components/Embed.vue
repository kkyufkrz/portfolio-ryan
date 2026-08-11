<script setup lang="ts">
import Notch from "../../../components/Notch.vue";

export interface Props {
  src: string;
  title?: string;
  caption?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Embedded Project Content",
  caption: "",
});
</script>

<template>
  <div class="project-embed">
    <div class="project-embed-content">
      <iframe
        :src="props.src"
        :title="props.title"
        class="project-embed-iframe"
        allowfullscreen
        loading="lazy"
        frameborder="0"
        allow="clipboard-write"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
    <div class="project-embed-caption" v-if="props.caption">
      <Notch class="project-embed-caption-notch project-embed-caption-notch-left" />
      <Notch class="project-embed-caption-notch project-embed-caption-notch-top" />
      <p class="project-embed-caption-copy">{{ props.caption }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-embed {
  width: 100%;
  height: 100%;
  grid-column: 1 / 13;
  max-width: 900px;
  justify-self: center;
  position: relative;
  min-height: 400px;
  height: 520px;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
    height: 560px;
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
    height: 600px;
  }

  &-caption {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-background-400);
    padding: var(--space-xxs) var(--space-sm);
    border-radius: var(--radius-md) 0 0 0;

    @include mixins.mq("md") {
      padding: var(--space-xxs) var(--space-sm);
    }

    @include mixins.mq("lg") {
      padding: var(--space-xs) var(--space-md);
      border-radius: var(--radius-lg) 0 0 0;
    }

    &-notch {
      position: absolute;
      color: var(--color-background-400);
      --icon-color: var(--color-background-400);
      width: var(--radius-md);

      @include mixins.mq("md") {
        width: var(--radius-lg);
      }

      &-left {
        left: 0;
        bottom: 0;
        transform: translate(-100%, 0) scale(-1) rotate(90deg);
      }

      &-top {
        top: 0;
        right: 0;
        transform: translate(0, -100%) scale(-1) rotate(90deg);
      }
    }

    &-copy {
      font-size: var(--font-size-sm);
      font-weight: 700;

      @include mixins.mq("md") {
        font-size: var(--font-size-md);
      }
    }
  }

  &-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  &-content {
    overflow: hidden;
    border-radius: var(--radius-lg);
    background-color: var(--color-background-300);
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-beige-300);
  }
}
</style>
